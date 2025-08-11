import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Counter } from './Counter';
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

function AnimatedBackground() {
  const blob1 = useSpring({
    from: { x: -100, y: -50 },
    to: async (next) => {
      while (1) {
        await next({ x: 50, y: 30 });
        await next({ x: -60, y: -40 });
      }
    },
    config: { duration: 8000 },
  });

  const blob2 = useSpring({
    from: { x: 100, y: 70 },
    to: async (next) => {
      while (1) {
        await next({ x: -40, y: -30 });
        await next({ x: 80, y: 50 });
      }
    },
    config: { duration: 10000 },
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <animated.div
        style={{
          transform: blob1.x.to(
            (x) => `translate(${x}px, ${blob1.y.get()}px)`
          ),
          background: "radial-gradient(circle, rgba(255,126,179,0.5), transparent 60%)",
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
      />
      {/* Blob 2 */}
      <animated.div
        style={{
          transform: blob2.x.to(
            (x) => `translate(${x}px, ${blob2.y.get()}px)`
          ),
          background: "radial-gradient(circle, rgba(122,252,255,0.5), transparent 60%)",
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
      />
    </div>
  );
}

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse bounce animation
  const mouseBounce = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(10px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { tension: 80, friction: 12 },
  });

  // Mouse fade out on scroll
  const mouseFade = useSpring({
    opacity: scrollY > 50 ? 0 : 1,
    config: { duration: 300 },
  });

  return (
    <section
      id="home"
      className="pt-12 min-h-screen flex items-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated Blobs */}
      <AnimatedBackground />

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-background/60" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-card-foreground mb-6 tracking-tight">
            Empowering Innovation
            <br />
            <span className="text-card-foreground">for a Better Tomorrow</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Explore tools and technologies that shape the future.
            From cloud computing to AI solutions, we provide the foundation for your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold shadow-card hover:shadow-card-hover hover-scale">
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-4 text-lg font-semibold shadow-card hover:shadow-card-hover hover-scale">
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-card-foreground mb-2">
                <Counter end={200} />+
              </div>
              <div className="text-muted-foreground">Active Users</div> 
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-card-foreground mb-2">
                <Counter end={91.9} />%
              </div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-card-foreground mb-2">
                <Counter end={60} />+
              </div>
              <div className="text-muted-foreground">Global Regions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Mouse Scroll Indicator */}
      <animated.div
        style={{ ...mouseBounce, ...mouseFade }}
        className="absolute bottom-6 flex flex-col items-center z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </animated.div>
    </section>
  );
};
export default Hero;
