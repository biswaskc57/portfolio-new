
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  recaptcha: z.string().min(1, { message: 'Please complete the reCAPTCHA verification' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  // Simulated reCAPTCHA state
  const [recaptchaValue, setRecaptchaValue] = React.useState('');
  const [showRecaptchaError, setShowRecaptchaError] = React.useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      recaptcha: '',
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    if (!recaptchaValue) {
      setShowRecaptchaError(true);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data:', data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setRecaptchaValue('');
    }
  };

  // Simulate reCAPTCHA verification
  const handleRecaptchaVerify = () => {
    setRecaptchaValue('verified');
    setShowRecaptchaError(false);
    form.setValue('recaptcha', 'verified');
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.name')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.email')}</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.phone')}</FormLabel>
              <FormControl>
                <Input {...field} type="tel" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.message')}</FormLabel>
              <FormControl>
                <Textarea {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Simulated reCAPTCHA component */}
        <div className="py-2">
          <div 
            className={`border rounded p-3 ${showRecaptchaError ? 'border-destructive' : 'border-border'} 
              flex items-center justify-center bg-secondary/30`}
          >
            <div 
              onClick={handleRecaptchaVerify} 
              className={`flex items-center ${recaptchaValue ? 'text-green-500' : 'text-muted-foreground hover:text-primary'} 
                cursor-pointer transition-colors`}
            >
              <div className="w-6 h-6 mr-2 border border-current rounded-sm flex items-center justify-center">
                {recaptchaValue && '✓'}
              </div>
              <span className="text-sm">I'm not a robot</span>
            </div>
          </div>
          {showRecaptchaError && (
            <p className="text-sm font-medium text-destructive mt-1">
              Please verify that you're not a robot
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            This form includes reCAPTCHA to prevent spam.
          </p>
        </div>
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            t('contact.send')
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
