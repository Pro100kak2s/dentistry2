'use client';

import { motion } from 'motion/react';
import { Sparkles, Smile, Zap, Gem, Crown, Shield } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Лечение и терапия',
    description: 'Восстановите здоровье ваших зубов с помощью современных терапевтических методик.\n' +
        'Мы используем инновационные материалы и безболезненные технологии, чтобы сохранить естественную структуру зуба и обеспечить долговечный результат.',
  },
  {
    icon: Gem,
    title: 'Эстетическая стоматология',
    description: 'Преобразите свою улыбку с помощью современных косметических процедур, виниров и преображения улыбки.',
  },
  {
    icon: Smile,
    title: 'Хирургическая стоматология',
    description: 'Точность, уверенность и профессионализм — основа нашей хирургической практики.\n' +
        'Мы проводим любые вмешательства — от удаления зубов до сложных реконструктивных операций',
  },
  {
    icon: Zap,
    title: 'Имплантация зубов',
    description: 'Верните улыбке естественность и функциональность с помощью современных имплантов премиум-класса.\n' +
        'Мы предлагаем персональные решения, основанные на анатомических особенностях и эстетических пожеланиях.',
  },
  {
    icon: Crown,
    title: 'Пародонтология',
    description: 'Здоровые дёсны — фундамент красивой и долговечной улыбки.\n' +
        'Мы диагностируем и лечим заболевания пародонта с использованием новейших методик, направленных на восстановление тканей и предотвращение рецидивов.\n' +
        'Наши специалисты обеспечат деликатный уход и индивидуальный подход на каждом этапе.',
  },
  {
    icon: Shield,
    title: 'Протезирование зубов',
    description: 'Восстановите эстетику и комфорт вашей улыбки с помощью современных протезов, виниров и коронок.\n' +
        'Мы подбираем идеальную форму, цвет и материал, чтобы результат выглядел естественно и гармонично.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[var(--blue-light)]/30 to-white">
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
            Услуги
          </h2>
          <div className="w-20 h-0.5 bg-[var(--turquoise)] mx-auto mb-6" />
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Персонализированные стоматологические решения, созданные с учётом ваших особенностей и ожиданий.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer border border-white/40"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-[var(--turquoise-light)]/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-[var(--turquoise)] transition-colors border border-white/30">
                  <service.icon className="w-8 h-8 text-[var(--turquoise-dark)] group-hover:text-white transition-colors" />
                </div>
                {/* Decorative element */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-[var(--turquoise)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 
                className="text-2xl mb-3 text-[var(--foreground)] group-hover:text-[var(--turquoise-dark)] transition-colors"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {service.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '60px' }}
                className="h-0.5 bg-[var(--turquoise)] mt-6"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--muted-foreground)] mb-6">
            Не знаете, какая услуга вам подходит? Приходите на бесплатную консультацию!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[var(--turquoise-dark)] hover:text-[var(--turquoise)] transition-colors underline decoration-2 underline-offset-4"
          >
            Записаться на бесплатную консультацию →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
