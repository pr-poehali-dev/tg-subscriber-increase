import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type User = {
  username: string;
  balance: number;
  channels: string[];
};

type DashboardProps = {
  user: User;
  energy: number;
  coins: number;
  onAddChannel: () => void;
  onGetSubscribers: () => void;
  onTap: () => void;
};

const Dashboard = ({ user, energy, coins, onAddChannel, onGetSubscribers, onTap }: DashboardProps) => {
  return (
    <div className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Привет, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{user.username}</span>! 👋
          </h1>
          <p className="text-muted-foreground">Тапай и зарабатывай коины для подписчиков</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Coins" size={20} className="text-primary" />
                Коины
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-2">{coins}</div>
              <p className="text-sm text-muted-foreground">коинов доступно</p>
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
              <div className="text-2xl font-bold text-accent mb-2">50 коинов = 5 подписчиков</div>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-primary to-secondary"
                onClick={onGetSubscribers}
                disabled={coins < 50 || user.channels.length === 0}
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
            <CardTitle className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="Zap" size={28} className="text-accent" />
                <span className="text-2xl">Энергия: {energy}/100</span>
              </div>
              <div className="h-3 bg-secondary/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-300"
                  style={{ width: `${energy}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground font-normal mt-2">
                +1 энергия каждую секунду
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <button
              onClick={onTap}
              disabled={energy === 0}
              className="w-64 h-64 rounded-full bg-gradient-to-br from-primary via-secondary to-accent hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center text-white text-6xl font-bold shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              💎
            </button>
            <p className="text-lg text-muted-foreground mt-6">
              {energy > 0 ? 'Тапай и зарабатывай коины!' : 'Энергия восстанавливается...'}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;