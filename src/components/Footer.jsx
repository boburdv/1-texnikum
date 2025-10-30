import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";

export default function Footer() {
  return (
    <div className=" border-t border-base-300">
      <footer className="footer sm:footer-horizontal text-base-content py-10 max-w-6xl mx-auto flex flex-wrap justify-between">
        <div>
          <a href="" className="text-3xl font-semibold text-gray-700">
            POLITEXNIKUM
          </a>
          <a href="https://maps.app.goo.gl/rgwaKGch5jPKVe286" className="hover:text-primary flex gap-1 mt-8 w-72">
            <FaLocationDot className="mt-1" />
            Farg'ona vil, Rishton tumani, Farg'ona yo'li ko'chasi 1-son Politexnikum
          </a>
        </div>

        <nav>
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

        <nav>
          <h6 className="text-gray-500 font-semibold mb-2 text-base">Bog'lanish</h6>
          <a href="https://t.me/example" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            Telegram chat
          </a>
          <a href="tel:+998901234567" className="hover:text-primary">
            (90) 123 4567
          </a>
          <a href="mailto:rishton@tech.uz" className="hover:text-primary">
            rishton@tech.uz
          </a>
        </nav>

        <nav>
          <h6 className="text-gray-500 font-semibold mb-2 text-base">Ijtimoiy tarmoqlar</h6>
          <div className="grid grid-flow-col gap-2">
            <a href="#" className="p-1 rounded-lg bg-white hover:bg-primary hover:text-white">
              <SiTelegram className="w-5 h-5" />
            </a>
            <a href="#" className="p-1 rounded-lg bg-white hover:bg-primary hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-1 rounded-lg bg-white hover:bg-primary hover:text-white">
              <GrYoutube className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </footer>

      <div className="border-t mt-10 border-base-300 py-4 text-center text-sm text-base-content/70">© {new Date().getFullYear()} Politexnikum</div>
    </div>
  );
}
