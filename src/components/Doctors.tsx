'use client';

import { motion } from 'framer-motion';

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-gradient-to-b from-white to-[var(--blue-light)]/30">
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
            className="text-4xl md:text-5xl lg:text-6xl mb-4 text-[var(--foreground)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Наши врачи
          </h2>
          <div className="w-20 h-0.5 bg-[var(--turquoise)] mx-auto mb-6" />
        </motion.div>

        {/* Doctor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/40">
            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Doctor Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/doctor-gulyan.jpg"
                    alt="Гулян Артур Камоевич - Главный врач"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[var(--turquoise)]/20 to-[var(--turquoise-dark)]/20 rounded-full blur-2xl" />
              </motion.div>

              {/* Doctor Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <div>
                    <h3 
                      className="text-3xl md:text-4xl mb-5 text-[var(--foreground)]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Гулян Артур Камоевич
                    </h3>
                    <p className="text-base text-[var(--muted-foreground)] mb-2 leading-relaxed">
                      Главный врач. Стоматолог-терапевт, стоматолог-ортопед высшей квалификационной категории.
                    </p>
                    <p className="text-base text-[var(--muted-foreground)] mb-3 leading-relaxed">
                      Стаж работы: 20 лет
                    </p>
                    <div className="w-14 h-0.5 bg-gradient-to-r from-[var(--turquoise)] to-[var(--turquoise-dark)] rounded-full mb-4" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--turquoise)] mt-1.5 flex-shrink-0" />
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        ФГОУ ВПО "Арцахский государственный университет" по специальности "Стоматология"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
