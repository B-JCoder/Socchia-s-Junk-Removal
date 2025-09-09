"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Home, Building, Recycle, Zap, Star, Trash2, Package } from "lucide-react"

export function ServicesSection() {
  const scrollToContact = (serviceValue: string) => {
    const contactForm = document.getElementById("contact")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }

    const serviceSelect = document.getElementById("service") as HTMLSelectElement
    if (serviceSelect) {
      serviceSelect.value = serviceValue
      const event = new Event("change", { bubbles: true })
      serviceSelect.dispatchEvent(event)
    }
  }

  const services = [
    {
      icon: () => <Truck className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Free Pickup & Hauling (Nationwide)",
      description: "We come to you anywhere in the USA! Free estimates and same-day pickup for most items.",
      price: "Free Estimates",
      value: "pickup-hauling",
      isPremium: true,
    },
    {
      icon: () => <Home className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Residential Cleanouts",
      description: "Full house cleanouts, garage clearing, basement and attic junk removal.",
      price: "Starting at $150",
      value: "residential-cleanout",
    },
    {
      icon: () => <Building className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Commercial Junk Removal",
      description: "Office cleanouts, retail space clearing, and construction debris removal.",
      price: "Starting at $200",
      value: "commercial-removal",
    },
    {
      icon: () => <Package className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Furniture Removal",
      description: "Old couches, mattresses, appliances, and heavy furniture hauled away safely.",
      price: "Starting at $75",
      value: "furniture-removal",
    },
    {
      icon: () => <Recycle className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Eco-Friendly Disposal",
      description: "We recycle and donate whenever possible - keeping junk out of landfills.",
      price: "Included",
      value: "eco-disposal",
    },
    {
      icon: () => <Zap className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Same-Day Service",
      description: "Need it gone today? We offer same-day pickup for urgent removals.",
      price: "Available",
      value: "same-day",
    },
    {
      icon: () => <Star className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Complete Property Cleanout",
      description: "Full property clearing including yard waste, construction debris, and household items.",
      price: "Starting at $500",
      value: "complete-cleanout",
    },
    {
      icon: () => <Trash2 className="h-12 w-12 mx-auto mb-4 text-[#76FB4C]" />,
      title: "Appliance Removal (Add-on)",
      description: "Refrigerators, washers, dryers - we handle the heavy lifting.",
      price: "Starting at $50",
      value: "appliance-removal",
      isExtra: true,
    },
  ]

  const [specialService, ...normalServices] = services

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Junk Removal Services</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Serving the entire USA — Socchia's Junk Removal hauls away your unwanted items with professional service and
            eco-friendly disposal. WE HAUL MORE CRAP THAN YOUR EX!
          </p>
        </div>

        {/* Special Service Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-[#76FB4C] to-[#499D2F] text-black border-2 border-[#76FB4C] shadow-lg shadow-[#76FB4C]/20">
            <CardHeader className="text-center">
              <specialService.icon />
              <CardTitle className="text-2xl text-black font-bold">{specialService.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4 text-black font-medium">{specialService.description}</p>
              <p className="text-lg font-bold mb-4 text-black">{specialService.price}</p>
              <Button
                onClick={() => scrollToContact(specialService.value)}
                className="w-full bg-black text-[#76FB4C] hover:bg-gray-900 border border-[#76FB4C] font-bold"
              >
                Get Free Quote
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Normal Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {normalServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg hover:shadow-[#76FB4C]/20 transition-all duration-300 bg-gray-900 border border-[#76FB4C]/30"
            >
              <CardHeader className="text-center">
                <service.icon />
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4 text-gray-300">{service.description}</p>
                <p className="text-lg font-semibold mb-4 text-[#76FB4C]">{service.price}</p>
                <Button
                  onClick={() => scrollToContact(service.value)}
                  className="w-full bg-gradient-to-r from-[#76FB4C] to-[#499D2F] text-black hover:from-[#499D2F] hover:to-[#76FB4C] font-bold shadow-lg shadow-[#76FB4C]/20"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
