import { track } from "@vercel/analytics";

/**
 * Track booking events for Calendly links
 */
export function trackBooking(
  type: "unblock_session" | "mvp_application",
  location: string,
  metadata?: Record<string, string>
) {
  const eventName =
    type === "unblock_session"
      ? "book_unblock_session"
      : "book_mvp_application";
  track(eventName, {
    location,
    ...metadata,
  });
}

/**
 * Track navigation clicks
 */
export function trackNavClick(
  destination: string,
  location: "header" | "footer" | "mobile_nav"
) {
  track("nav_click", {
    location,
    destination,
  });
}

/**
 * Track content engagement (case studies, blog posts, etc.)
 */
export function trackContentEngagement(
  action: string,
  location: string,
  metadata?: Record<string, string>
) {
  track("content_engagement", {
    location,
    action,
    ...metadata,
  });
}

/**
 * Track case study clicks
 */
export function trackCaseStudyClick(slug: string, location: string) {
  track("case_study_click", {
    location,
    study: slug,
  });
}

/**
 * Track contact actions
 */
export function trackContactClick(
  type: "support" | "email",
  location: string,
  metadata?: Record<string, string>
) {
  if (type === "email") {
    track("email_click", {
      location,
      ...metadata,
    });
  } else {
    track("contact_click", {
      location,
      type,
      ...metadata,
    });
  }
}

/**
 * Track external link clicks
 */
export function trackExternalLink(destination: string, location: string) {
  track("external_link_click", {
    location,
    destination,
  });
}

/**
 * Track scroll engagement (smooth scroll to sections)
 */
export function trackScrollEngagement(action: string, location: string) {
  track("scroll_engagement", {
    location,
    action,
  });
}

/**
 * Track mobile navigation toggle
 */
export function trackMobileNavToggle(state: "open" | "close") {
  track("mobile_nav_toggle", {
    location: "mobile_nav",
    state,
  });
}
