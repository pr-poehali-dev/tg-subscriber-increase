import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import LandingPage from '@/components/LandingPage';
import Dashboard from '@/components/Dashboard';
import Modals from '@/components/Modals';

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

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showAddChannelModal, setShowAddChannelModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [channelLink, setChannelLink] = useState('');
  const { toast } = useToast();

  const tasks: Task[] = [
    { id: 1, type: 'subscribe', channel: '@tech_news_ru', reward: 10 },
    { id: 2, type: 'view', channel: '@marketing_tips', reward: 5 },
    { id: 3, type: 'subscribe', channel: '@crypto_signals', reward: 10 },
    { id: 4, type: 'like', channel: '@motivation_daily', reward: 3 },
    { id: 5, type: 'subscribe', channel: '@business_growth', reward: 10 },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  const handleRegister = () => {
    if (!username || !email) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setUser({
      username,
      balance: 0,
      channels: [],
    });

    setShowRegisterModal(false);
    setShowDashboard(true);
    
    toast({
      title: "🎉 Регистрация успешна!",
      description: `Добро пожаловать, ${username}! Начните выполнять задания.`,
    });
  };

  const handleAddChannel = () => {
    if (!channelLink) {
      toast({
        title: "Ошибка",
        description: "Введите ссылку на канал",
        variant: "destructive",
      });
      return;
    }

    if (user) {
      setUser({
        ...user,
        channels: [...user.channels, channelLink],
      });
    }

    setShowAddChannelModal(false);
    
    toast({
      title: "✅ Канал добавлен!",
      description: "Теперь выполняйте задания, чтобы получить подписчиков",
    });
    
    setChannelLink('');
  };

  const handleCompleteTask = (task: Task) => {
    if (user) {
      setUser({
        ...user,
        balance: user.balance + task.reward,
      });

      toast({
        title: `+${task.reward} баллов!`,
        description: `Задание выполнено. Баланс: ${user.balance + task.reward}`,
      });
    }
  };

  const handleGetSubscribers = () => {
    if (!user || user.channels.length === 0) {
      toast({
        title: "Добавьте канал",
        description: "Сначала добавьте свой канал для продвижения",
        variant: "destructive",
      });
      return;
    }

    if (user.balance < 50) {
      toast({
        title: "Недостаточно баллов",
        description: "Нужно минимум 50 баллов для получения подписчиков",
        variant: "destructive",
      });
      return;
    }

    setUser({
      ...user,
      balance: user.balance - 50,
    });

    toast({
      title: "🚀 Заказ создан!",
      description: "+5 новых подписчиков придут в течение 24 часов",
    });
  };

  if (showDashboard && user) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          scrollToSection={scrollToSection}
          onRegisterClick={() => setShowRegisterModal(true)}
          userBalance={user.balance}
          onBackToHome={() => setShowDashboard(false)}
          isDashboard={true}
        />
        <Dashboard
          user={user}
          tasks={tasks}
          onAddChannel={() => setShowAddChannelModal(true)}
          onGetSubscribers={handleGetSubscribers}
          onCompleteTask={handleCompleteTask}
        />
        <Modals
          showRegisterModal={showRegisterModal}
          setShowRegisterModal={setShowRegisterModal}
          showAddChannelModal={showAddChannelModal}
          setShowAddChannelModal={setShowAddChannelModal}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          channelLink={channelLink}
          setChannelLink={setChannelLink}
          onRegister={handleRegister}
          onAddChannel={handleAddChannel}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        scrollToSection={scrollToSection}
        onRegisterClick={() => setShowRegisterModal(true)}
      />
      <LandingPage
        scrollToSection={scrollToSection}
        onRegisterClick={() => setShowRegisterModal(true)}
      />
      <Modals
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showAddChannelModal={showAddChannelModal}
        setShowAddChannelModal={setShowAddChannelModal}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        channelLink={channelLink}
        setChannelLink={setChannelLink}
        onRegister={handleRegister}
        onAddChannel={handleAddChannel}
      />
    </div>
  );
};

export default Index;
