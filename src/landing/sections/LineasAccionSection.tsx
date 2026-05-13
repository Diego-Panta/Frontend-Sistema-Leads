import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, ClipboardList, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { siteShortName } from "@/shared/site";

export default function LineasAccionSection() {
  const lineas = [
    {
      icon: CalendarCheck,
      title: `CITAS.${siteShortName.toLowerCase()}`,
      description:
        "Recepción digital de turnos, recordatorios y priorización de urgencias para reducir tiempos de espera.",
      color: "#5BBDD3",
      bgColor: "bg-[#5BBDD3]/10",
      acciones: ["Agenda en línea", "Confirmación por WhatsApp", "Historial de visitas", "Alertas de mantenimiento"],
    },
    {
      icon: ClipboardList,
      title: `INFORMA.${siteShortName.toLowerCase()}`,
      description:
        "Presupuestos detallados, fotos de hallazgos y avances del taller para que apruebes con conocimiento de causa.",
      color: "#D79259",
      bgColor: "bg-[#D79259]/10",
      acciones: ["Estados del servicio", "Lista de repuestos", "Costos desglosados", "Comprobantes digitales"],
    },
    {
      icon: Wrench,
      title: `TALLER.${siteShortName.toLowerCase()}`,
      description:
        "Mecánica general, frenos, suspensión, motor y electricidad con protocolos de calidad y repuestos homologados.",
      color: "#BDBF65",
      bgColor: "bg-[#BDBF65]/10",
      acciones: ["Diagnóstico computarizado", "Mantenimiento preventivo", "Correctivos mayores", "Garantía del trabajo"],
    },
  ];

  return (
    <section id="lineas-accion" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Pilares del
            <span className="block text-[#BDBF65]">sistema</span>
          </h2>
          <p className="text-lg text-[#2C312D]/70">
            Tres frentes conectados: agenda, información al cliente y ejecución en taller — todo bajo la marca{" "}
            {siteShortName}.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {lineas.map((linea, idx) => {
            const Icon = linea.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white border border-[#2C312D]/10 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl ${linea.bgColor} flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8" style={{ color: linea.color }} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#2C312D] mb-3">{linea.title}</h3>
                    <p className="text-[#2C312D]/70 text-sm mb-6">{linea.description}</p>

                    <ul className="space-y-2">
                      {linea.acciones.map((accion, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#2C312D]/60">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: linea.color }} />
                          {accion}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
