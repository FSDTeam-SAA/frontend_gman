

import HeroSection from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import StudioHighlights from "@/components/StudioHighlights";
import ProcessStrip from "@/components/ProcessStrip";
import ContactCta from "@/components/ContactCta";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <StudioHighlights />
      <ProjectShowcase />
      <ProcessStrip />
      <ContactCta />
    </div>
  );
};

export default Page;
