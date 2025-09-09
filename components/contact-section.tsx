"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const offer = params.get("offer")
    if (offer) {
      setFormData((prev) => ({ ...prev, service: offer }))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you! We'll get back to you as soon as possible.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Junk Removal Quote
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact Socchia's Junk Removal today for a fast, free quote and experience clutter-free living made easy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-[#76FB4C]">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/Ric98203@yahoo.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
              >
                {/* Hidden fields */}
                <input type="hidden" name="_subject" value="New Junk Removal Quote Request 🚚" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thanks for contacting Socchia’s Junk Removal. We’ll be in touch shortly." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="Full Name"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#76FB4C]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="Phone Number"
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#76FB4C]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#76FB4C]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Type of Service
                  </label>
                  <select
                    id="service"
                    name="Service"
                    className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#76FB4C]"
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Junk Removal">Residential Junk Removal</option>
                    <option value="Commercial Cleanouts">Commercial Cleanouts</option>
                    <option value="Construction Debris Removal">Construction Debris Removal</option>
                    <option value="Furniture & Appliance Removal">Furniture & Appliance Removal</option>
                    <option value="Yard Waste Cleanup">Yard Waste Cleanup</option>
                    <option value="Custom Quote">Custom Quote</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#76FB4C]"
                    placeholder="Tell us about what you need removed or cleaned up..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #76FB4C 0%, #499D2F 100%)",
                    boxShadow: "0 4px 15px rgba(118, 251, 76, 0.3)",
                  }}
                >
                  Get Free Quote
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-8">
            <Card className="bg-gray-900 border-[#76FB4C]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#76FB4C] mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-gray-300">(425) 239-0749</p>
                    <p className="text-sm text-gray-400">Fast response, 7 days a week</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-[#76FB4C]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#76FB4C] mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-gray-300">Ric98203@yahoo.com</p>
                    <p className="text-sm text-gray-400">We reply within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

                    <Card className="bg-gray-900 border-[#76FB4C]">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <MapPin className="h-6 w-6 text-[#76FB4C] mt-1" />
                          <div>
                            <h3 className="font-semibold text-white mb-1">Location</h3>
                            <p className="text-gray-300">12426 West Firebird Drive</p>
                            <p className="text-gray-300">Sun City West, AZ 85375</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section> 
  )
}