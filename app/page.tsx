import Hero from "@/components/Hero";
import GeneralInfo from "@/components/GeneralInfo";
import ModulesSection from "@/components/ModulesSection";
import RequirementsSection from "@/components/RequirementsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <GeneralInfo />
      <ModulesSection />
      <RequirementsSection />
      <TeamSection />
      <Footer />
    </>
  );
}
