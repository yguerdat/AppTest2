import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('dashboard')}</h2>
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;