import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

type ModalsProps = {
  showRegisterModal: boolean;
  setShowRegisterModal: (show: boolean) => void;
  showAddChannelModal: boolean;
  setShowAddChannelModal: (show: boolean) => void;
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
  channelLink: string;
  setChannelLink: (link: string) => void;
  onRegister: () => void;
  onAddChannel: () => void;
};

const Modals = ({
  showRegisterModal,
  setShowRegisterModal,
  showAddChannelModal,
  setShowAddChannelModal,
  username,
  setUsername,
  email,
  setEmail,
  channelLink,
  setChannelLink,
  onRegister,
  onAddChannel,
}: ModalsProps) => {
  return (
    <>
      <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Начать бесплатно</DialogTitle>
            <DialogDescription>
              Создайте аккаунт за 30 секунд. Никаких карт не требуется.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="username">Имя пользователя</Label>
              <Input
                id="username"
                placeholder="Ваше имя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
              />
            </div>
            <Button onClick={onRegister} className="w-full bg-gradient-to-r from-primary to-secondary">
              Зарегистрироваться
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAddChannelModal} onOpenChange={setShowAddChannelModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Добавить канал</DialogTitle>
            <DialogDescription>
              Укажите ссылку на ваш Telegram-канал или группу
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="channel-link">Ссылка на канал</Label>
              <Input
                id="channel-link"
                placeholder="@your_channel или t.me/your_channel"
                value={channelLink}
                onChange={(e) => setChannelLink(e.target.value)}
                className="mt-2"
              />
            </div>
            <Button onClick={onAddChannel} className="w-full bg-gradient-to-r from-primary to-secondary">
              Добавить канал
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modals;
