import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('profile')}</h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="username">{t('username')}</Label>
          <Input id="username" />
        </div>
        <div>
          <Label htmlFor="email">{t('email')}</Label>
          <Input id="email" type="email" />
        </div>
        <div>
          <Label>{t('notifications')}</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="new-task" />
              <Label htmlFor="new-task">{t('newTaskNotification')}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="new-comment" />
              <Label htmlFor="new-comment">{t('newCommentNotification')}</Label>
            </div>
          </div>
        </div>
        <Button type="submit">{t('saveChanges')}</Button>
      </form>
    </div>
  );
};

export default Profile;