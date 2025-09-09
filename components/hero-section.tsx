"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = (offer?: string) => {
    if (offer) {
      const url = new URL(window.location.href)
      url.searchParams.set("offer", offer)
      window.history.replaceState({}, "", url)
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-0">
        <Image
          src="/socchias-logo.jpg"
          alt="Socchia's Junk Removal"
          width={300}
          height={200}
          className="h-48 w-auto mx-auto mb-6"
        />

        <h2 className="text-base md:text-xl lg:text-2xl font-semibold mb-4 text-[#76FB4C] drop-shadow-lg">
          WE HAUL MORE CRAP THAN YOUR EX
        </h2>

        <div
          onClick={() => scrollToContact("Free Estimates for All USA Customers")}
          className="cursor-pointer inline-block mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#76FB4C] to-[#499D2F] text-white text-sm md:text-base font-semibold shadow-lg hover:scale-105 transition-transform animate-pulse"
        >
          🚛 Nationwide Service – Free Estimates for All USA Customers!
        </div>

        <p className="text-sm md:text-lg lg:text-xl text-white mb-6 max-w-2xl mx-auto leading-relaxed">
          Professional junk removal service that comes to you. We handle everything from furniture to construction
          debris.
        </p>

        <Button
          onClick={() => scrollToContact()}
          size="sm"
          className="bg-gradient-to-r from-[#76FB4C] to-[#499D2F] hover:opacity-90 text-white text-sm md:text-base px-6 py-3 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all"
          style={{
            boxShadow: "0 4px 15px rgba(118, 251, 76, 0.3)",
          }}
        >
          Get Free Quote Today
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
