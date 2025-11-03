'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <h1 className={`text-3xl transition-colors ${
              isScrolled ? 'text-[var(--primary)]' : 'text-white'
            }`}>
              Стоматология. Нор-Арт Дент
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { ro: 'Главная', en: 'home' },
              { ro: 'О нас', en: 'about' },
              { ro: 'Услуги', en: 'services' },
              { ro: 'Отзывы', en: 'testimonials' },
              { ro: 'Контакты', en: 'contact' }
            ].map((item) => (
              <button
                key={item.en}
                onClick={() => scrollToSection(item.en)}
                className={`transition-colors hover:text-[var(--turquoise)] ${
                  isScrolled ? 'text-[var(--foreground)]' : 'text-white'
                }`}
              >
                {item.ro}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[var(--turquoise)] hover:bg-[var(--turquoise-dark)] text-white px-6 rounded-full"
            >
              Запись онлайн
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-[var(--foreground)]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-[var(--foreground)]' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg rounded-lg mt-2 py-4 px-6">
            {[
              { ro: 'Главная', en: 'home' },
              { ro: 'О нас', en: 'about' },
              { ro: 'Услуги', en: 'services' },
              { ro: 'Отзывы', en: 'testimonials' },
              { ro: 'Контакты', en: 'contact' }
            ].map((item) => (
              <button
                key={item.en}
                onClick={() => scrollToSection(item.en)}
                className="block w-full text-left py-3 hover:text-[var(--turquoise)] transition-colors"
              >
                {item.ro}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-[var(--turquoise)] hover:bg-[var(--turquoise-dark)] text-white rounded-full"
            >
              Запись онлайн
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
