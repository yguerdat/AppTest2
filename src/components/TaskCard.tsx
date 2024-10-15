import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/tasks/${task.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
          <div className="flex justify-between items-center">
            <Badge>{task.state}</Badge>
            <span className="text-sm">{t('dueDate')}: {task.dueDate}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TaskCard;