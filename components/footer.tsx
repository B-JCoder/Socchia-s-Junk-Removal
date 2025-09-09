"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Link } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start space-y-4">
              {/* Logo & Name inline */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/socchias-logo.jpg"
                  alt="Falcon Auto Detail"
                  width={100}
                  height={100}
                  className="w-24 h-auto object-contain rounded-2xl"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">Socchia's Junk Removal</h3>
                  <p className="text-sm text-muted-white">WE HAUL MORE CRAP THAN YOUR EX</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-white max-w-md text-pretty">
                Professional junk removal service that comes to you. We handle everything from furniture to construction debris.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61579617700241"
                  className="text-muted-white hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-muted-white hover:text-primary">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-muted-white hover:text-primary">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-white hover:text-primary">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("work")} className="text-muted-white hover:text-primary">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-white hover:text-primary">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-white">(425) 239-0749</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-white">Ric98203@yahoo.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-muted-white">
                  <p>12426 West Firebird Drive</p>
                  <p>Sun City West, AZ 85375</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-white text-sm">© 2025 Socchia's Junk Removal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="text-muted-white text-sm">
              Powered by{" "}
              <a
                href="https://thelinkagedigital.com/websitelandingpage/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                The Linkage Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
