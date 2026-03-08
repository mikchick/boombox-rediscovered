import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroBoombox from "@/assets/hero-boombox.jpg";
import boomboxStore from "@/assets/boombox-store.jpg";
import envelopeSketch from "@/assets/envelope-sketch.jpg";
import aiExplorations from "@/assets/ai-explorations.png";
import sundayAfternoon from "@/assets/sunday-afternoon.png";


const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useScrollReveal();

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
            A design exploration inspired by discovering a vintage JVC boombox
            and then rethinking how music discovery might work in the streaming era.
          </p>
          <a href="#prototype" className="editorial-btn">
            Launch the Interactive Prototype
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <div className="editorial-container reveal">
        <img
          src={heroBoombox}
          alt="Vintage JVC boombox in a hi-fi shop"
          className="editorial-image"
        />
      </div>

      {/* Observation */}
      <section className="editorial-section reveal">
        <div className="editorial-container">
          <span className="editorial-label">01 — Observation</span>
          <h2 className="editorial-subhead mb-6">Observation</h2>
          <p className="editorial-body mb-6">
            As I was walking through Tune, a hi-fi store in Belltown, Seattle, I
            spotted a vintage JVC boombox sitting on a wooden shelf between
            modern speakers.
          </p>
          <p className="editorial-body mb-6">
            The shop owner powered it on for a quick demo. The warm analog
            sound, the satisfying click of the cassette buttons, the weight of
            the tuning dial. It felt like holding a piece of musical history
            that still had something to say.
          </p>
          <p className="editorial-body mb-12">
            What struck me wasn't the nostalgia. It was how intentional the
            experience felt. You didn't open a boombox to scroll endlessly. You
            tuned into a place, a station, a moment in time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={boomboxStore}
              alt="JVC boombox in the Belltown hi-fi store"
              className="editorial-image"
            />
            <div>
              <video
                ref={videoRef}
                src="/videos/hifidemo.MOV"
                autoPlay
                loop
                muted
                playsInline
                className="editorial-image aspect-video object-cover"
              />
              <button
                onClick={toggleMute}
                className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                {isMuted ? "Turn on sound" : "Mute"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery Problem */}
      <section className="editorial-section border-t border-border reveal">
        <div className="editorial-container">
          <span className="editorial-label">02 — The Discovery Problem</span>
          <h2 className="editorial-subhead mb-6">The Discovery Problem</h2>
          <p className="editorial-body mb-6">
            Modern streaming platforms solved access to music.
          </p>
          <p className="editorial-body mb-6">
            With millions of tracks available instantly, the problem is no
            longer finding music. It's knowing where to begin.
          </p>
          <p className="editorial-body mb-6">
            Recommendation algorithms attempt to solve this by predicting what
            listeners might enjoy next. While effective, they tend to reinforce
            familiar patterns, surfacing music similar to what you've already
            heard.
          </p>
          <p className="editorial-body mb-6">
            Discovery becomes efficient, but not necessarily exploratory.
          </p>
          <p className="editorial-body mb-6">
            What I missed was the feeling of tuning into something unexpected.
            The experience of landing on a radio station, a late-night
            broadcast, or a scene from another time and place. Instead of asking
            "What song should play next?" I began asking a different question.
          </p>
          <p className="editorial-body mb-6 italic">
            What if music discovery felt like traveling through time and location
            instead of following an algorithm?
          </p>
          <p className="editorial-body mb-12">
            Modern streaming platforms rely heavily on collaborative filtering.
            Recommending songs based on listening patterns from users with
            similar tastes.
          </p>
        </div>
      </section>

      {/* Rapid Sketch */}
      <section className="editorial-section border-t border-border reveal">
        <div className="editorial-container">
          <span className="editorial-label">03 — Rapid Sketch</span>
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
      <section className="editorial-section border-t border-border reveal">
        <div className="editorial-container">
          <span className="editorial-label">04 — Exploration with AI</span>
          <h2 className="editorial-subhead mb-6">Exploration with AI</h2>
          <p className="editorial-body mb-12">
            To rapidly visualise different directions, I used generative tools
            to explore form factors, materials, and proportions. Each iteration
            informed the next, pushing the concept from rough idea toward
            something tangible.
          </p>
          <div className="relative">
            <img
              src={aiExplorations}
              alt="AI-generated boombox concept iterations"
              className="editorial-image"
            />
            {/* Captions overlay */}
            <span className="absolute top-[2%] left-[2%] text-[10px] sm:text-xs font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">1st attempt</span>
            <span className="absolute top-[2%] left-[35%] text-[10px] sm:text-xs font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">3rd attempt</span>
            <span className="absolute top-[2%] left-[68%] text-[10px] sm:text-xs font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">5th attempt</span>
            <span className="absolute top-[52%] left-[2%] text-[10px] sm:text-xs font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">7th attempt</span>
            <span className="absolute top-[52%] left-[35%] text-[10px] sm:text-xs font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">8th attempt</span>
            <span className="absolute top-[52%] left-[68%] text-[10px] sm:text-xs font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">Final</span>
          </div>
        </div>
      </section>

      {/* Design Principle */}
      <section className="editorial-section border-t border-border reveal">
        <div className="editorial-container">
          <span className="editorial-label">05 — The Design Principle</span>
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
      <section className="editorial-section border-t border-border reveal">
        <div className="editorial-container">
          <span className="editorial-label">06 — Interface Concept</span>
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
      <section id="prototype" className="editorial-section border-t border-border reveal">
        <div className="editorial-container text-center">
          <span className="editorial-label">07 — Working Prototype</span>
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
      <section className="editorial-section border-t border-border reveal">
        <div className="editorial-container">
          <span className="editorial-label">08 — Reflection</span>
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
