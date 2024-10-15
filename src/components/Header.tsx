import { useTranslation } from 'react-i18next';
import { Bell, Settings, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl md:text-2xl font-bold">eS.Tasks</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;