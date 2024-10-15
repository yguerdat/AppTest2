import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <I18nextProvider i18n={i18n}>
          <Login onLogin={() => setIsAuthenticated(true)} />
        </I18nextProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="flex flex-col h-screen bg-background text-foreground">
            <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-4">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/tasks" element={<TaskList />} />
                  <Route path="/tasks/:id" element={<TaskDetails />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
        <Toaster />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;