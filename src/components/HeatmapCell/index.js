import React from 'react';
import { format } from 'date-fns';
import './index.css';  // Importing the CSS file for styles

const HeatmapCell = ({ value, date, maxValue, onClick }) => {
  const intensity = value / maxValue;

  const getBackgroundColor = () => {
    if (intensity <= 0.3) return `rgba(239, 68, 68, ${intensity + 0.1})`; // red
    if (intensity <= 0.7) return `rgba(250, 204, 21, ${intensity})`; // yellow
    return `rgba(34, 197, 94, ${intensity})`; // green
  };

  return (
    <div
      className="heatmap-cell"
      style={{ backgroundColor: getBackgroundColor() }}
      onClick={() => onClick(date, value)}
      role="button"
      tabIndex={0}
    >
      <div className="heatmap-cell-tooltip">
        <p className="font-semibold">{format(date, 'MMM d, yyyy HH:mm')}</p>
        <p>Engagement: {value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default HeatmapCell;
