import React from 'react';
import { format } from 'date-fns';
import {
  X,
  Users,
  Clock,
  Calendar,
  Share2,
  MessageSquare,
  Heart,
} from 'lucide-react';
import './index.css';

const EngagementModal = ({ date, value, onClose }) => {
  const metrics = {
    likes: Math.floor(value * 0.6),
    comments: Math.floor(value * 0.3),
    shares: Math.floor(value * 0.1),
    uniqueUsers: Math.floor(value * 0.8),
  };

  return (
    <div className="engagement-modal-overlay">
      <div className="engagement-modal">
        <div className="engagement-modal-header">
          <h3>Engagement Details</h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* <div className="engagement-metrics">
          <Calendar />
          <span>{format(date, 'MMMM d, yyyy')}</span>
          <Clock />
          <span>{format(date, 'HH:mm')}</span>
        </div> */}

<div className="flex items-center gap-4 text-gray-600">
  <Calendar className="calendar-icon" />
  <span>{format(date, 'MMMM d, yyyy')}</span>
  <Clock className="clock-icon ml-4" />
  <span>{format(date, 'HH:mm')}</span>
</div>


        <div className="grid grid-cols-2 gap-4">
          <div className="metric-card metric-card--unique-users">
            <div className="metric-card-header">
              <Users />
              <span>Unique Users</span>
            </div>
            <p>{metrics.uniqueUsers.toLocaleString()}</p>
          </div>

          <div className="metric-card metric-card--likes">
            <div className="metric-card-header">
              <Heart />
              <span>Likes</span>
            </div>
            <p>{metrics.likes.toLocaleString()}</p>
          </div>

          <div className="metric-card metric-card--comments">
            <div className="metric-card-header">
              <MessageSquare />
              <span>Comments</span>
            </div>
            <p>{metrics.comments.toLocaleString()}</p>
          </div>

          <div className="metric-card metric-card--shares">
            <div className="metric-card-header">
              <Share2 />
              <span>Shares</span>
            </div>
            <p>{metrics.shares.toLocaleString()}</p>
          </div>
        </div>

        <div className="quick-actions">
          <h4>Quick Actions</h4>
          <div className="flex gap-2">
            <button className="button button--primary">Export Data</button>
            <button className="button button--secondary">Schedule Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementModal;