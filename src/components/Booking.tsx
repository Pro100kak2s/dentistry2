"use client";

import { useRef, useState } from "react";
import type React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";

const SERVICES = [
  "Лечение и терапия",
  "Эстетическая стоматология",
  "Хирургическая стоматология",
  "Имплантация зубов",
  "Пародонтология",
  "Протезирование зубов",
];

export function Booking() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState<string>("");

  const FORM_ENDPOINT = "https://formsubmit.co/iamyapi@inbox.ru";

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-white to-[var(--blue-light)]/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[var(--foreground)]" style={{ fontFamily: "Playfair Display, serif" }}>
            Онлайн-запись
          </h2>
          <div className="w-20 h-0.5 bg-[var(--turquoise)] mx-auto" />
        </div>

        <Card className="max-w-3xl mx-auto p-6 md:p-10 bg-white/80 backdrop-blur border-white/40">
          <form ref={formRef} action={FORM_ENDPOINT} method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={() => setSuccess("Заявка отправлена! Проверьте почту.") }>
            {/* FormSubmit settings */}
            <input type="hidden" name="_subject" value="Новая онлайн-запись с сайта" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Спасибо за вашу запись в Нор-Арт Дент! Мы свяжемся с вами для подтверждения." />
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" name="name" placeholder="Ваше имя" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" name="phone" placeholder="+373 xx xxx xxx" required />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="you@example.com" required />
            </div>

            <div className="space-y-2">
              <Label>Услуга</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="service" value={service} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Дата приема</Label>
              <Input id="date" type="date" name="date" required />
            </div>

            <div className="md:col-span-2 flex items-center gap-4">
              <Button type="submit" className="bg-[var(--turquoise)] hover:bg-[var(--turquoise-dark)] text-white rounded-full px-8" disabled={loading}>
                Подтвердить запись
              </Button>
              {success && <span className="text-green-600">{success}</span>}
              {error && <span className="text-red-600">{error}</span>}
            </div>
          </form>
        </Card>

        <p className="text-center text-sm text-[var(--muted-foreground)] mt-4">
          После отправки вы получите письмо-подтверждение на указанную почту.
        </p>
      </div>
    </section>
  );
}
