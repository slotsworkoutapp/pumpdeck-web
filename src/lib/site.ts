// Site-wide constants. Kept in one place so launch day is a one-line change.

/**
 * The App Store listing URL.
 *
 * `null` until the app is actually submitted and live — every CTA on the site
 * reads this and renders an honest "coming soon" state instead of a dead link.
 * Set it to the real URL and the badges, the header button and the closing CTA
 * all become working links at once. Nothing else needs touching.
 */
export const appStoreUrl: string | null = null;

/** Shown beside the coming-soon CTAs so a visitor has somewhere to go. */
export const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/slotsworkout.app' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@slotsworkout.app' },
];

export const supportEmail = 'support@slotsworkout.app';
