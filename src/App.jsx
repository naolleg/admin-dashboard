import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import DashboardPage from './layouts/DashboardLayout';
import WalletPage from './pages/WalletPage';
import ReportsPage from './pages/ReportsPage';
import ConfigurationPage from './pages/ConfigurationPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { CssBaseline } from '@mui/material';
import DashboardLayoutBasic from './layouts/DashboardLayout';
import UserPage from './pages/user/view/page';
import AnalyticsPage from './pages/AnalayticsPage';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardLayoutBasic />}>
            <Route index element={<DashboardPage />} />
            <Route path="users" element={<UserPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="Configurations" element={<ConfigurationPage />} />
            <Route path="reports/reports" element={<ReportsPage />} />
            <Route path="reports/analaytics" element={<AnalyticsPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;