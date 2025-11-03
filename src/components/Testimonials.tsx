'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Евгений Мартынов',
    role: 'октябрь 2025',
    image: 'https://images.unsplash.com/photo-1684607631635-44399dee5ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRlbnRhbCUyMHBhdGllbnR8ZW58MXx8fHwxNzU5ODYwOTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Очень хорошая стоматология, хожу сюда уже лет 5 и мне все нравится) Прекрасные врачи и качественная работа! Спасибо!',
    rating: 5,
  },
  {
    name: 'Анастасия Мазурова',
    role: 'октябрь 2025',
    image: 'https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVudGFsJTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5ODYxNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Эта клиника стала для меня и близких семейной стоматологией! Врачи очень чуткие, профессионалы своего дела. Всегда есть какие-нибудь акции, что очень приятно))',
    rating: 5,
  },
  {
    name: 'Анна Белоусова',
    role: 'сентябрь 2025',
    image: 'https://images.unsplash.com/photo-1758205307854-5f0b57c27f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50YWwlMjB0ZWFtfGVufDF8fHx8MTc1OTg2MTY4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Заболел зуб и обратилась в эту клинику по советам моих друзей. Мне все понравилось, особенно, качество работы врачей! Всем рекомендую!',
    rating: 5,
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk4NjE2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50aXN0JTIwb2ZmaWNlfGVufDF8fHx8MTc1OTgzOTczMHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5ODYxNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVudGFsJTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5ODYxNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[var(--blue-light)]/30">
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
            Отзывы пациентов
          </h2>
          <div className="w-20 h-0.5 bg-[var(--turquoise)] mx-auto mb-6" />
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Узнайте от наших пациентов об их впечатлениях о стоматологической клинике
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 backdrop-blur-lg p-12 rounded-3xl shadow-xl relative border border-white/40"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-[var(--turquoise)] opacity-20" />
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[var(--turquoise)] text-[var(--turquoise)]" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl text-center text-[var(--foreground)] mb-8 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--turquoise)]">
                <ImageWithFallback
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[var(--foreground)]">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-[var(--turquoise)] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 
            className="text-3xl text-center mb-8 text-[var(--foreground)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Наша клиника
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer ring-1 ring-white/20"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Imagine clinică ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
