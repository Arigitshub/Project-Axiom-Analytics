import React from 'react';

export function LineChart({ data }) {
  const width = 400;
  const height = 150;
  const padding = 20;

  const maxVal = Math.max(...data, 10);
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
    const y = height - (val / maxVal) * (height - padding * 2) - padding;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#aa3bff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#aa3bff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="#aa3bff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      <polygon
        fill="url(#gradient)"
        points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
      />
    </svg>
  );
}

export function BarChart({ data }) {
  const width = 400;
  const height = 150;
  const barWidth = (width - 40) / data.length;
  const maxVal = Math.max(...data, 10);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {data.map((val, i) => (
        <rect
          key={i}
          x={i * barWidth + 20}
          y={height - (val / maxVal) * (height - 40) - 20}
          width={barWidth - 4}
          height={(val / maxVal) * (height - 40)}
          fill="#aa3bff"
          rx="2"
          className="opacity-80 hover:opacity-100 transition-opacity"
        />
      ))}
    </svg>
  );
}
