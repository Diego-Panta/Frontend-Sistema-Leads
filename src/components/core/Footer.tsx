import React from "react";
import {
  Heart,
  ExternalLink,
  Users,
  Map,
  BookOpen,
  Handshake,
  Mail,
  Phone,
  MapPin,
  FileText,
  TrendingUp,
  Award,
  Shield,
} from "lucide-react";
import { BrandMark } from "@/components/core/BrandMark";
import { contactEmail, socialLinks, whatsappUrl, workshopAddress, workshopPhoneDisplay, siteFullName, siteShortName } from "@/shared/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#2C312D]/10 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BrandMark />
            </div>
            <p className="text-[#2C312D]/70 text-sm leading-relaxed mb-3">
              <strong className="text-[#2C312D]">{siteShortName}</strong> es el canal digital de{" "}
              <strong className="text-[#2C312D]">{siteFullName}</strong>: agenda, seguimiento y atención con
              estándares de taller.
            </p>
            <div className="flex items-center gap-1 text-[#D79259] text-sm">
              <Heart className="h-3 w-3" />
              <span>Confianza y trabajo bien hecho</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[#2C312D]">Qué ofrecemos</h3>
            <ul className="space-y-2 text-[#2C312D]/70 text-sm">
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 text-[#D79259] shrink-0 mt-0.5" />
                <span>Atención cercana al cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 text-[#5BBDD3] shrink-0 mt-0.5" />
                <span>Informes claros de servicio</span>
              </li>
              <li className="flex items-start gap-2">
                <Handshake className="h-4 w-4 text-[#9E5BD3] shrink-0 mt-0.5" />
                <span>Repuestos y proveedores de confianza</span>
              </li>
              <li className="flex items-start gap-2">
                <Map className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <span>Seguimiento de tu vehículo</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[#2C312D]">Contacto</h3>
            <ul className="space-y-2 text-[#2C312D]/70 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <a href={`mailto:${contactEmail}`} className="hover:text-[#BDBF65] transition-colors break-all">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#BDBF65] transition-colors flex items-center gap-1"
                >
                  {workshopPhoneDisplay}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#BDBF65] shrink-0 mt-0.5" />
                <span>{workshopAddress}</span>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-xs uppercase text-[#2C312D]/60">Redes</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors text-sm"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[#2C312D]">Transparencia</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a href="/politica-donaciones" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#BDBF65]" />
                  Política de pagos
                </a>
              </li>
              <li>
                <a href="/fondos" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#BDBF65]" />
                  Informe de movimientos
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#BDBF65]" />
                  Indicadores del taller
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#BDBF65]" />
                  Calidad de servicio
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#2C312D]/20">
              <h4 className="font-semibold mb-2 text-xs uppercase text-[#2C312D]/60">Desarrollado por</h4>
              <div className="space-y-1">
                <div className="font-medium text-sm text-[#BDBF65]">José Diego Panta Piscoche</div>
                <div className="flex gap-3 text-xs">
                  <a
                    href="https://www.linkedin.com/in/diego-panta-piscoche/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-1"
                  >
                    LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2C312D]/70 hover:text-[#BDBF65] transition-colors flex items-center gap-1"
                  >
                    Portafolio
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2C312D]/10 pt-6 text-center">
          <p className="text-[#2C312D]/60 text-sm">
            © {new Date().getFullYear()} {siteShortName} — {siteFullName}
          </p>
          <p className="text-[#2C312D]/40 text-xs mt-2">Sistema web para citas y transparencia con el cliente</p>
        </div>
      </div>
    </footer>
  );
}
