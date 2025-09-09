"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-[#76FB4C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/socchias-logo.jpg"
              alt="Socchia's Junk Removal"
              width={120}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {["home", "about", "services", "work", "testimonials"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-[#76FB4C] px-3 py-2 text-sm font-medium transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Buttons (Always Visible, but styled per device) */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex space-x-2">
              <button
                onClick={() => window.open("tel:+1(249) 356-5985", "_self")}
                className="bg-gradient-to-r from-[#76FB4C] to-[#499D2F] hover:from-[#499D2F] hover:to-[#76FB4C] text-white px-4 py-2 rounded-lg shadow font-bold flex items-center text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-[#76FB4C] text-[#76FB4C] hover:bg-[#76FB4C] hover:text-black px-4 py-2 h-auto rounded-lg transition-all bg-transparent font-bold text-sm"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#76FB4C] hover:text-white p-2">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-black border-t border-[#76FB4C]">
              {["home", "about", "services", "work", "testimonials"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-[#76FB4C] block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => window.open("tel:+1(249) 356-5985", "_self")}
                className="bg-gradient-to-r from-[#76FB4C] to-[#499D2F] hover:from-[#499D2F] hover:to-[#76FB4C] text-white w-full mt-2 px-4 py-2 rounded-md font-bold flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-[#76FB4C] text-[#76FB4C] hover:bg-[#76FB4C] hover:text-black w-full mt-2 bg-transparent font-bold"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
