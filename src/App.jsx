import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Globe, Zap, Users, BarChart3, Settings, ShieldCheck } from 'lucide-react';
import { LivePulse, GeographicHeatmap } from './components/AxiomUI';

const MetricsCard = ({ icon: Icon, label, value, trend, chart: Chart }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, borderColor: '#00f2ff55' }}
    className="card-vibe group h-full flex flex-col justify-between"
  >
    <div className="flex items-center justify-between mb-8">
      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-electric/10 transition-colors">
        <Icon className="w-5 h-5 text-electric group-hover:scale-110 transition-transform" />
      </div>
      {trend && (
        <span className={`text-[10px] font-black px-2 py-1 rounded-full ${trend > 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
    <div>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mb-1">{label}</div>
      <div className="text-4xl font-bold tracking-tighter text-white mb-6 flex items-end gap-1">
        {value}
        <span className="text-xs opacity-20 font-black mb-1">MS</span>
      </div>
      {Chart && <Chart data={[40, 50, 45, 60, 55, 65, 60, 70, 75]} />}
    </div>
  </motion.div>
);

export default function App() {
  const [pulseData, setPulseData] = useState([10, 25, 40, 30, 20, 55, 60, 45, 30, 70, 85, 80, 75, 90, 85, 95]);
  const [onlineUsers, setOnlineUsers] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseData(prev => [...prev.slice(1), Math.floor(Math.random() * 40) + 40]);
      setOnlineUsers(u => u + Math.floor(Math.random() * 5) - 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121214] text-white p-6 md:p-12 overflow-x-hidden selection:bg-electric/30">
      <div className="fixed top-[-30%] right-[-10%] w-[60%] h-[50%] bg-electric/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      <header className="max-w-7xl mx-auto flex items-center justify-between mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-electric flex items-center justify-center text-[#121214] shadow-[0_0_25px_rgba(0,242,255,0.4)]">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h1 className="text-3xl font-black italic tracking-tighter">PROJECT AXIOM <span className="text-sm not-italic opacity-20 font-medium ml-2 uppercase tracking-widest">v1.2</span></h1>
            <div className="flex items-center gap-2 opacity-50 text-[10px] font-black uppercase tracking-widest leading-none mt-1">
              <ShieldCheck className="w-3 h-3 text-electric" />
              GDPR Hardened · Privacy First · Serverless Edge
            </div>
          </div>
        </motion.div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-full px-5 py-2 group hover:border-electric/30 transition-all cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
            <span className="text-xs font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">Live Environment: axiom.nexus</span>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
            <Settings className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <MetricsCard icon={Users} label="Active Sessions" value={onlineUsers} trend={24.5} />
          <MetricsCard icon={BarChart3} label="Bounce Velocity" value="32.4" trend={-8.1} />
          <motion.div className="card-vibe p-0 overflow-hidden relative">
            <div className="p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mb-8">Ingestion Health</div>
              <div className="flex items-center gap-1 mb-8">
                <span className="text-3xl font-black tracking-tighter">99.9%</span>
                <span className="text-[10px] font-black opacity-20 uppercase tracking-widest ml-2 leading-none">Global<br/>Availability</span>
              </div>
            </div>
            <div className="p-1 glass flex items-center justify-center gap-4 py-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#121214] bg-white/10" />
                ))}
              </div>
              <span className="text-[10px] font-black opacity-40 uppercase tracking-widest">Active nodes</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card-vibe relative h-full flex flex-col justify-between min-h-[450px]">
             <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">Live Ingestion Pulse</h2>
                  <p className="text-[10px] font-black opacity-20 uppercase tracking-widest mt-1">Real-time event capture frequency (50ms Interval)</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-electric text-[#121214] text-[9px] font-black uppercase rounded shadow-[0_0_15px_rgba(0,242,255,0.4)]">High Intensity</div>
                </div>
             </div>
             <div className="flex-grow flex items-center">
                <LivePulse data={pulseData} />
             </div>
             <div className="flex items-center justify-between pt-8 border-t border-white/5 opacity-40">
                <div className="text-[10px] font-black uppercase tracking-widest">Axiom Edge Node: Fra-1</div>
                <div className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-3 h-3 text-electric" /> 
                  Bit-Rate: 8.4 GB/S
                </div>
             </div>
          </motion.div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <motion.div className="card-vibe h-full flex flex-col justify-between overflow-hidden relative">
            <h2 className="text-xl font-black italic tracking-tighter text-white uppercase mb-8">GLOBAL DOMINANCE</h2>
            <div className="flex-grow flex items-center justify-center">
              <GeographicHeatmap />
            </div>
            <div className="space-y-4 pt-8">
              {[
                { label: 'North America', value: '42%' },
                { label: 'Europe', value: '38%' },
                { label: 'Asia Pac', value: '20%' },
              ].map(r => (
                <div key={r.label}>
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: r.value }} className="h-full bg-electric shadow-[0_0_10px_rgba(0,242,255,0.6)]" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto mt-24 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">
        <div>© 2026 Project Axiom · Premium Analytics Protocol</div>
        <div className="flex items-center gap-12">
          <a href="#" className="hover:text-electric transition-colors">Documentation</a>
          <a href="#" className="hover:text-electric transition-colors">Privacy Shield</a>
          <a href="#" className="hover:text-electric transition-colors">Security Audit</a>
        </div>
        <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
          PROTOCOL SECURE
        </div>
      </footer>
    </div>
  );
}
