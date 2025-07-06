import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import WalletPage from '../pages/WalletPage';
import UserPage from '../pages/user/view/page';
import ReportsPage from '../pages/ReportsPage';
import SecurityPage from '../pages/SecurityPage';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import ConfigurationPage from '../pages/ConfigurationPage';
import AnalyticsPage from '../pages/AnalayticsPage';

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'room',
        title: 'Game rooms',
        icon: <MeetingRoomIcon />,
        path: '/dashboard',
    },
    {
        segment: 'users',
        title: 'Players',
        icon: <PersonIcon />,
        path: '/dashboard/players',
    },
    {
        segment: 'wallet',
        title: 'Wallet & financial control',
        icon: <AccountBalanceWalletIcon />,
        path: '/dashboard/Wallet',
    },
    {
        segment: 'security',
        title: 'Security & Anticheat',
        icon: <SecurityIcon />,
        path: '/dashboard/security',
    },
    {
        segment: 'Insights',
        title: 'Insights',
        icon: <BarChartIcon />,
        path: '/dashboard/insights',
        children: [
            {
                segment: 'analytics',
                title: 'Analytics',
                icon: <DescriptionIcon />,
                path: '/dashboard/insights/analytics',
            },
            {
                segment: 'reports',
                title: 'Reports',
                icon: <DescriptionIcon />,
                path: '/dashboard/insights/reports',
            },
        ],
    },
    {
        segment: 'configuration',
        title: 'Configuration',
        icon: <SettingsIcon />,
        path: '/dashboard/Configuration',
    },
];

const demoTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#00382E', 
      },
    },
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  

function DemoPageContent({ pathname }) {
    const segment = pathname.split('/').pop();
    switch (segment) {
        case 'users':
            return <UserPage />;
        case 'wallet':
            return <WalletPage />;
        case 'reports':
            return <ReportsPage />;
        case 'security':
            return <SecurityPage />;
        case 'analytics':
            return <AnalyticsPage />;
        case 'configuration':
            return <ConfigurationPage />;
        default:
            return (
                <Box
                    sx={{
                        py: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography>Welcome to the Dashboard!</Typography>
                </Box>
            );
    }
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
    const { window } = props;

    const router = useDemoRouter('/dashboard');

    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <DemoProvider window={demoWindow}>
            <AppProvider
                navigation={NAVIGATION}
                router={router}
                theme={demoTheme}
                window={demoWindow}
                branding={{
                    title: (
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Admin Dashboard
                      </Typography>
                    ),
                    logo: <></>,
                  }}
            >
                <DashboardLayout>
                    <DemoPageContent pathname={router.pathname} />
                </DashboardLayout>
            </AppProvider>
        </DemoProvider>
    );
}

DashboardLayoutBasic.propTypes = {

    window: PropTypes.func,
};

export default DashboardLayoutBasic;
