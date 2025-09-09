"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const workExamples = [
    { image: "/images/e1 (1).jpg" },
    { image: "/images/e1 (2).jpg" },
    { image: "/images/e1 (3).jpg" },
    { image: "/images/e1 (4).jpg" },
    { image: "/images/e1 (5).jpg" },
    { image: "/images/e1 (6).jpg" },
    { image: "/images/e1 (7).jpg" },
    { image: "/images/e1 (8).jpg" },
    { image: "/images/e1 (9).jpg" },
    { image: "/images/e1 (10).jpg" },
    { image: "/images/e1 (11).jpg" },
    { image: "/images/e1 (12).jpg" },
    { image: "/images/e1 (13).jpg" },
    { image: "/images/e1 (14).jpg" },
    { image: "/images/e1 (15).jpg" },
    { image: "/images/e1 (16).jpg" },
    { image: "/images/e1 (17).jpg" },
    { image: "/images/e1 (18).jpg" },
    { image: "/images/e1 (19).jpg" },
    { image: "/images/e1 (20).jpg" },
    { image: "/images/e1 (21).jpg" },
    { image: "/images/e1 (22).jpg" },
    { image: "/images/e1 (23).jpg" },
    { image: "/images/e1 (24).jpg" },
    { image: "/images/e1 (25).jpg" },
    { image: "/images/e1 (26).jpg" },
    { image: "/images/e1 (27).jpg" },
    { image: "/images/e1 (28).jpg" },
    { image: "/images/e1 (29).jpg" },
    { image: "/images/e1 (30).jpg" },
    { image: "/images/e1 (31).jpg" },
    { image: "/images/e1 (32).jpg" },
    { image: "/images/e1 (33).jpg" },
    { image: "/images/e1 (34).jpg" },
    { image: "/images/e1 (35).jpg" },
    { image: "/images/e1 (36).jpg" },
  ]

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workExamples.length)
    }, 3000) // Change slide every 3 seconds
    return () => clearInterval(interval)
  }, [workExamples.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % workExamples.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + workExamples.length) % workExamples.length)
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="work" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-card-foreground mb-6">Our Work Speaks for Itself</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
  From small apartments to large estates, Socchia's Junk Removal clears out your space quickly and responsibly.
</p>

        </div>

        {/* Full-Width Image Showcase */}
        <div className="relative w-full max-w-6xl mx-auto mb-12">
          <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={workExamples[currentIndex].image}
              alt={`Work Example ${currentIndex + 1}`}
              fill
              priority
              quality={100}
              className="object-cover object-center rounded-3xl transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-4 rounded-full shadow-xl transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-4 rounded-full shadow-xl transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mb-10">
          {workExamples.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
         <div className="text-center">
  <Button
    onClick={scrollToContact}
    size="lg"
    className="bg-gradient-to-r from-[#76FB4C] to-[#499D2F] hover:from-[#499D2F] hover:to-[#76FB4C] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold"
  >
    Book Now
  </Button>
</div>
      </div>
    </section>
  )
}
