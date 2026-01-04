import { FaGithub, FaHandHoldingHeart, FaInstagram } from "react-icons/fa6";
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted-foreground bg-black/70 mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-extralight text-muted-foreground" id="copyright">
            © {currentYear} UNIT30 Records. <i>All rights reserved.</i>
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="https://unicef.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <FaHandHoldingHeart style={{ width: 24, height: 24 }} />
            </Link>
            <Link
              href="https://instagram.com/unit30records"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <FaInstagram style={{ width: 24, height: 24 }} />
            </Link>
            <Link
              href="https://github.com/unit30records"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <FaGithub style={{ width: 24, height: 24 }} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
