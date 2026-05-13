import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Camera, Quote, ArrowRight, MapPin, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { siteShortName } from "@/shared/site";

export default function ComunidadSection() {
  const testimonios = [
    {
      nombre: "Rosa Huamán",
      rol: "Taxista · San Miguel",
      frase: `${siteShortName} me avisó cuando tocaba cambio de aceite y frenos. En taller me explicaron con calma y sin sorpresas en la boleta.`,
      servicio: "Mantenimiento preventivo",
      color: "from-[#D79259]/20 to-[#D79259]/5",
      imagen: "/comunidad/maria.jpg",
    },
    {
      nombre: "Luis Calderón",
      rol: "Transporte de carga",
      frase: "Necesitaba salir de viaje y diagnosticaron una fuga a tiempo. El seguimiento por WhatsApp me ahorró idas al taller.",
      servicio: "Sistema de refrigeración",
      color: "from-[#D79259]/20 to-[#D79259]/5",
      imagen: "/comunidad/carlos.jpg",
    },
    {
      nombre: "María Egúsquiza",
      rol: "Familia · uso particular",
      frase: "Es la primera vez que entiendo qué le pasó a mi auto. Las fotos del hallazgo y el presupuesto desglosado dan mucha confianza.",
      servicio: "Suspensión y geometría",
      color: "from-[#D79259]/20 to-[#D79259]/5",
      imagen: "/comunidad/juana.jpg",
    },
  ];

  const actividadesRecientes = [
    {
      titulo: "Campaña de revisión pre viaje",
      fecha: "Última semana",
      participantes: "32 vehículos",
      lugar: "Taller principal",
      tipo: "Promoción",
    },
    {
      titulo: "Capacitación en híbridos",
      fecha: "Mes anterior",
      participantes: "Equipo técnico",
      lugar: "Sala de formación",
      tipo: "Talento",
    },
    {
      titulo: "Alianza con proveedor de filtros",
      fecha: "Trimestre",
      participantes: "Stock ampliado",
      lugar: "San Miguel",
      tipo: "Abastecimiento",
    },
  ];

  const promociones = [
    {
      titulo: "Check express de 20 puntos",
      fecha: "Vigente todo el mes",
      descripcion: "Ideal antes de viajes largos: fluidos, luces, frenos y neumáticos revisados en una hora.",
      vacantes: "Cupos limitados mañana",
    },
    {
      titulo: "Descuento en segunda unidad familiar",
      fecha: "Clientes con historial",
      descripcion: "Si ya atendimos tu vehículo, el segundo auto de la familia accede a precio preferencial en mantenimiento básico.",
      vacantes: "Consultar condiciones",
    },
  ];

  return (
    <section id="comunidad" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">👥</div>
        <div className="absolute bottom-20 right-10 text-8xl">💬</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D79259]/10 border border-[#D79259]/20 mb-6">
            <Users className="h-4 w-4 text-[#D79259]" />
            <span className="text-[#2C312D] text-sm font-medium">Clientes que nos recomiendan</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C312D] mb-6">
            Historias en
            <span className="block text-[#D79259]">ruta y trabajo</span>
          </h2>

          <p className="text-lg text-[#2C312D]/80 leading-relaxed">
            Lo que importa no es solo arreglar el auto, sino devolverlo a la calle con seguridad y con la tranquilidad de
            haber sido informado en cada paso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonios.map((persona, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white border border-[#2C312D]/10 hover:border-[#D79259]/30 transition-all duration-300 h-full group hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div
                      className={`w-full h-32 rounded-xl bg-gradient-to-br ${persona.color} flex items-end justify-start p-4`}
                    >
                      <Camera className="h-8 w-8 text-[#D79259]/50" />
                    </div>
                    <div className="absolute -bottom-6 left-4">
                      <div className="w-12 h-12 rounded-full bg-[#D79259] border-2 border-white flex items-center justify-center text-white font-bold">
                        {persona.nombre.charAt(0)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-bold text-lg text-[#2C312D]">{persona.nombre}</h3>
                    <p className="text-sm text-[#D79259] mb-2">{persona.rol}</p>
                    <p className="text-xs text-[#2C312D]/60 mb-3 flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {persona.servicio}
                    </p>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-1 h-4 w-4 text-[#D79259]/30 rotate-180" />
                      <p className="text-sm text-[#2C312D]/70 italic pl-4">&ldquo;{persona.frase}&rdquo;</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#2C312D] mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[#D79259]" />
              Novedades del taller
            </h3>
            <div className="space-y-4">
              {actividadesRecientes.map((actividad, idx) => (
                <Card key={idx} className="bg-white border border-[#2C312D]/10 hover:border-[#D79259]/30 transition-all">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-[#2C312D]">{actividad.titulo}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-[#D79259]/10 text-[#D79259]">
                        {actividad.tipo}
                      </span>
                    </div>
                    <p className="text-sm text-[#2C312D]/60 mb-2">{actividad.fecha}</p>
                    <div className="flex gap-4 text-xs text-[#2C312D]/50">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {actividad.participantes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {actividad.lugar}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#2C312D] mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-[#D79259]" />
              Promociones vigentes
            </h3>
            <div className="space-y-4">
              {promociones.map((promo, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-[#D79259]/5 to-transparent border-2 border-[#D79259]/30">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[#2C312D] mb-2">{promo.titulo}</h4>
                    <p className="text-sm text-[#2C312D]/70 mb-3">{promo.descripcion}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#D79259] font-medium">{promo.fecha}</span>
                      <span className="text-[#2C312D]/50 text-xs">{promo.vacantes}</span>
                    </div>
                    <Button
                      className="w-full mt-4 bg-[#D79259] text-[#2C312D] hover:bg-[#D79259]/90 font-medium"
                      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Quiero agendar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-[#D79259]/10 to-[#D79259]/5 border-2 border-[#D79259]/30">
            <CardContent className="p-8 md:p-12">
              <Users className="h-12 w-12 text-[#D79259] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#2C312D] mb-3">¿Primera vez con nosotros?</h3>
              <p className="text-[#2C312D]/70 max-w-2xl mx-auto mb-6">
                Agenda una revisión, trae tu historial si lo tienes y te explicamos el plan antes de tocar una tuerca.
                {siteShortName} queda como tu bitácora digital del vehículo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#D79259] text-[#2C312D] hover:bg-[#D79259]/90 font-bold shadow-lg group"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Hablar con recepción
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#D79259] bg-transparent text-[#2C312D] hover:bg-[#D79259]/10"
                  onClick={() => document.getElementById("lineas-accion")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver módulos del sistema
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
