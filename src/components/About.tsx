'use client';

import { motion } from 'motion/react';
import { Award, Users, Heart, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Award, label: 'Лет безупречного качества', value: '15+' },
  { icon: Users, label: 'Довольных пациентов', value: '5,000+' },
  { icon: Heart, label: 'Успех', value: '100%' },
  { icon: Shield, label: 'Сертифицированных специалистов', value: '3' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[var(--blue-light)]/30">
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
            О клинике Нор-Арт Дент
          </h2>
          <div className="w-20 h-0.5 bg-[var(--turquoise)] mx-auto mb-6" />
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Совершенство в каждой детали. Доверие, основанное на безупречном результате
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk4NjE2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury clinic interior"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50aXN0JTIwb2ZmaWNlfGVufDF8fHx8MTc1OTgzOTczMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern dental office"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5ODYxNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dental equipment"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 
              className="text-3xl mb-6 text-[var(--foreground)]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Новая философия о вашей улыбке
            </h3>
            <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
              В клинике Нор-Арт Дент мы объединили современные технологии, изысканное мастерство
              и заботу о деталях, чтобы подарить вам исключительное качество стоматологического лечения.
              Здесь каждый визит превращается в комфортное и вдохновляющее путешествие к идеальной улыбке.
            </p>
            <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
              Используя новейшее оборудование и авторские методики, мы достигаем результатов, которые
              невозможно не заметить. Наши специалисты непрерывно совершенствуются, чтобы
              соответствовать самым высоким стандартам.
            </p>
            
            {/* Credentials */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--turquoise)] rounded-full" />
                <p className="text-[var(--foreground)]">Искреннее внимание к каждому пациенту</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--turquoise)] rounded-full" />
                <p className="text-[var(--foreground)]">Забота и комфорт на каждом этапе</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--turquoise)] rounded-full" />
                <p className="text-[var(--foreground)]">Передовые технологии без компромиссов</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-lg hover:shadow-lg transition-shadow border border-white/30"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--turquoise)] text-white mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <h4 
                className="text-3xl mb-2 text-[var(--foreground)]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {stat.value}
              </h4>
              <p className="text-sm text-[var(--muted-foreground)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
