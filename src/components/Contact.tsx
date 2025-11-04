'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useState } from 'react';
import type React from 'react';
import { format, startOfToday } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'м. Филатов Луг\nул. Большое Понизовье, д. 3',
  },
  {
    icon: Mail,
    title: 'Почта',
    content: 'iamyapi@inbox.ru\n',
  },
  {
    icon: Phone,
    title: 'Контакты',
    content: ' +7 (925) 535-50-00\ntelegram: @norartdent',

  },
  {
    icon: Clock,
    title: 'Время работы',
    content: 'Пн - Пт: 09:00 - 21:00\nСб: 10:30 - 21:00\nВс: 11:00 - 19:00',
  },
];

export function Contact() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+7 (___) ___-__-__',
    service: '',
    contactMethod: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // EmailJS configuration - замените на ваши реальные значения после настройки
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID_CLINIC = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLINIC || 'YOUR_TEMPLATE_ID_CLINIC';
  const EMAILJS_TEMPLATE_ID_CLIENT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT || 'YOUR_TEMPLATE_ID_CLIENT';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handlePhoneChange = (e: any) => {
    const input = e.target.value;
    
    // Извлекаем только цифры
    const digits = input.replace(/\D/g, '');
    
    // Убираем первую 7 (от +7)
    const phoneDigits = digits.startsWith('7') ? digits.slice(1) : digits;
    
    // Ограничиваем до 10 цифр
    const limitedDigits = phoneDigits.slice(0, 10);
    
    // Формируем маску
    let formatted = '+7 (';
    
    // Первые 3 цифры
    for (let i = 0; i < 3; i++) {
      formatted += limitedDigits[i] || '_';
    }
    formatted += ') ';
    
    // Следующие 3 цифры
    for (let i = 3; i < 6; i++) {
      formatted += limitedDigits[i] || '_';
    }
    formatted += '-';
    
    // Следующие 2 цифры
    for (let i = 6; i < 8; i++) {
      formatted += limitedDigits[i] || '_';
    }
    formatted += '-';
    
    // Последние 2 цифры
    for (let i = 8; i < 10; i++) {
      formatted += limitedDigits[i] || '_';
    }
    
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // 1. Send email to clinic
      const clinicTemplateParams = {
        to_email: 'iamyapi@inbox.ru',
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,
        service: formData.service,
        date: date ? format(date, 'd MMMM yyyy', { locale: ru }) : '',
        contact_method: formData.contactMethod,
        message: formData.message || '-',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CLINIC,
        clinicTemplateParams
      );

      // 2. Send confirmation email to client
      if (formData.email) {
        const clientTemplateParams = {
          to_email: formData.email,
          client_name: formData.name,
          service: formData.service,
          date: date ? format(date, 'd MMMM yyyy', { locale: ru }) : '',
          contact_method: formData.contactMethod,
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_CLIENT,
          clientTemplateParams
        );
      }

      setSubmitSuccess(true);
      
      // Clear form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '+7 (___) ___-__-__',
          service: '',
          contactMethod: '',
          message: '',
        });
        setDate(undefined);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Ошибка отправки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[var(--blue-light)]/30 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[var(--foreground)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Запишитесь на консультацию
          </h2>
          <div className="w-20 h-0.5 bg-[var(--turquoise)] mx-auto mb-6" />
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Сделайте первый шаг к улыбке своей мечты. Наша команда ждет вас!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name">Имя Фамилия *</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 rounded-xl border-gray-200 focus:border-[var(--turquoise)] focus:ring-[var(--turquoise)]"
                  placeholder="Ваше имя"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Почта *</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 rounded-xl border-gray-200 focus:border-[var(--turquoise)] focus:ring-[var(--turquoise)]"
                    placeholder="Ваша почта"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace') {
                        e.preventDefault();
                        const digits = formData.phone.replace(/\D/g, '').slice(1);
                        const newDigits = digits.slice(0, -1);
                        
                        let formatted = '+7 (';
                        for (let i = 0; i < 3; i++) {
                          formatted += newDigits[i] || '_';
                        }
                        formatted += ') ';
                        for (let i = 3; i < 6; i++) {
                          formatted += newDigits[i] || '_';
                        }
                        formatted += '-';
                        for (let i = 6; i < 8; i++) {
                          formatted += newDigits[i] || '_';
                        }
                        formatted += '-';
                        for (let i = 8; i < 10; i++) {
                          formatted += newDigits[i] || '_';
                        }
                        
                        setFormData({ ...formData, phone: formatted });
                      }
                    }}
                    className="mt-2 rounded-xl border-gray-200 focus:border-[var(--turquoise)] focus:ring-[var(--turquoise)]"
                  />
                </div>
              </div>

              {/* Service & Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="service">Интересующая услуга *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-2 flex h-9 w-full items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm transition-colors focus:border-[var(--turquoise)] focus:outline-none focus:ring-2 focus:ring-[var(--turquoise)]/20"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="Лечение и терапия">Лечение и терапия</option>
                    <option value="Эстетическая стоматология">Эстетическая стоматология</option>
                    <option value="Хирургическая стоматология">Хирургическая стоматология</option>
                    <option value="Имплантация зубов">Имплантация зубов</option>
                    <option value="Пародонтология">Пародонтология</option>
                    <option value="Протезирование зубов">Протезирование зубов</option>
                  </select>
                </div>
                <div>
                  <Label>Дата записи *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="mt-2 flex w-full items-center justify-between gap-2 rounded-md border border-gray-200 bg-input-background px-3 h-9 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span className={!date ? 'text-muted-foreground' : ''}>
                            {date ? format(date, 'd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                          </span>
                        </span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={{ before: startOfToday() }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <input type="hidden" name="date" value={date ? format(date, 'yyyy-MM-dd') : ''} />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <Label htmlFor="contact_method">Выберите удобный способ связи *</Label>
                <select
                  id="contact_method"
                  name="contact_method"
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  className="mt-2 flex h-9 w-full items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm transition-colors focus:border-[var(--turquoise)] focus:outline-none focus:ring-2 focus:ring-[var(--turquoise)]/20"
                >
                  <option value="">Выберите вариант</option>
                  <option value="Заказать звонок">Заказать звонок</option>
                  <option value="Написать в WhatsApp">Написать в WhatsApp</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">Комментарии</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 rounded-xl border-gray-200 focus:border-[var(--turquoise)] focus:ring-[var(--turquoise)] min-h-[120px]"
                  placeholder="Расскажите о своих предпочтениях..."
                />
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                  ✓ Заявка отправлена! Проверьте почту для подтверждения.
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--turquoise)] hover:bg-[var(--turquoise-dark)] text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Записаться на прием'}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-white/40"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--turquoise-light)]/50 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
                    <info.icon className="w-6 h-6 text-[var(--turquoise-dark)]" />
                  </div>
                  <h4 className="mb-2 text-[var(--foreground)]">{info.title}</h4>
                  <p className="text-sm text-[var(--muted-foreground)] whitespace-pre-line">
                    {info.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Yandex Map */}
            <div className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/40">
              <div className="w-full h-80 rounded-xl overflow-hidden relative">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f41d05d8ef4e058dabbbfabb449113e44e0d73270ac9b24a45fede65a3467a2&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{ position: 'relative', borderRadius: '0.75rem' }}
                  title="Яндекс Карта - Нор-Арт Дент"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
