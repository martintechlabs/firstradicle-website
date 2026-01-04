import { OrganicButton } from "@/components/LandingComponents";
import { ArrowLeft, Check, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escaping the Airtable Trap - First Radicle",
  description: "How we migrated 50k records from Airtable to PostgreSQL without losing a single record.",
};

export default function EscapingAirtable() {
  return (
    <>
      {/* Article Header */}
      <header className="pt-20 pb-12 bg-secondary/30">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <OrganicButton variant="secondary" className="text-sm py-2 px-4 inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </OrganicButton>
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm font-sans font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            <span className="text-primary">Technical Migration</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>Oct 12, 2025</span>
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-primary">
            Escaping the Airtable Trap: Migrating 50k Records to PostgreSQL
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
            Airtable is fantastic for prototyping, but when you hit the 50k record limit or need complex relational queries, it becomes a bottleneck. Here's how we architect a zero-downtime migration.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container max-w-5xl mx-auto -mt-12 mb-20 relative z-10">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <Image 
            src="/images/blog-airtable.png" 
            alt="Airtable to Database Migration Illustration" 
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-3xl mx-auto pb-32">
        
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:rounded prose-code:font-mono prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border">
          
          <p className="lead text-xl font-medium text-foreground mb-12">
            We recently worked with a logistics startup that was running their entire operation on Airtable. They had 48,000 records in their main "Shipments" table and were hitting API rate limits daily. Their "database" was effectively a spreadsheet, and it was starting to crack.
          </p>

          <h3>The Challenge: Relational Integrity</h3>
          <p>
            The biggest hurdle in moving from Airtable to SQL isn't the data volume—50k records is nothing for PostgreSQL. The challenge is <strong>preserving relationships</strong>.
          </p>
          <p>
            In Airtable, a "Linked Record" is an array of IDs (e.g., <code>["rec123...", "rec456..."]</code>). In a proper relational database, this needs to be normalized into foreign keys or join tables. If you just dump the JSON, you're not building a database; you're building a slower Airtable.
          </p>

          <div className="my-12 p-8 bg-secondary/30 rounded-xl border border-border">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              The Migration Strategy
            </h4>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span><strong>Step 1: Schema Mapping.</strong> Define TypeScript interfaces for both the Airtable Source and the Postgres Destination.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span><strong>Step 2: The Extract.</strong> Paginate through Airtable API to fetch all records, handling rate limits with exponential backoff.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span><strong>Step 3: The Transform.</strong> Resolve Linked Record IDs to real foreign keys.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span><strong>Step 4: The Load.</strong> Bulk insert into Postgres using transactions to ensure atomicity.</span>
              </li>
            </ul>
          </div>

          <h3>Step 1: Type-Safe Schema Definition</h3>
          <p>
            We start by defining exactly what we're dealing with. This prevents "undefined" errors halfway through a 2-hour migration script.
          </p>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">types/migration.ts</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
{`// 1. The Source (Airtable)
interface AirtableShipment {
  id: string;
  fields: {
    "Tracking Number": string;
    "Status": "In Transit" | "Delivered" | "Pending";
    "Customer": string[]; // Array of Record IDs ["recABC..."]
    "Value": number;
  }
}

// 2. The Destination (Postgres/Prisma)
interface DbShipment {
  id: string; // We keep the Airtable ID initially for mapping
  trackingNumber: string;
  status: ShipmentStatus;
  customerId: string; // Single Foreign Key
  value: number;
}`}
            </pre>
          </div>

          <h3>Step 2: Handling Pagination & Rate Limits</h3>
          <p>
            Airtable's API is strict (5 requests/second). If you try to <code>Promise.all</code> 50k records, you'll get banned. We use a custom iterator with a built-in delay.
          </p>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">utils/airtable-fetcher.ts</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
{`async function* fetchAllRecords(baseId: string, table: string) {
  let offset = undefined;
  
  do {
    const response = await airtable.get(\`/\${baseId}/\${table}\`, {
      params: { offset, pageSize: 100 }
    });

    yield response.data.records;
    
    offset = response.data.offset;
    
    // Crucial: Wait 250ms between pages to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 250));
    
  } while (offset);
}`}
            </pre>
          </div>

          <h3>Step 3: Resolving Relationships</h3>
          <p>
            This is the tricky part. Airtable gives you an array of IDs for a linked field, even if it's a 1-to-1 relationship logically. You need to decide how to handle that.
          </p>
          <p>
            In our case, a Shipment belongs to <strong>one</strong> Customer. We validate this assumption during the transform phase.
          </p>

          <div className="not-prose bg-[#1e1e1e] text-gray-300 rounded-xl overflow-hidden my-8 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-800">
              <span className="text-xs font-mono text-gray-500">scripts/migrate.ts</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
{`const transformShipment = (record: AirtableShipment): DbShipment => {
  const customerIds = record.fields["Customer"];
  
  if (!customerIds || customerIds.length === 0) {
    throw new Error(\`Shipment \${record.id} has no customer linked\`);
  }
  
  if (customerIds.length > 1) {
    console.warn(\`Shipment \${record.id} has multiple customers. Using first.\`);
  }

  return {
    id: record.id,
    trackingNumber: record.fields["Tracking Number"],
    status: mapStatus(record.fields["Status"]),
    customerId: customerIds[0], // Map the first ID to the Foreign Key
    value: record.fields["Value"] || 0
  };
};`}
            </pre>
          </div>

          <h3>The Result</h3>
          <p>
            After running this script, we populated a PostgreSQL database with 48,000 shipments and 2,500 customers in about 4 minutes.
          </p>
          <p>
            The immediate benefits were massive:
          </p>
          <ul>
            <li><strong>Query Speed:</strong> Complex filtering (e.g., "Show all delivered shipments &gt; $500 from last month") went from 8 seconds in Airtable to 12ms in Postgres.</li>
            <li><strong>Data Integrity:</strong> We added database constraints so it's now impossible to create a shipment without a valid customer.</li>
            <li><strong>Cost:</strong> They dropped their $1,200/mo Enterprise Airtable plan for a $50/mo Vercel Postgres instance.</li>
          </ul>

          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Ready to escape your spreadsheet?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We've built these migration scripts dozens of times. We can move your data safely and securely in less than a week.
            </p>
            <Link href="/unblock">
              <OrganicButton className="text-lg px-8 py-4">
                Book an Unblock Session
              </OrganicButton>
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
