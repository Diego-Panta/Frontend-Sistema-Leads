import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/core/Footer";

import { siteFullName, siteShortName } from "@/shared/site";

export default function DonationPolicy() {
  const principios = [
    {
      icon: Shield,
      title: "Transparencia total",
      description:
        "Cada abono y compra de repuesto queda registrado. Publicamos resúmenes del uso de fondos del taller.",
    },
    {
      icon: Eye,
      title: "Rendición de cuentas",
      description:
        "Respondemos consultas sobre facturación y mano de obra en un plazo razonable, con respaldo documental.",
    },
    {
      icon: FileText,
      title: "Documentación completa",
      description:
        "Órdenes de trabajo, comprobantes de pago y garantías archivadas para clientes y auditoría interna.",
    },
  ];

  const procesos = [
    {
      title: "Recepción de pagos",
      items: [
        "Registro en caja o conciliación bancaria el mismo día",
        "Identificación con placa o número de orden en abonos digitales",
      ],
    },
    {
      title: "Uso de ingresos",
      items: [
        "Prioridad a repuestos homologados y herramientas del taller",
        "Reserva operativa para mantenimiento de equipos de diagnóstico",
      ],
    },
    {
      title: "Control interno",
      items: [
        "Revisión mensual por administración y jefe de taller",
        "Publicación de indicadores clave en el sitio web de CRMSM",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-red-900 to-amber-900 text-white">
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 text-9xl">💰</div>
          <div className="absolute bottom-20 left-20 text-9xl">📊</div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 mb-6">
              <Shield className="h-4 w-4 text-green-300" />
              <span className="text-green-200 text-sm font-medium">Compromiso con la Transparencia</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Política de
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-300">
                pagos y abonos
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              En {siteFullName} ({siteShortName}) la confianza se construye con precios claros, comprobantes y
              comunicación honesta sobre cada servicio en taller.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principios Fundamentales */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestros Principios Fundamentales
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Tres pilares que guían cada decisión sobre ingresos, compras y devoluciones al cliente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {principios.map((principio, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                      <principio.icon className="h-8 w-8 text-amber-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {principio.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {principio.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procesos y Distribución */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Procesos y uso de ingresos
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Así fluye el dinero desde que pagas un servicio hasta que se aplica en repuestos, mano de obra y operación del taller.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {procesos.map((proceso, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="bg-linear-to-br from-amber-500/10 to-red-500/10 border-amber-400/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-300" />
                      {proceso.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {proceso.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-300 mt-2 shrink-0" />
                          <span className="text-white/80 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisos */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-amber-500/20 to-red-500/20 rounded-3xl p-8 md:p-12 border border-amber-400/30"
          >
            <div className="text-center mb-8">
              <AlertTriangle className="h-12 w-12 text-amber-300 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Nuestros Compromisos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Publicar resumen de ingresos y egresos relevantes en la web de {siteShortName}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Responder consultas sobre facturación en un máximo de 48 horas hábiles
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Mantener costos indirectos acotados y justificados frente a ingresos de servicio
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Destinar la mayor parte del ingreso a repuestos, mano de obra calificada y equipamiento del taller
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Permitir revisión de libros ante requerimientos legales o de socios autorizados
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-300 shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Informar oportunamente cualquier eventualidad que retrase un servicio presupuestado
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-amber-400/30">
              <p className="text-amber-300 font-semibold">
                Última actualización: {new Date().toLocaleDateString('es-PE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}