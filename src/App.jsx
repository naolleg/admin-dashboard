import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import DashboardPage from './layouts/DashboardLayout';
import OrdersPage from './pages/OrdersPage';
import ReportsPage from './pages/ReportsPage';
import IntegrationsPage from './pages/IntegrationPage';
import SalesPage from './pages/SalesPage';
import TrafficPage from './pages/TrafficPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { CssBaseline } from '@mui/material';
import DashboardLayoutBasic from './layouts/DashboardLayout';
import UserPage from './pages/user/view/page';

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
            <Route path="orders" element={<OrdersPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="reports/sales" element={<SalesPage />} />
            <Route path="reports/traffic" element={<TrafficPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;