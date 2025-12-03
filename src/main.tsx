import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from 'Routes';
import AppProvider from 'providers/AppProvider';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import SettingsPanelProvider from 'providers/SettingsPanelProvider';
import ChatWidgetProvider from 'providers/ChatWidgetProvider';
import { AuthProvider } from './context/AuthContext.tsx';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <AppProvider>
      <SettingsPanelProvider>
        <ChatWidgetProvider>
          <BreakpointsProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              pauseOnHover={false}
              theme="colored"
            />
          </BreakpointsProvider>
        </ChatWidgetProvider>
      </SettingsPanelProvider>
    </AppProvider>
    </AuthProvider>
  </StrictMode>
);
