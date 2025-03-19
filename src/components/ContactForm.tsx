import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLanguage } from '@/hooks/useLanguage';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  recaptcha: z.string().min(1, 'Please complete the reCAPTCHA'),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;


  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', message: '', recaptcha: '' },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({ title: 'Message sent!', description: 'Thank you for your message.' });
      form.reset();
      recaptchaRef.current?.reset();

      if (onSuccess) onSuccess();
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'There was a problem. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    form.setValue('recaptcha', token || '');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>{t('contact.name')}</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>{t('contact.email')}</FormLabel>
            <FormControl><Input {...field} type="email" /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="phone" render={({ field }) => (
          <FormItem>
            <FormLabel>{t('contact.phone')}</FormLabel>
            <FormControl><Input {...field} type="tel" /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>{t('contact.message')}</FormLabel>
            <FormControl><Textarea {...field} rows={5} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          onChange={handleRecaptchaChange}
        /> */}
        <FormMessage>{form.formState.errors.recaptcha?.message}</FormMessage>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : t('contact.send')}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
