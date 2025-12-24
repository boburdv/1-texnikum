import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <SiTelegram className="w-5 h-5" />, href: "#" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
    { icon: <GrYoutube className="w-5 h-5" />, href: "#" },
  ];

  return (
    <div className="border-t border-base-300 bg-base-200">
      <footer
        className="
      footer
      flex flex-row flex-wrap
      items-start
      gap-8
      text-base-content
      py-10 px-4
      max-w-6xl mx-auto
      justify-center sm:justify-between
    "
      >
        {/* Logo & Address */}
        <div className="flex flex-col items-center sm:items-start basis-full sm:basis-auto">
          <a href="/" className="text-3xl font-semibold text-gray-700">
            POLITEXNIKUM
          </a>

          <a href="https://maps.app.goo.gl/rgwaKGch5jPKVe286" className="hover:text-primary flex gap-1 mt-8 max-w-72 justify-center sm:justify-start">
            <FaLocationDot className="mt-1" />
            Farg'ona vil, Rishton tumani, Farg'ona yo'li ko'chasi 1-son
          </a>
        </div>

        <div className="flex items-center gap-14">
          {/* Navigation */}
          <nav className="flex flex-col gap-1 basis-1/2 sm:basis-auto">
            <h6 className="text-gray-500 font-semibold mb-2 text-base">Bo'limlar</h6>
            <a href="/" className="hover:text-primary">
              Bosh sahifa
            </a>
            <a href="/admin" className="hover:text-primary">
              Admin panel
            </a>
            <a href="/about" className="hover:text-primary">
              Haqida
            </a>
          </nav>

          {/* Contact */}
          <nav className="flex flex-col gap-1 basis-1/2 sm:basis-auto">
            <h6 className="text-gray-500 font-semibold mb-2 text-base">Bog'lanish</h6>
            <a href="https://t.me/example" className="hover:text-primary">
              Telegram chat
            </a>
            <a href="tel:+998901234567" className="hover:text-primary">
              (90) 123 45 67
            </a>
            <a href="mailto:rishton@tech.uz" className="hover:text-primary">
              rishton@tech.uz
            </a>
          </nav>
        </div>

        {/* Social */}
        <nav className="flex flex-col items-center sm:items-start basis-full sm:basis-auto">
          <h6 className="text-gray-500 font-semibold mb-2 text-base">Ijtimoiy tarmoqlar</h6>
          <div className="grid grid-flow-col gap-2">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} className="p-2 rounded-lg bg-white hover:bg-primary hover:text-white transition">
                {s.icon}
              </a>
            ))}
          </div>
        </nav>
      </footer>

      <div className="border-t border-base-300 py-4 text-center text-sm text-base-content/70">© {year} Politexnikum</div>
    </div>
  );
}
