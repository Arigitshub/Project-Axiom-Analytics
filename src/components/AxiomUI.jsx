import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Axiom Live Pulse (SVG Heart-rate Monitor)
export function LivePulse({ data }) {
  const points = useMemo(() => {
    const width = 600;
    const height = 200;
    const padding = 40;
    const maxVal = Math.max(...data, 10);
    
    return data.map((val, i) => {
      const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
      const y = height - (val / maxVal) * (height - padding * 2) - padding;
      return `${x},${y}`;
    }).join(' ');
  }, [data]);

  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <svg viewBox="0 0 600 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00f2ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polyline
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          fill="none"
          stroke="#00f2ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
        <motion.polygon
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          fill="url(#glow)"
          points={`40,200 ${points} 560,200`}
        />
      </svg>
      <div className="absolute top-0 right-0 p-2 flex gap-1">
        <div className="w-2 h-2 rounded-full bg-electric animate-ping" />
        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Live Pulse</span>
      </div>
    </div>
  );
}

// Geographic Heatmap (Lightweight SVG Map)
export function GeographicHeatmap() {
  const continents = [
    { name: "NAM", d: "M20 40 Q40 30, 60 40 T80 60 Q60 80, 40 70 Z", visits: 85 },
    { name: "SAM", d: "M40 80 Q50 90, 60 100 T70 120 Q50 110, 40 100 Z", visits: 42 },
    { name: "EUR", d: "M100 40 Q110 30, 120 40 T130 50 Q110 60, 100 50 Z", visits: 91 },
    { name: "AFR", d: "M100 60 Q110 70, 120 80 T130 100 Q110 90, 100 80 Z", visits: 24 },
    { name: "ASIA", d: "M140 40 Q160 30, 180 50 T200 70 Q160 90, 140 60 Z", visits: 99 },
    { name: "AUS", d: "M180 100 Q190 110, 200 100 T210 110 Q190 120, 180 110 Z", visits: 18 }
  ];

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      <svg viewBox="0 0 240 140" className="w-[120%] h-auto opacity-80 mix-blend-screen">
        {continents.map(c => (
          <motion.path
            key={c.name}
            d={c.d}
            fill="#00f2ff"
          initial={{ opacity: 0 }}
          animate={{ opacity: c.visits / 100 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            className="transition-all cursor-crosshair"
          >
            <title>{c.name}: {c.visits}% activity</title>
          </motion.path>
        ))}
      </svg>
      <div className="absolute bottom-4 left-4 p-4 glass rounded-2xl flex flex-col gap-1">
        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Regional Intensity</span>
        <div className="flex gap-2">
          <span className="text-xl font-bold tracking-tight text-electric">GLOBAL</span>
          <span className="text-xl font-bold tracking-tight opacity-20">DOMINANCE</span>
        </div>
      </div>
    </div>
  );
}
