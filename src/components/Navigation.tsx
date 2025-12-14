import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

type NavigationProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  onRegisterClick: () => void;
  userBalance?: number;
  onBackToHome?: () => void;
  isDashboard?: boolean;
};

const Navigation = ({
  showMobileMenu,
  setShowMobileMenu,
  scrollToSection,
  onRegisterClick,
  userBalance,
  onBackToHome,
  isDashboard = false,
}: NavigationProps) => {
  if (isDashboard) {
    return (
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

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <Icon name="Coins" size={20} className="text-primary" />
              <span className="font-bold text-primary">{userBalance}</span>
            </div>
            <Button 
              variant="outline" 
              onClick={onBackToHome}
              className="border-primary/30 hidden md:flex"
            >
              На главную
            </Button>
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => { onBackToHome?.(); setShowMobileMenu(false); }}
                    className="w-full justify-start"
                  >
                    <Icon name="Home" size={18} className="mr-2" />
                    На главную
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    );
  }

  return (
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

        <div className="flex items-center gap-2">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity hidden md:flex"
            onClick={onRegisterClick}
          >
            Начать бесплатно
          </Button>
          <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>Меню</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('home')}
                  className="w-full justify-start"
                >
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('how-it-works')}
                  className="w-full justify-start"
                >
                  <Icon name="Cog" size={18} className="mr-2" />
                  Как работает
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('blog')}
                  className="w-full justify-start"
                >
                  <Icon name="BookOpen" size={18} className="mr-2" />
                  Блог
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('faq')}
                  className="w-full justify-start"
                >
                  <Icon name="HelpCircle" size={18} className="mr-2" />
                  FAQ
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('contacts')}
                  className="w-full justify-start"
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Контакты
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary mt-4"
                  onClick={() => { onRegisterClick(); setShowMobileMenu(false); }}
                >
                  Начать бесплатно
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
