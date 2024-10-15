import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchTaskById } from '../api/mockApi';
import { Task } from '../types/task';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async () => {
      if (id) {
        const fetchedTask = await fetchTaskById(id);
        setTask(fetchedTask || null);
        setLoading(false);
      }
    };
    loadTask();
  }, [id]);

  if (loading) return <div className="p-6">{t('loading')}</div>;
  if (!task) return <div className="p-6">{t('taskNotFound')}</div>;

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{task.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">{t('state')}</h3>
              <Badge>{task.state}</Badge>
            </div>
            <div>
              <h3 className="font-semibold">{t('priority')}</h3>
              <Badge variant="secondary">{task.priority}</Badge>
            </div>
            <div>
              <h3 className="font-semibold">{t('dueDate')}</h3>
              <p>{task.dueDate}</p>
            </div>
            <div>
              <h3 className="font-semibold">{t('owner')}</h3>
              <p>{task.owner}</p>
            </div>
            <div>
              <h3 className="font-semibold">{t('assignedUsers')}</h3>
              <ul>
                {task.assignedUsers.map((user, index) => (
                  <li key={index}>{user}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">{t('keywords')}</h3>
              <div className="flex flex-wrap gap-2">
                {task.keywords.map((keyword, index) => (
                  <Badge key={index} variant="outline">{keyword}</Badge>
                ))}
              </div>
            </div>
          </div>
          {/* Add more task details, edit form, comments, etc. */}
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskDetails;
</boltArtifact>

To make the application mobile-friendly, we need to ensure that our components are responsive. We've already added some responsive classes to the TaskList component. Let's update the main App component to be more mobile-friendly:

<boltArtifact id="mobile-friendly-app" title="Make App Component Mobile-Friendly">
<boltAction type="file" filePath="src/App.tsx">
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