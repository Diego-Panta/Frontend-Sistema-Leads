import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { workshopAddress } from "@/shared/site";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo agendo una cita?",
      answer:
        "Puedes escribirnos por WhatsApp, correo o el formulario de contacto con marca, modelo y síntoma del vehículo. Confirmamos disponibilidad y te proponemos el mejor turno.",
    },
    {
      question: "¿Ofrecen garantía en los trabajos?",
      answer:
        "Sí. La garantía cubre mano de obra y repuestos instalados según el tipo de servicio; los detalles constan en tu orden de trabajo y en el comprobante.",
    },
    {
      question: "¿Puedo pagar con Yape o transferencia?",
      answer:
        "Aceptamos Yape, Plin y transferencias bancarias. Para servicios mayores podemos solicitar un abono al autorizar el presupuesto.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer: `Atendemos en ${workshopAddress}. Al confirmar tu cita te compartimos la referencia exacta y estacionamiento cercano si aplica.`,
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-9xl">❓</div>
        <div className="absolute bottom-20 left-10 text-9xl">💡</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5BBDD3]/10 border border-[#5BBDD3]/20 mb-6">
            <HelpCircle className="h-4 w-4 text-[#5BBDD3]" />
            <span className="text-[#2C312D] text-sm font-medium">Preguntas frecuentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-4">¿Tienes dudas?</h2>
          <p className="text-lg text-[#2C312D]/80">Respuestas rápidas antes de traer tu vehículo al taller.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  openIndex === idx
                    ? "bg-white border-2 border-[#BDBF65] shadow-lg"
                    : "bg-white border border-[#2C312D]/10 hover:border-[#BDBF65]/50"
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[#2C312D] font-semibold text-lg flex-1 pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-[#BDBF65] shrink-0 transition-transform duration-300 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#2C312D]/70 leading-relaxed pt-4 border-t border-[#2C312D]/10 mt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
