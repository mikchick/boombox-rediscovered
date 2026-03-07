import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import heroBoombox from "@/assets/hero-boombox.jpg";
import boomboxStore from "@/assets/boombox-store.jpg";
import envelopeSketch from "@/assets/envelope-sketch.jpg";
import aiExploration1 from "@/assets/ai-exploration-1.jpg";
import aiExploration2 from "@/assets/ai-exploration-2.jpg";
import aiExploration3 from "@/assets/ai-exploration-3.jpg";


const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="editorial-section pt-32 md:pt-44 pb-12 md:pb-20">
        <div className="editorial-container">
          <span className="editorial-label">Design Exploration</span>
          <h1 className="editorial-headline max-w-[14ch] mb-8">
            Reimagining the Boombox for the Streaming Era
          </h1>
          <p className="editorial-body mb-10">
            A small design exploration inspired by discovering a vintage JVC
            boombox in a hi-fi shop in Seattle.
          </p>
          <a href="#prototype" className="editorial-btn">
            Launch the Interactive Prototype
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <div className="editorial-container">
        <img
          src={heroBoombox}
          alt="Vintage JVC boombox in a hi-fi shop"
          className="editorial-image"
        />
      </div>

      {/* Observation */}
      <section className="editorial-section">
        <div className="editorial-container">
          <span className="editorial-label">01 — Observation</span>
          <h2 className="editorial-subhead mb-6">Observation</h2>
          <p className="editorial-body mb-12">
            Walking through a hi-fi store in Belltown, Seattle, I spotted a
            vintage JVC boombox sitting on a wooden shelf between modern
            speakers. The shop owner powered it on for a quick demo — the warm
            analog sound, the satisfying click of the cassette buttons, the
            weight of the tuning dial. It felt like holding a piece of musical
            history that still had something to say.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={boomboxStore}
              alt="JVC boombox in the Belltown hi-fi store"
              className="editorial-image"
            />
            <video
              src="/videos/hifidemo.MOV"
              autoPlay
              loop
              muted
              playsInline
              className="editorial-image aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rapid Sketch */}
      <section className="editorial-section border-t border-border">
        <div className="editorial-container">
          <span className="editorial-label">02 — Rapid Sketch</span>
          <h2 className="editorial-subhead mb-6">Rapid Sketch</h2>
          <p className="editorial-body mb-12">
            Back home that evening, the idea wouldn't let go. I grabbed the
            nearest thing — a mailing envelope — and started sketching. No
            ruler, no grid, just the core architecture: two speakers, a central
            interface bay, and the question of what replaces the cassette deck
            when music lives in the cloud.
          </p>
          <img
            src={envelopeSketch}
            alt="Quick boombox concept sketches on an envelope"
            className="editorial-image"
          />
        </div>
      </section>

      {/* Exploration with AI */}
      <section className="editorial-section border-t border-border">
        <div className="editorial-container">
          <span className="editorial-label">03 — Exploration with AI</span>
          <h2 className="editorial-subhead mb-6">Exploration with AI</h2>
          <p className="editorial-body mb-12">
            To rapidly visualise different directions, I used generative tools
            to explore form factors, materials, and proportions. Each iteration
            informed the next, pushing the concept from rough idea toward
            something tangible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={aiExploration1}
              alt="AI-generated boombox concept — dark industrial"
              className="editorial-image"
            />
            <img
              src={aiExploration2}
              alt="AI-generated boombox concept — warm retro-modern"
              className="editorial-image"
            />
            <img
              src={aiExploration3}
              alt="AI-generated boombox concept — minimal with screen"
              className="editorial-image"
            />
          </div>
        </div>
      </section>

      {/* Design Principle */}
      <section className="editorial-section border-t border-border">
        <div className="editorial-container">
          <span className="editorial-label">04 — The Design Principle</span>
          <h2 className="editorial-subhead mb-6">Respect the Original DNA</h2>
          <p className="editorial-body mb-10">
            Rather than reimagining the boombox from scratch, the guiding
            principle was to preserve its architecture — the proportions, the
            speaker placement, the satisfying physicality — while updating only
            what needed to change for modern listening.
          </p>
          <div className="editorial-divider mb-8" />
          <ul className="space-y-4 max-w-lg">
            <li className="editorial-bullet">
              Cassette deck replaced with a vintage-style display
            </li>
            <li className="editorial-bullet">
              Modern playback interface with familiar controls
            </li>
            <li className="editorial-bullet">
              Song title & metadata rendered in period-appropriate type
            </li>
            <li className="editorial-bullet">
              Timeline scrubber that echoes the tape counter
            </li>
            <li className="editorial-bullet">
              Battery indicator for portable use
            </li>
          </ul>
        </div>
      </section>

      {/* Interface Concept */}
      <section className="editorial-section border-t border-border">
        <div className="editorial-container">
          <span className="editorial-label">05 — Interface Concept</span>
          <h2 className="editorial-subhead mb-6">Interface Concept</h2>
          <p className="editorial-body mb-12">
            The screen interface was designed to feel native to the boombox —
            dark, utilitarian, and information-dense in the way vintage audio
            equipment naturally is. Every element earns its place.
          </p>
          <video
            src="/videos/360_product.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="editorial-image"
          />
        </div>
      </section>

      {/* Working Prototype */}
      <section id="prototype" className="editorial-section border-t border-border">
        <div className="editorial-container text-center">
          <span className="editorial-label">06 — Working Prototype</span>
          <h2 className="editorial-subhead mb-6">Working Prototype</h2>
          <p className="editorial-body mx-auto mb-10">
            A small web prototype was built to explore how the interface
            actually feels — the timing of transitions, the weight of controls,
            the rhythm of browsing music on a device that's meant to sit on a
            shelf, not in your pocket.
          </p>
          <a href="#" className="editorial-btn">
            Launch Prototype
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Reflection */}
      <section className="editorial-section border-t border-border">
        <div className="editorial-container">
          <span className="editorial-label">07 — Reflection</span>
          <h2 className="editorial-subhead mb-10">What I Learned</h2>
          <ul className="space-y-4 max-w-lg">
            <li className="editorial-bullet">
              Physical objects carry emotional weight that digital products
              rarely achieve — studying them is worthwhile.
            </li>
            <li className="editorial-bullet">
              Constraints breed creativity: the boombox form factor forced
              disciplined interface decisions.
            </li>
            <li className="editorial-bullet">
              Generative AI is most useful in the divergent phase — expanding
              possibilities before converging on a direction.
            </li>
            <li className="editorial-bullet">
              Prototyping reveals truths that static mockups hide, especially
              around timing and interaction feel.
            </li>
            <li className="editorial-bullet">
              Respecting original design DNA often produces more compelling
              results than starting from zero.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="editorial-container">
          <p className="text-sm text-muted-foreground">
            A design exploration — 2026
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
