import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import TaskCard from '../components/TaskCard';
import { fetchTasks } from '../api/mockApi';
import { Task, TaskState, TaskPriority } from '../types/task';

const TaskList = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
      setLoading(false);
    };
    loadTasks();
  }, []);

  if (loading) {
    return <div className="p-4">{t('loading')}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{t('tasks')}</h2>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-4">
        <Input placeholder={t('search')} className="w-full md:w-1/3" />
        <Select>
          <SelectTrigger className="w-full md:w-auto">
            <SelectValue placeholder={t('allStates')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">{t('allStates')}</SelectItem>
            {Object.values(TaskState).map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-auto">
            <SelectValue placeholder={t('allPriorities')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">{t('allPriorities')}</SelectItem>
            {Object.values(TaskPriority).map((priority) => (
              <SelectItem key={priority} value={priority}>
                {priority}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="w-full md:w-auto">{t('filter')}</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;