import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Home, CheckSquare, User, X } from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <aside className={`${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 fixed md:relative z-20 inset-y-0 left-0 w-64 transition duration-300 transform bg-background border-r overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between p-4 md:hidden">
        <h2 className="text-xl font-semibold">Menu</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="mt-8">
        <NavLink to="/" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={onClose}>
          <Home className="mr-3 h-5 w-5" />
          {t('dashboard')}
        </NavLink>
        <NavLink to="/tasks" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={onClose}>
          <CheckSquare className="mr-3 h-5 w-5" />
          {t('tasks')}
        </NavLink>
        <NavLink to="/profile" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={onClose}>
          <User className="mr-3 h-5 w-5" />
          {t('profile')}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;