"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    id: 1,
    title: "Premium Collection",
    subtitle: "Discover Luxury Redefined",
    description: "Explore our curated selection of premium products designed for the discerning customer.",
    image: "/luxury-premium-collection-dark.png",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh Styles, Timeless Quality",
    description: "Be the first to experience our latest collection of exceptional products.",
    image: "/new-arrivals-modern-products-dark-theme.png",
    cta: "Explore",
  },
  {
    id: 3,
    title: "Exclusive Deals",
    subtitle: "Limited Time Offers",
    description: "Don't miss out on our exclusive deals and special promotions.",
    image: "/exclusive-deals-banner-dark.png",
    cta: "Save Now",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 font-[var(--font-playfair)]">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-2 text-accent">{slide.subtitle}</p>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{slide.description}</p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-accent" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
