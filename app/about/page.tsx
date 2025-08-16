import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8 font-[var(--font-playfair)]">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to Luxe Store, your premier destination for high-quality products and exceptional shopping
            experiences.
          </p>
          <p className="text-muted-foreground mb-6">
            Founded with a passion for excellence, we curate the finest selection of products across multiple
            categories, ensuring that every item meets our rigorous standards for quality and style.
          </p>
          <p className="text-muted-foreground">
            Our commitment to customer satisfaction drives everything we do, from our carefully selected inventory to
            our dedicated customer service team.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
