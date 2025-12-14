import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type User = {
  username: string;
  balance: number;
  channels: string[];
};

type Task = {
  id: number;
  type: 'subscribe' | 'view' | 'like';
  channel: string;
  reward: number;
};

type DashboardProps = {
  user: User;
  tasks: Task[];
  onAddChannel: () => void;
  onGetSubscribers: () => void;
  onCompleteTask: (task: Task) => void;
};

const Dashboard = ({ user, tasks, onAddChannel, onGetSubscribers, onCompleteTask }: DashboardProps) => {
  return (
    <div className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Привет, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{user.username}</span>! 👋
          </h1>
          <p className="text-muted-foreground">Выполняй задания и получай подписчиков</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Wallet" size={20} className="text-primary" />
                Баланс
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-2">{user.balance}</div>
              <p className="text-sm text-muted-foreground">баллов доступно</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-secondary" />
                Мои каналы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-secondary mb-2">{user.channels.length}</div>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={onAddChannel}
                className="w-full border-secondary/30"
              >
                <Icon name="Plus" size={16} className="mr-1" />
                Добавить канал
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-accent" />
                Заказать подписчиков
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent mb-2">50 баллов = 5 подписчиков</div>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-primary to-secondary"
                onClick={onGetSubscribers}
                disabled={user.balance < 50 || user.channels.length === 0}
              >
                <Icon name="Rocket" size={16} className="mr-1" />
                Получить подписчиков
              </Button>
            </CardContent>
          </Card>
        </div>

        {user.channels.length > 0 && (
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle>Мои каналы для продвижения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {user.channels.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name="Send" size={20} className="text-white" />
                      </div>
                      <span className="font-medium">{channel}</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-primary/30">
                      Статистика
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Icon name="Target" size={24} className="text-primary" />
                Доступные задания
              </span>
              <span className="text-sm text-muted-foreground font-normal hidden md:block">
                Выполняйте задания и зарабатывайте баллы
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {tasks.map((task) => (
                <Card key={task.id} className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        {task.type === 'subscribe' && <Icon name="UserPlus" size={20} className="text-primary" />}
                        {task.type === 'view' && <Icon name="Eye" size={20} className="text-accent" />}
                        {task.type === 'like' && <Icon name="Heart" size={20} className="text-secondary" />}
                        {task.type === 'subscribe' && 'Подписаться'}
                        {task.type === 'view' && 'Просмотреть'}
                        {task.type === 'like' && 'Поставить реакцию'}
                      </span>
                      <span className="text-primary font-bold">+{task.reward}</span>
                    </CardTitle>
                    <CardDescription className="text-base font-medium">{task.channel}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary"
                      onClick={() => onCompleteTask(task)}
                    >
                      Выполнить задание
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
