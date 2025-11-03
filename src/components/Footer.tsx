'use client';

import type React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

// const socialLinks = [
//   { icon: Facebook, href: '#', label: 'Facebook' },
//   { icon: Instagram, href: '#', label: 'Instagram' },
//   { icon: Twitter, href: '#', label: 'Twitter' },
//   { icon: Linkedin, href: '#', label: 'LinkedIn' },
// ];

const quickLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contact' },
];

const services = [
  'Лечение и терапия',
  'Эстетическая стоматология',
  'Хирургическая стоматология',
  'Имплантация зубов',
  'Пародонтология',
  'Протезирование зубов',
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Спасибо за подписку на нашу рассылку!');
    setEmail('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[var(--blue-dark)] to-[var(--blue-muted)] text-white relative overflow-hidden">
      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--turquoise)]/10 to-transparent pointer-events-none" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 
              className="text-3xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Нор-Арт Дент
            </h3>
            <div className="w-12 h-0.5 bg-[var(--turquoise)] mb-4" />
            <p className="text-white/80 leading-relaxed mb-6">
              Где элегантность встречается с превосходным качеством стоматологических услуг. Мы создаем красивые улыбки с точностью и искусством.
            </p>
            {/* Social Links */}
            {/*<div className="flex gap-3">*/}
            {/*  {socialLinks.map((social) => (*/}
            {/*    <a*/}
            {/*      key={social.label}*/}
            {/*      href={social.href}*/}
            {/*      aria-label={social.label}*/}
            {/*      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[var(--turquoise)] flex items-center justify-center transition-colors group border border-white/20"*/}
            {/*    >*/}
            {/*      <social.icon className="w-5 h-5 text-white" />*/}
            {/*    </a>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ссылки
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-[var(--turquoise-light)] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Услуги
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-white/80 hover:text-[var(--turquoise-light)] transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Дополнительно
            </h4>
            <p className="text-white/80 mb-4">
              Подпишитесь на эксклюзивные предложения и советы по уходу за зубами.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Укажите электронную почту"
                  required
                  className="pl-11 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 rounded-xl focus:border-[var(--turquoise)] focus:ring-[var(--turquoise)]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[var(--turquoise)] hover:bg-[var(--turquoise-dark)] text-white rounded-xl backdrop-blur-sm"
              >
                Подписаться
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-center items-center text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} Нор-Арт Дент. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
