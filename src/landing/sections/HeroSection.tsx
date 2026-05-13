import React from "react";
import { Button } from "@/components/ui/button";
import { Map, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BrandMark } from "@/components/core/BrandMark";
import { siteFullName, siteShortName } from "@/shared/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 py-4 grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BDBF65]/20 border border-[#BDBF65]/30"
          >
            <Sparkles className="h-4 w-4 text-[#BDBF65]" />
            <span className="text-[#2C312D] text-sm font-medium">{siteShortName}</span>
          </motion.div>

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-[#2C312D]">Tu taller de</span>
              <span className="block text-[#BDBF65] mt-2">confianza en San Miguel</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-[#2C312D]/90 leading-relaxed max-w-xl">
            {siteFullName} combina experiencia en mecánica automotriz con un sistema digital que ordena
            citas, presupuestos y el seguimiento de cada servicio.
          </p>

          <p className="text-[#2C312D]/75 leading-relaxed">
            Agenda, consulta el estado de tu vehículo y recibe información clara en cada etapa del trabajo en
            taller.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#BDBF65] text-[#2C312D] hover:bg-[#BDBF65]/90 font-bold shadow-lg shadow-[#BDBF65]/30 transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById("lineas-accion")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Map className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Ver servicios digitales
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#2C312D]/30 bg-transparent hover:bg-[#BDBF65]/10 text-[#2C312D] transition-all duration-300 hover:scale-105 group"
              onClick={() => document.getElementById("impacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Resultados e impacto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center gap-8 pt-6"
          >
            {[
              { label: "Años de trayectoria", value: "15+" },
              { label: "Servicios / año", value: "1.2k" },
              { label: "Marcas atendidas", value: "20+" },
              { label: "Clientes recurrentes", value: "85%" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center min-w-[5.5rem]">
                <div className="text-2xl font-bold text-[#BDBF65]">{stat.value}</div>
                <div className="text-xs text-[#2C312D]/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#BDBF65]/20 to-[#5BBDD3]/20 flex items-center justify-center">
              <img
                src="/IMG_Landing_1.png"
                alt={`Taller y equipo ${siteShortName}`}
                className="w-full h-full object-contain mix-blend-overlay"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -bottom-6 -left-6 bg-white border border-[#2C312D]/10 p-4 rounded-2xl shadow-xl max-w-[min(100%,280px)]"
          >
            <BrandMark />
            <div className="text-xs text-[#2C312D]/60 mt-2">Diagnóstico · Mantenimiento · Puesta a punto</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
