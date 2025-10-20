import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from 'Routes';
import AppProvider from 'providers/AppProvider';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import SettingsPanelProvider from 'providers/SettingsPanelProvider';
import ChatWidgetProvider from 'providers/ChatWidgetProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <SettingsPanelProvider>
        <ChatWidgetProvider>
          <BreakpointsProvider>
            <RouterProvider router={router} />
          </BreakpointsProvider>
        </ChatWidgetProvider>
      </SettingsPanelProvider>
    </AppProvider>
  </StrictMode>
);
