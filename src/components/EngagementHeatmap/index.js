import React, { useState } from 'react';
import { format, addHours, startOfDay, addDays } from 'date-fns';
import HeatmapCell from '../HeatmapCell';
import HeatmapLegend from '../HeatmapLegend';
import EngagementModal from '../EngagementModal';
import { Calendar, Clock, TrendingUp } from 'lucide-react';
import './index.css';

const generateSampleData = () => {
  const data = [];
  const startDate = startOfDay(new Date());

  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const date = addHours(addDays(startDate, day), hour);
      const value = Math.floor(Math.random() * 9900) + 100;
      data.push({ date, value });
    }
  }
  return data;
};

const EngagementHeatmap = () => {
  const [data] = useState(generateSampleData());
  const [selectedCell, setSelectedCell] = useState(null);

  const maxValue = Math.max(...data.map((d) => d.value));

  const handleCellClick = (date, value) => {
    setSelectedCell({ date, value });
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfDay(new Date()), i)
  );

  return (
    <div className="engagement-heatmap">
      <div className="engagement-header">
        <h2 className='heading'>
          <TrendingUp className="icon" />
          Engagement Heatmap
        </h2>
        <p className='heading'>Analyze engagement patterns across different times and days</p>
      </div>

      <div className="hours-grid">
        <div className="hour-label"></div>
        <div className="hour-cell">
          {hours.map((hour) => (
            // <span key={hour}>
            //   <Clock className="clock-icon mr-1" />
            //   {format(new Date().setHours(hour), 'HH')}
            // </span>
            <div key={hour} className="text-xs text-gray-500 flex items-center justify-center">
                <Clock className="clock-icon mr-1" />
                {format(new Date().setHours(hour), 'HH')}
            </div>
          ))}
        </div>
      </div>

      {days.map((day) => (
        <div key={day.toString()} className="day-row">
          <div className="day-label">
            <Calendar className="icon" />
            {format(day, 'EEE')}
          </div>
          <div className="heatmap-grid">
            {hours.map((hour) => {
              const cellData = data.find(
                (d) =>
                  format(d.date, 'yyyy-MM-dd HH') ===
                  format(addHours(day, hour), 'yyyy-MM-dd HH')
              );
              return (
                <HeatmapCell
                  key={`${day}-${hour}`}
                  value={cellData?.value || 0}
                  date={addHours(day, hour)}
                  maxValue={maxValue}
                  onClick={handleCellClick}
                />
              );
            })}
          </div>
        </div>
      ))}

      <HeatmapLegend maxValue={maxValue} />

      {selectedCell && (
        <EngagementModal
          date={selectedCell.date}
          value={selectedCell.value}
          onClose={() => setSelectedCell(null)}
        />
      )}
    </div>
  );
};

export default EngagementHeatmap;
