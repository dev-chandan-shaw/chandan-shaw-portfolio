import { Hero } from "@/components/Hero";
import { StackCards } from "@/components/StackCards";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Chandan Shaw — Freelance developer",
    description:
      "Mobile apps, web apps and backends. React Native, Next.js and Angular, Spring Boot + PostgreSQL. Remote worldwide.",
    email: "mailto:dev.chandan.shaw@gmail.com",
    telephone: "+91 83360 98357",
    areaServed: "Worldwide (remote)",
    url: "https://chandan-shaw-portfolio.vercel.app",
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <StackCards />
      <Work />
      <Services />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
