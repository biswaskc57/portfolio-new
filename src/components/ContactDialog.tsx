
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';
import { useLanguage } from '@/hooks/useLanguage';

interface ContactDialogProps {
  buttonVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

const ContactDialog: React.FC<ContactDialogProps> = ({ buttonVariant = 'default' }) => {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{t('home.contact')}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('home.contact')}</DialogTitle>
        </DialogHeader>
        <ContactForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
