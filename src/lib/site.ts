import p1 from "@/assets/painting-1.jpg";
import p2 from "@/assets/painting-2.jpg";
import p3 from "@/assets/painting-3.jpg";
import p4 from "@/assets/painting-4.jpg";
import coverArt from "@/assets/cover-art.jpg.asset.json";
import coverFront from "@/assets/cover-front.jpg.asset.json";

// ── Edit these in one place ──────────────────────────────────────────
export const AMAZON_URL = "https://www.amazon.com/"; // [Amazon link]
export const FREE_STORY_URL = "#"; // [Free story PDF link]
export const CONTACT_EMAIL = "rabih.ballout@gmail.com";
export const SITE_URL = "https://www.homoelectrus.com";
export const TAGLINE = "The Power to Evolve. The Wisdom to Choose.";

export const COVER_URL = coverFront.url;

export const FREE_STORY = {
  title: "The Story Behind Homo Electrus",
  pitch:
    "Discover the personal journey that inspired the book, and be first to hear about new writing, paintings, and events.",
};

export const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/guide", label: "User Guide" },
  { to: "/forum", label: "Forum" },
  { to: "/blog", label: "Blog" },
  { to: "/donate", label: "Donation" },
] as const;

export type Painting = {
  src: string; title: string; medium: string; year: string; story: string; w: number; h: number;
};

// [Replace with Rabih's paintings: swap src, title, medium, year, story]
export const PAINTINGS: Painting[] = [
  { src: coverArt.url, title: "Homo Electrus", medium: "Ink & oil on canvas", year: "[Year]", story: "The painting that became the cover. [Story behind this painting]", w: 900, h: 1243 },
  { src: p1, title: "[Golden Tide]", medium: "[Oil on canvas]", year: "[Year]", story: "[Story behind this painting]", w: 896, h: 1152 },
  { src: p2, title: "[Mind of Clouds]", medium: "[Watercolor & ink]", year: "[Year]", story: "[Story behind this painting]", w: 1024, h: 1024 },
  { src: p3, title: "[The Keeper]", medium: "[Oil on canvas]", year: "[Year]", story: "[Story behind this painting]", w: 1152, h: 832 },
  { src: p4, title: "[Synapse]", medium: "[Oil on canvas]", year: "[Year]", story: "[Story behind this painting]", w: 896, h: 1152 },
  { src: p1, title: "[Painting six]", medium: "[Medium]", year: "[Year]", story: "[Story behind this painting]", w: 896, h: 1152 },
];

export type Post = { slug: string; title: string; date: string; excerpt: string; tags: string[]; image: string; body: string[] };

export const POSTS: Post[] = [
  {
    slug: "why-evolution-is-a-choice",
    title: "Why the Next Evolution Is a Choice",
    date: "2026-09-12",
    excerpt: "[Placeholder excerpt] For most of history, evolution happened to us. Now it happens through us.",
    tags: ["Evolution", "Choice"],
    image: p2,
    body: [
      "[Placeholder article] For most of history, evolution happened to us. Slowly, blindly, across millions of years.",
      "Now we hold the tools to shape ourselves. The question is no longer whether we can change, but what we will choose to become.",
      "[Replace with the full article text.]",
    ],
  },
  {
    slug: "painting-the-cover",
    title: "Painting the Cover: Sea, Skull, and Light",
    date: "2026-08-03",
    excerpt: "[Placeholder excerpt] How a stormy sea and a sketch of the human mind became the face of the book.",
    tags: ["Art", "Process"],
    image: p1,
    body: [
      "[Placeholder article] The cover of Homo Electrus began as a painting, not a design brief.",
      "[Replace with the full article text.]",
    ],
  },
];
