import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  console.log("[v0] Home component rendering")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}
