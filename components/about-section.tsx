"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Award, Clock, Users } from "lucide-react"

export function AboutSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance ">About Socchia's Junk Removal</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Socchia's Junk Removal is your trusted partner for fast, reliable junk removal services across the USA. We
            specialize in hauling away unwanted items, debris, and clutter from homes, offices, and construction sites.
            With our professional team and efficient service, we make decluttering easy and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center bg-gray-900 border-[#76FB4C]">
            <CardContent className="p-6">
              <Truck className="h-12 w-12 text-[#76FB4C] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fast Pickup</h3>
              <p className="text-gray-300 text-sm">
                Same-day and next-day pickup available for all your junk removal needs.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gray-900 border-[#76FB4C]">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-[#76FB4C] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Professional Service</h3>
              <p className="text-gray-300 text-sm">
                Experienced team that handles all types of junk removal safely and efficiently.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gray-900 border-[#76FB4C]">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-[#76FB4C] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Convenient & Fast</h3>
              <p className="text-gray-300 text-sm">
                Flexible scheduling and quick removal without the hassle of doing it yourself.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gray-900 border-[#76FB4C]">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-[#76FB4C] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Customer Focused</h3>
              <p className="text-gray-300 text-sm">
                Proudly serving customers across the USA with top-rated junk removal services.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #76FB4C 0%, #499D2F 100%)",
              boxShadow: "0 4px 15px rgba(118, 251, 76, 0.3)",
            }}
          >
            Get Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  )
}
