import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { GymPage } from './pages/GymPage';
import { DietPage } from './pages/DietPage';
import { SkincarePage } from './pages/SkincarePage';
import { ProgressPage } from './pages/ProgressPage';
import { SchedulePage } from './pages/SchedulePage';
import { SettingsPage } from './pages/SettingsPage';
import { WeightLogPage } from './pages/WeightLogPage';
import { ProgressPhotosPage } from './pages/ProgressPhotosPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/diet" element={<DietPage />} />
          <Route path="/skincare" element={<SkincarePage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Route>
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/weight-log" element={<WeightLogPage />} />
        <Route path="/progress-photos" element={<ProgressPhotosPage />} />
      </Routes>
    </HashRouter>
  );
}
