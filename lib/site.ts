export const site = {
  name: "Chandan Shaw",
  role: "Freelance developer — apps, web, backend",
  location: "Remote worldwide",
  email: "dev.chandan.shaw@gmail.com",
  phoneDisplay: "+91 83360 98357",
  phoneHref: "tel:+918336098357",
  github: "https://github.com/dev-chandan-shaw",
  linkedin: "https://www.linkedin.com/in/shawchandan/",
  // Marketplace profiles
  fiverr: "https://www.fiverr.com/chandanshawdev",
  upwork: "https://www.upwork.com/freelancers/~0116e46eee5802349c",
  availability: "Taking new projects",
} as const;

export type SiteConfig = typeof site;
