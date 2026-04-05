import React, { useState, useEffect } from 'react';
import { LineChart, BarChart } from './components/AxiomCharts';

const StatsCard = ({ label, value, trend }) => (
  <div className="card flex flex-col gap-1">
    <span className="text-sm font-medium opacity-60 uppercase tracking-widest">{label}</span>
    <div className="flex items-end justify-between">
      <span className="text-4xl font-bold tracking-tight text-[var(--accent)]">{value}</span>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend > 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </span>
    </div>
  </div>
);

export default function App() {
  const [data, setData] = useState([12, 19, 13, 25, 22, 30, 45, 40, 55, 60, 58, 65, 70, 75, 80, 78, 85, 90, 88, 95]);
  const [visits, setVisits] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [...prev.slice(1), Math.floor(Math.random() * 20) + prev[prev.length - 1] - 10]);
      setVisits(v => v + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] p-8 font-sans selection:bg-[var(--accent)] selection:text-white">
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)] to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-500/20">
            A
          </div>
          <div>
            <h1 className="text-2xl font-bold m-0 text-[var(--text-h)]">Project Axiom</h1>
            <p className="text-xs opacity-50 tracking-widest uppercase">GDPR-Compliant Real-Time Analytics</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-[var(--border)] rounded-full text-xs font-bold border border-transparent hover:border-[var(--accent)] transition-all cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            LIVE: example.com
          </div>
          <button className="px-6 py-2 bg-[var(--accent)] text-white font-bold rounded-full text-sm shadow-lg shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all">
            Settings
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard label="Real-time Visitors" value={visits} trend={12.4} />
          <StatsCard label="Bounce Rate" value="34.2%" trend={-2.1} />
          <StatsCard label="Avg. Stay" value="4m 12s" trend={5.8} />
          <StatsCard label="Daily Goal" value="84%" trend={0.5} />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 card bg-gradient-to-b from-transparent to-[var(--bg)]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold tracking-tight text-[var(--text-h)]">Live Traffic Velocity</h2>
              <div className="flex gap-2">
                <button className="text-[10px] uppercase font-black px-3 py-1 bg-[var(--accent)] text-white rounded">Live</button>
                <button className="text-[10px] uppercase font-black px-3 py-1 bg-[var(--border)] opacity-60 rounded">24h</button>
              </div>
            </div>
            <div className="relative h-[200px] flex items-end">
              <LineChart data={data} />
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold tracking-tight mb-6 text-[var(--text-h)]">Device Pulse</h2>
            <div className="space-y-4">
              {[
                { label: 'Desktop', value: '64%', color: 'bg-[var(--accent)]' },
                { label: 'Mobile', value: '28%', color: 'bg-purple-400' },
                { label: 'Tablet', value: '8%', color: 'bg-indigo-300' },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs font-bold mb-1 uppercase tracking-wider opacity-60">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--border)] rounded-full overflow-hidden">
                    <div className={`${item.color} h-full`} style={{ width: item.value }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--border)]">
              <BarChart data={[40, 50, 45, 60, 20]} />
              <p className="text-center text-[10px] opacity-40 mt-4 uppercase font-bold tracking-widest">Regional Heatmap (Activity Intensity)</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-16 pb-8 border-t border-[var(--border)] pt-8 flex items-center justify-between opacity-40 text-xs font-medium">
        <div>© 2026 Project Axiom Analytics • Premium Open Source</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[var(--accent)]">Documentation</a>
          <a href="#" className="hover:text-[var(--accent)]">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--accent)]">Support</a>
        </div>
      </footer>
    </div>
  );
}
