import React, { useEffect, useRef, useState } from "react";
import { Volume2, Bluetooth, Disc3, ShieldCheck } from "lucide-react";

const BARS = 28;

function VUMeter() {
  const barsRef = useRef([]);
  const [seed] = useState(() =>
    Array.from({ length: BARS }, (_, i) => ({
      phase: (i / BARS) * Math.PI * 2,
      speed: 0.9 + Math.random() * 0.6,
    }))
  );

  useEffect(() => {
    let raf;
    let t = 0;
    const tick = () => {
      t += 0.02;
      seed.forEach((s, i) => {
        const el = barsRef.current[i];
        if (!el) return;
        const h =
          38 +
          Math.sin(t * s.speed + s.phase) * 26 +
          Math.sin(t * s.speed * 2.3 + s.phase) * 10;
        el.style.height = `${Math.max(6, h)}%`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seed]);

  return (
    <div className="flex items-end gap-[3px] h-full w-full">
      {seed.map((_, i) => (
        <div
          key={i}
          ref={(el) => (barsRef.current[i] = el)}
          className="flex-1 rounded-sm"
          style={{
            height: "30%",
            background:
              i % 7 === 6
                ? "linear-gradient(180deg,#E4B94C,#C9A227)"
                : "linear-gradient(180deg,#C9A227cc,#8B6F47aa)",
            transition: "height 0.05s linear",
          }}
        />
      ))}
    </div>
  );
}

function Platter() {
  return (
    <div className="relative w-[280px] h-[280px] shrink-0">
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        className="absolute rounded-full"
        style={{
          left: "50%",
          top: "54%",
          width: 320,
          height: 320,
          transform: "translate(-50%,-50%)",
          background:
            "repeating-linear-gradient(100deg, #6b5334 0px, #7a6140 3px, #63492c 7px, #7a6140 11px), radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 55%)",
          backgroundBlendMode: "overlay, normal",
          boxShadow: "0 30px 60px -18px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(0,0,0,0.35)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #423e39 0%, #17151300 42%), repeating-radial-gradient(circle, #201e1c 0px, #211f1d 1.4px, #2a2723 2.1px, #211f1d 2.8px)",
          boxShadow:
            "0 0 0 1px #46413a, 0 25px 50px -14px rgba(0,0,0,0.7), inset 0 0 40px rgba(0,0,0,0.55)",
          animation: "spin 6s linear infinite",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 200deg, transparent 0deg, rgba(255,255,255,0.09) 25deg, transparent 55deg, transparent 360deg)",
          }}
        />
        <div
          className="absolute rounded-full flex flex-col items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            width: 100,
            height: 100,
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle at 38% 32%, #E4B94C, #a9812f 75%)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,0,0,0.2)",
          }}
        >
          <span className="mono text-[7px] tracking-[0.2em] text-[#1C1B1A]/70">MERIDIAN</span>
          <span className="mono text-[6px] tracking-[0.15em] text-[#1C1B1A]/50 mt-0.5">SIDE A · 33⅓</span>
        </div>
      </div>
      <div
        className="absolute rounded-full bg-[#141312]"
        style={{
          left: "50%",
          top: "50%",
          width: 12,
          height: 12,
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 0 3px #46413a, 0 2px 6px rgba(0,0,0,0.6)",
        }}
      />
      <div
        className="absolute origin-top-right"
        style={{
          right: -20,
          top: -10,
          width: 168,
          height: 6,
          borderRadius: 3,
          background: "linear-gradient(90deg,#7a756a,#d8d3c6 55%,#a9a396)",
          transform: "rotate(26deg)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.45)",
        }}
      >
        <div
          className="absolute -left-2 -top-2.5 rounded-sm"
          style={{
            width: 16,
            height: 11,
            background: "linear-gradient(160deg,#3a3733,#151412)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
          }}
        />
        <div
          className="absolute -left-1 -top-1 rounded-full"
          style={{ width: 6, height: 6, background: "#E4B94C" }}
        />
        <div
          className="absolute rounded-full"
          style={{
            right: -10,
            top: -8,
            width: 20,
            height: 20,
            background: "radial-gradient(circle at 35% 30%, #cfc9bc, #6f6a5f 75%)",
            boxShadow: "0 3px 8px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: Disc3,
    spec: "33⅓ / 45 RPM",
    title: "Direct-drive precision",
    body:
      "A quartz-locked direct-drive motor holds speed within 0.05% wow and flutter — no belt to stretch, slip, or replace.",
  },
  {
    icon: Volume2,
    spec: "60W × 2, Class A/B",
    title: "Integrated amplification",
    body:
      "A dual-mono amplifier stage drives bookshelf or floor-standing speakers directly, with headroom to spare at any volume.",
  },
  {
    icon: Bluetooth,
    spec: "aptX HD + phono",
    title: "Built-in phono stage",
    body:
      "Switch between vinyl, Bluetooth, and two line-ins without an outboard preamp cluttering the shelf underneath.",
  },
  {
    icon: ShieldCheck,
    spec: "10-year chassis",
    title: "Solid walnut & aluminum",
    body:
      "A CNC-milled aluminum plinth wrapped in book-matched walnut veneer — built to be serviced, not replaced.",
  },
];

const PRESS = ["The Listening Room", "Analog Quarterly", "Wire & Wax", "Stereo Field"];

const TESTIMONIALS = [
  {
    quote:
      "The kind of speed stability I used to only get from turntables three times the price. It disappears and lets the record do the work.",
    name: "Naomi Prescott",
    role: "Contributing editor, The Listening Room",
  },
  {
    quote:
      "I replaced a receiver, a preamp, and a turntable with one box on my desk. Everything sounds tighter, not just simpler.",
    name: "Devon Achebe",
    role: "Owner, Achebe Sound Studio",
  },
  {
    quote:
      "It's rare that a built-in phono stage doesn't feel like an afterthought. This one doesn't.",
    name: "Priya Ostrander",
    role: "Host, Wire & Wax podcast",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <Platter />
    </div>
  );
}
