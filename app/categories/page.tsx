import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CategoriesPage() {
  const categories = [
    { name: "Electronics", count: 245 },
    { name: "Fashion", count: 189 },
    { name: "Home & Garden", count: 156 },
    { name: "Sports", count: 98 },
    { name: "Books", count: 234 },
    { name: "Beauty", count: 167 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8 font-[var(--font-playfair)]">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
              <p className="text-muted-foreground">{category.count} products</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
