import React from 'react';
import './index.css';

const HeatmapLegend = ({ maxValue }) => {
  const legendSteps = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div className="heatmap-legend-container">
      <span className="heatmap-legend-label">Engagement:</span>
      <div className="heatmap-legend-steps">
        {legendSteps.map((step, index) => {
          const value = Math.round(maxValue * step);
          const getColor = () => {
            if (step <= 0.3) return `rgba(239, 68, 68, ${step + 0.1})`;
            if (step <= 0.7) return `rgba(250, 204, 21, ${step})`;
            return `rgba(34, 197, 94, ${step})`;
          };

          return (
            <div key={step} className="flex items-center">
              <div
                className="heatmap-legend-box"
                style={{ backgroundColor: getColor() }}
              ></div>
              <span className="heatmap-legend-value">
                {value.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeatmapLegend;
