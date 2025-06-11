import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-warm-orange mb-4">
              BraceCraft
            </div>
            <p className="text-gray-300 mb-4">
              Expert athletic injury prevention and recovery guidance backed by
              medical professionals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors duration-200 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/guides/plantar-fasciitis">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors duration-200 cursor-pointer">
                    Injury Guides
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/videos">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors duration-200 cursor-pointer">
                    Video Library
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors duration-200 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Guides */}
          <div>
            <h4 className="font-semibold mb-4">Popular Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/plantar-fasciitis">
                  <span className="text-gray-300 hover:text-warm-orange transition-colors duration-200 cursor-pointer">
                    Plantar Fasciitis
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                >
                  Runner's Knee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                >
                  Shoulder Pain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                >
                  Ankle Sprains
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-warm-orange transition-colors duration-200"
                >
                  IT Band Syndrome
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>support@bracecraft.com</p>
              <p>1-800-BRACE-IT</p>
              <p>Mon-Fri: 8AM-6PM PST</p>
              <Button className="bg-warm-orange text-white hover:bg-warm-orange/90 mt-2">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 BraceCraft. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-warm-orange text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-warm-orange text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-warm-orange text-sm transition-colors duration-200"
            >
              Medical Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
