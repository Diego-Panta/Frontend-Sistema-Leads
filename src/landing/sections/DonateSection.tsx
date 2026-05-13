import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { siteShortName } from "@/shared/site";

export default function DonateSection() {
  return (
    <section id="donate" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F7F3]">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <Card className="bg-white border-2 border-[#BDBF65]/30 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BDBF65]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D79259]/20 rounded-full blur-3xl" />

          <CardContent className="p-8 md:p-12 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C312D] mb-4">Abona tu servicio con Yape</h2>
              <p className="text-[#2C312D]/80 max-w-2xl mx-auto">
                Escanea el QR o Yapea al número indicado. En el mensaje indica placa o número de orden para
                conciliar en {siteShortName}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-xl text-[#2C312D]">También en taller</h3>
                <p className="text-sm text-[#2C312D]/70 mb-4">
                  Aceptamos efectivo, transferencia y tarjetas según disponibilidad en recepción. Guarda tu
                  comprobante digital en tu historial.
                </p>
                <div className="rounded-xl border border-[#2C312D]/10 bg-[#F8F7F3] p-4 text-sm text-[#2C312D]/80">
                  <Wallet className="inline h-4 w-4 mr-2 text-[#BDBF65]" />
                  Si tu presupuesto fue aprobado en línea, puedes abonar el anticipo con el mismo QR.
                </div>
              </div>

              <div className="bg-[#F8F7F3] rounded-2xl p-6 border-2 border-[#BDBF65]">
                <div className="flex items-center gap-2 mb-4">
                  <Wallet className="h-5 w-5 text-[#BDBF65]" />
                  <h3 className="font-bold text-lg text-[#2C312D]">Pago con Yape</h3>
                </div>
                <p className="text-sm text-[#2C312D]/80 mb-4">
                  Escanea el código QR con tu app Yape para registrar el abono al instante.
                </p>

                <div className="aspect-square max-w-[280px] mx-auto rounded-xl bg-[#F8F7F3] border-2 border-[#BDBF65] flex items-center justify-center overflow-hidden">
                  <img src="/yape.jpeg" alt="QR de Yape para abonos" className="w-full h-full object-cover" />
                </div>

                <div className="text-center mt-4">
                  <p className="text-[#2C312D]/70 text-sm font-medium">
                    Yapea al: <span className="text-[#BDBF65] font-bold">900 749 214</span>
                  </p>
                  <p className="text-[#2C312D]/60 text-xs mt-1">
                    En el detalle del Yape escribe: placa + &ldquo;{siteShortName}&rdquo; para identificar tu pago.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
