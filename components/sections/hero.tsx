"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  CarFront,
  MessageCircle,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui";
import { siteConfig } from "@/data/site";

const highlights = [
  { icon: BadgeCheck, value: "+10 anos", label: "de experiência" },
  { icon: CarFront, value: "Equipamentos", label: "de última geração" },
  { icon: ScanLine, value: "Diagnóstico", label: "preciso" },
  { icon: ShieldCheck, value: "Garantia em", label: "todos serviços" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      className="relative isolate flex min-h-[720px] overflow-hidden pt-20 sm:min-h-[100svh] lg:min-h-screen lg:pt-24"
      id="inicio"
    >
      <motion.div
        animate={{ scale: 1 }}
        className="absolute inset-0"
        initial={{ scale: shouldReduceMotion ? 1 : 1.08 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.6, ease: easeOut }}
      >
        <Image
          alt=""
          className="object-cover object-[58%_52%]"
          fill
          priority
          sizes="100vw"
          src="/images/fachada-noite.jpeg"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.98)_31%,rgba(5,5,5,.72)_52%,rgba(5,5,5,.16)_78%,rgba(5,5,5,.56)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.3)_0%,transparent_26%,transparent_68%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,transparent_0%,rgba(5,5,5,.08)_32%,rgba(5,5,5,.72)_100%)]" />

      <motion.div
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className="pointer-events-none absolute right-[-3%] bottom-0 z-10 hidden h-[calc(100%-7rem)] w-[58%] lg:block xl:right-0 xl:w-[55%]"
        initial={{
          opacity: shouldReduceMotion ? 1 : 0,
          scale: shouldReduceMotion ? 1 : 0.96,
          x: shouldReduceMotion ? 0 : 60,
        }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.3,
          duration: shouldReduceMotion ? 0 : 1.1,
          ease: easeOut,
        }}
      >
        <Image
          alt="Especialista da EFORCE Eletrônica Automotiva"
          className="origin-bottom-right scale-[1.08] object-contain object-right-bottom drop-shadow-[-16px_18px_18px_rgba(0,0,0,.5)]"
          fill
          priority
          sizes="58vw"
          src="/images/elias-recortado.png"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[11] h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-20 mx-auto flex w-full max-w-[1180px] items-start px-5 pb-12 sm:items-center sm:pb-16 lg:px-8 lg:pb-20">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="max-w-[640px] pt-8 pb-12 sm:py-16 lg:py-10"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            x: shouldReduceMotion ? 0 : -40,
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: easeOut,
          }}
        >
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.08em] text-white/90 before:h-px before:w-7 before:bg-accent sm:text-xs">
            Especialistas em eletrônica automotiva
          </p>

          <h1 className="display-title mt-4 max-w-[620px] text-[3.6rem] leading-[.88] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,.7)] sm:mt-5 sm:text-[clamp(4.2rem,7.4vw,7rem)] sm:leading-[.86]">
            Tecnologia que <span className="text-accent">move</span> seu carro
          </h1>

          <p className="mt-6 max-w-[500px] text-sm leading-6 text-white/78 sm:text-base">
            Eletrônica Automotiva em Juína - MT com diagnóstico avançado,
            reparos precisos e soluções definitivas em sistemas eletrônicos
            automotivos.
          </p>

          <div className="mt-8 grid max-w-[590px] grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
            {highlights.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2.5"
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 14,
                }}
                key={value}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.7 + index * 0.1,
                  duration: shouldReduceMotion ? 0 : 0.55,
                  ease: easeOut,
                }}
              >
                <Icon
                  className="mt-0.5 shrink-0 text-white/90"
                  size={20}
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-[10px] font-bold uppercase">{value}</p>
                  <p className="mt-0.5 text-[9px] uppercase leading-3 text-white/55">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 16,
            }}
            transition={{
              delay: shouldReduceMotion ? 0 : 1.05,
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: easeOut,
            }}
          >
            <Button
              analyticsEvent="whatsapp_click"
              analyticsLocation="hero"
              href={siteConfig.whatsappHref}
              target="_blank"
            >
              Quero um diagnóstico <MessageCircle size={15} />
            </Button>
            <Button href="/#servicos" variant="secondary">
              Nossos serviços
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 0.35, scale: 1, x: 0 }}
        className="pointer-events-none absolute right-[-20%] bottom-0 z-10 h-[50%] w-[96%] sm:right-[-12%] sm:h-[58%] lg:hidden"
        initial={{
          opacity: shouldReduceMotion ? 0.35 : 0,
          scale: shouldReduceMotion ? 1 : 0.96,
          x: shouldReduceMotion ? 0 : 40,
        }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.3,
          duration: shouldReduceMotion ? 0 : 1.1,
          ease: easeOut,
        }}
      >
        <Image
          alt=""
          className="origin-bottom-right scale-[1.06] object-contain object-right-bottom drop-shadow-[-10px_12px_14px_rgba(0,0,0,.45)]"
          fill
          sizes="100vw"
          src="/images/elias-recortado.png"
        />
      </motion.div>
    </section>
  );
}
