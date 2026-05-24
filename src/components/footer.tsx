import { BraneBridgeLogo } from "@/components/logo";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-[#d1d5db] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <BraneBridgeLogo width={140} height={35} />
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 opacity-70" />
              <a
                href="mailto:contact@branebridge.com"
                className="hover:text-white transition-colors"
              >
                contact@branebridge.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 opacity-70" />
              <a
                href="tel:+16475981817"
                className="hover:text-white transition-colors"
              >
                +1 (647) 598-1817
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span>Toronto, ON, Canada</span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <p className="text-sm text-[#9ca3af]">
          BraneBridge is an independent organization. Not affiliated with Google
          Cloud.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-[#9ca3af]">
            &copy; 2026 BraneBridge. Toronto, ON, Canada.
          </p>
          <a
            href="https://www.linkedin.com/company/branebridge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-white transition-colors"
            aria-label="BraneBridge on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
