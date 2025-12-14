import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TeleGrowth
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm hover:text-primary transition-colors">
              Как работает
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-sm hover:text-primary transition-colors">
              Блог
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">
              Контакты
            </button>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Начать бесплатно
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">100% Бесплатно навсегда</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Продвигай свой Telegram
              </span>
              <br />
              <span className="text-foreground">без вложений</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Получай настоящих подписчиков в Telegram абсолютно бесплатно. 
              Без ботов, без обмана, без скрытых платежей.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Попробовать сейчас
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/10">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: 'Users', value: '50K+', label: 'Активных пользователей' },
                { icon: 'TrendingUp', value: '1M+', label: 'Новых подписчиков' },
                { icon: 'Shield', value: '100%', label: 'Безопасность' },
                { icon: 'Zap', value: '24/7', label: 'Поддержка' },
              ].map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как это <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">работает?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой процесс в 4 шага для роста вашего канала
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                icon: 'UserPlus',
                title: 'Регистрация',
                description: 'Создайте бесплатный аккаунт за 30 секунд. Никаких кредитных карт не требуется.',
              },
              {
                step: '02',
                icon: 'Link',
                title: 'Добавьте канал',
                description: 'Укажите ссылку на ваш Telegram-канал или группу для продвижения.',
              },
              {
                step: '03',
                icon: 'Target',
                title: 'Получайте задания',
                description: 'Выполняйте простые задания: подписки, лайки, просмотры других каналов.',
              },
              {
                step: '04',
                icon: 'Trophy',
                title: 'Растите аудиторию',
                description: 'Получайте настоящих подписчиков на свой канал в обмен на выполненные задания.',
              },
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
                <CardHeader>
                  <div className="text-5xl font-extrabold text-primary/20 mb-2">{item.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Полезные <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">статьи</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Узнайте больше о продвижении в Telegram
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'BookOpen',
                title: '10 способов увеличить охват в Telegram',
                description: 'Проверенные методы для роста вашей аудитории без рекламного бюджета.',
                date: '15 декабря 2024',
                readTime: '5 мин',
              },
              {
                icon: 'Lightbulb',
                title: 'Как создать вирусный контент',
                description: 'Секреты создания постов, которые будут активно репостить подписчики.',
                date: '12 декабря 2024',
                readTime: '7 мин',
              },
              {
                icon: 'TrendingUp',
                title: 'Монетизация Telegram-канала',
                description: 'Реальные способы заработка на аудитории от 1000 подписчиков.',
                date: '10 декабря 2024',
                readTime: '6 мин',
              },
            ].map((article, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Icon name={article.icon as any} size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{article.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Часто задаваемые <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">вопросы</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о сервисе
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Действительно ли сервис полностью бесплатный?',
                answer: 'Да, TeleGrowth полностью бесплатен. Нет никаких скрытых платежей, подписок или премиум-версий. Мы верим в честное продвижение и взаимопомощь.',
              },
              {
                question: 'Это не боты? Подписчики настоящие?',
                answer: 'Все подписчики — реальные люди, которые также используют наш сервис для продвижения своих каналов. Мы строго против ботов и фейковых аккаунтов.',
              },
              {
                question: 'Как быстро я получу подписчиков?',
                answer: 'Скорость роста зависит от вашей активности. Чем больше заданий вы выполняете, тем больше подписчиков получаете. В среднем — 10-50 новых подписчиков в день.',
              },
              {
                question: 'Могу ли я продвигать несколько каналов?',
                answer: 'Да, вы можете добавить неограниченное количество каналов и распределять полученные баллы между ними по своему усмотрению.',
              },
              {
                question: 'Это безопасно для моего аккаунта?',
                answer: 'Абсолютно безопасно. Мы используем официальное API Telegram и не требуем доступа к вашему аккаунту. Все действия выполняются в рамках правил Telegram.',
              },
            ].map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base pl-9">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Связаться с <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">нами</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Остались вопросы? Мы всегда на связи!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Mail',
                title: 'Email',
                content: 'support@telegrowth.ru',
                link: 'mailto:support@telegrowth.ru',
              },
              {
                icon: 'MessageCircle',
                title: 'Telegram',
                content: '@TeleGrowth_Support',
                link: 'https://t.me/TeleGrowth_Support',
              },
              {
                icon: 'Users',
                title: 'Сообщество',
                content: 'Наш Telegram-канал',
                link: 'https://t.me/TeleGrowth_News',
              },
            ].map((contact, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={contact.link} className="text-primary hover:text-secondary transition-colors font-medium">
                    {contact.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                TeleGrowth
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-primary transition-colors">Условия использования</button>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2024 TeleGrowth. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;