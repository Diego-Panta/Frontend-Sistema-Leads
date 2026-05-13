import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Lightbulb, Users, Cpu, Map } from "lucide-react";
import { motion } from "framer-motion";
import { siteShortName } from "@/shared/site";

export default function NosotrosSection() {
  const adnItems = [
    {
      icon: Users,
      title: "PERSONAS",
      description:
        "Ponemos al cliente y a nuestro equipo en el centro: explicamos el trabajo, escuchamos la urgencia del vehículo y acordamos cada paso.",
      color: "#D79259",
    },
    {
      icon: Cpu,
      title: "PROCESO DIGITAL",
      description:
        "CRMSM documenta citas, avances y repuestos para que tengas trazabilidad sin perder el trato humano del taller.",
      color: "#5BBDD3",
    },
    {
      icon: Map,
      title: "TERRITORIO",
      description:
        "Servimos a San Miguel y zonas aledañas con logística pensada para quienes dependen del vehículo cada día.",
      color: "#BDBF65",
    },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Sobre
            <span className="block text-[#BDBF65]">{siteShortName}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border border-[#2C312D]/10 h-full hover:border-[#BDBF65]/30 transition-all duration-300">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-[#BDBF65] mb-4" />
                <h3 className="text-2xl font-bold text-[#2C312D] mb-4">Nuestra misión</h3>
                <p className="text-[#2C312D]/70 leading-relaxed">
                  Mantener vehículos seguros y eficientes con diagnóstico honesto, mano de obra calificada y
                  comunicación clara del inicio al fin del servicio.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white border border-[#2C312D]/10 h-full hover:border-[#BDBF65]/30 transition-all duration-300">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-[#BDBF65] mb-4" />
                <h3 className="text-2xl font-bold text-[#2C312D] mb-4">Nuestro enfoque</h3>
                <p className="text-[#2C312D]/70 leading-relaxed">
                  Priorizamos la prevención, sugerimos solo lo necesario y usamos {siteShortName} para que el
                  historial de tu auto quede ordenado y consultable.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-[#2C312D] mb-4">Nuestro ADN</h3>
          <p className="text-lg text-[#2C312D]/70 max-w-2xl mx-auto">
            Tres pilares que guían cómo atendemos en taller y cómo te acompañamos en digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {adnItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card
                  className="bg-white border-2 hover:shadow-lg transition-all duration-300 h-full"
                  style={{ borderColor: `${item.color}30` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <Icon className="h-10 w-10" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C312D] mb-4" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="text-[#2C312D]/70 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-[#2C312D]/60 italic max-w-3xl mx-auto border-t border-[#2C312D]/10 pt-8">
            &ldquo;Un vehículo bien cuidado es tranquilidad para quien maneja y para quienes viajan con
            él.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
