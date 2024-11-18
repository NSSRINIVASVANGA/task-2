import './App.css';
import EngagementHeatmap from './components/EngagementHeatmap';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <div className = "side-map">
        <Sidebar/>
      <div className="content-wrapper">
        {/* <header className="header">
          <h1 className="header-title">Social Media Analytics</h1>
          <p className="header-subtitle">Track your social media engagement patterns</p>
        </header> */}
        <EngagementHeatmap />
      </div>
      </div>
    </div>
  );
}

export default App;
