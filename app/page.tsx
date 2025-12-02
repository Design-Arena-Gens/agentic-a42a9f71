import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SkillPods } from "@/components/skill-pods";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectsGrid } from "@/components/projects-grid";
import { FrameworkSwitcher } from "@/components/framework-switcher";
import { ContactBanner } from "@/components/contact-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SkillPods />
        <ExperienceTimeline />
        <ProjectsGrid />
        <FrameworkSwitcher />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  );
}
