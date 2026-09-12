export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  place: string;
  stack: string[];
  outcome: string;
  description: string[];
  features: string[];
  roadmap?: string[];
  codeUrl?: string;
  accent: string;
  // single memorable visual per dossier — CSS only, no stock photos
  motif: "basket" | "calendar" | "ledger" | "tracker";
}

export const projects: Project[] = [
  {
    slug: "farmfresh-bangalore",
    title: "FarmFresh",
    subtitle: "Fresh-produce ordering — mushrooms first, vegetables next",
    place: "Single seller to start",
    stack: ["React Native (Expo)", "Next.js admin", "Spring Boot", "PostgreSQL", "UPI payments"],
    outcome: "A customer can order in under a minute and pay online. The seller confirms from one screen.",
    description: [
      "FarmFresh is a farm-to-home ordering build: mushrooms first, vegetables next. Kept deliberately small — one seller, delivery slots, daily stock — so it actually gets finished.",
      "Customer app handles catalog, cart, address, delivery slot and checkout. Seller web handles stock, prices, orders and delivery runs. One backend serves both.",
      "Working title while availability is confirmed. The code uses the farmfresh slug so a rename is trivial.",
    ],
    features: [
      "Catalog with daily stock and per-unit pricing",
      "Cart, address book and delivery slots",
      "Online checkout with cash-on-delivery fallback",
      "Order tracking: placed, packed, out for delivery",
      "Seller screen: confirm, pack, assign delivery",
    ],
    roadmap: [
      "Phase 1: catalog, cart, sandbox checkout",
      "Phase 2: seller admin and order runs",
      "Phase 3: pilot with one locality",
      "Later: vegetables, subscriptions, multi-seller",
    ],
    accent: "#1F7A4D",
    motif: "basket",
  },
  {
    slug: "salon-booking",
    title: "Salon booking starter",
    subtitle: "Services, slots and advance payments for appointment businesses",
    place: "Concept • scoped build",
    stack: ["React Native", "Next.js admin", "Spring Boot", "PostgreSQL", "Payments + reminders"],
    outcome: "No more paper register or missed calls. Customers pick a service, pick a slot, confirm with a small advance.",
    description: [
      "An appointment-scheduling template: services with duration and price, chair/staff and slot selection, advance payment to confirm. Owner sees the day board and confirms in one tap.",
      "Designed from real pain — double bookings, no-shows, phone-only scheduling. Maps to salons, clinics or studios with small changes.",
    ],
    features: [
      "Service menu with duration, price and staff",
      "Slot board that prevents double booking",
      "Advance payment to cut no-shows",
      "Reminder hooks before the visit",
      "Owner day-board: confirm, reschedule, walk-ins",
    ],
    roadmap: [
      "Discovery: services, staff, hours",
      "Build: customer flow + owner board",
      "Pilot: one chair, one week of real bookings",
    ],
    accent: "#7C3AED",
    motif: "calendar",
  },
  {
    slug: "xeeva-admin",
    title: "Xeeva shop admin",
    subtitle: "Orders, stock and prices in one back-office",
    place: "Angular + Tailwind",
    stack: ["Angular 20", "Tailwind 4", "PrimeNG", "JWT"],
    outcome: "Proof I can build the operational screens teams live in every day.",
    description: [
      "Xeeva is an e-commerce back-office: products, orders, stock and prices. The unglamorous half of every store app — and the half that decides whether it keeps getting used.",
      "Built with Angular and Tailwind. Fast tables, clear states, role-aware auth. This pattern drops into any seller admin or dashboard.",
    ],
    features: [
      "Product and price management",
      "Order list with status flow",
      "Stock visibility at a glance",
      "Auth-guarded admin routes",
    ],
    codeUrl: "https://github.com/dev-chandan-shaw",
    accent: "#2447F5",
    motif: "ledger",
  },
  {
    slug: "expense-tracker",
    title: "Offline expense tracker",
    subtitle: "Mobile craft proof",
    place: "Kotlin • 60 unit tests • 100% offline",
    stack: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines"],
    outcome: "Shows how I build for reliability: offline-first, tested parsers, careful permissions.",
    description: [
      "A Kotlin app that parses bank SMS on-device into transactions, with a notification-listener fallback. Fully offline, with dedup, aliases and reports.",
      "Included so technical clients see testing discipline: 60 unit tests on parsers, dedup and formatting, plus store privacy prep.",
    ],
    features: [
      "On-device SMS parsing, no server",
      "Dedup, self-transfer detection, aliases",
      "Month pager, reports, bills and reminders",
      "Material 3, Room, DataStore, Hilt",
    ],
    codeUrl: "https://github.com/dev-chandan-shaw",
    accent: "#0E7490",
    motif: "tracker",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
