import { useCallback, useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Strengths from "../components/Strengths";
import ProvenResults from "../components/ProvenResults";
import ExperienceSection from "../components/ExperienceSection";
import VideoModal from "../components/VideoModal";
import ClosingCta from "../components/ClosingCta";
import Footer from "../components/Footer";
import { experiences } from "../content/portfolio-content";

type ActiveVideo = {
  key: string;
  trigger: HTMLElement | null;
};

export default function App() {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const openVideo = useCallback((key: string, trigger: HTMLElement | null) => {
    setActiveVideo({ key, trigger });
  }, []);

  const closeVideo = useCallback(() => {
    activeVideo?.trigger?.focus();
    setActiveVideo(null);
  }, [activeVideo]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        <Hero onOpenVideo={openVideo} />
        <Strengths />
        <ProvenResults />

        {experiences.map((experience) => (
          <ExperienceSection key={experience.id} experience={experience} onOpenVideo={openVideo} />
        ))}

        <ClosingCta />
      </main>

      <Footer />

      {activeVideo && <VideoModal videoKey={activeVideo.key} onClose={closeVideo} />}
    </>
  );
}
