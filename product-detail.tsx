"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, ArrowLeft, Plus, Minus } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import type { Product } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const router = useRouter()

  const handleAddToCart = async () => {
    setIsLoading(true)
    console.log("[v0] Adding to cart:", product.name, "Quantity:", quantity)

    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const handleBuyNow = async () => {
    await handleAddToCart()
    router.push("/checkout")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
              {product.isSale && <Badge variant="destructive">Sale</Badge>}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive">Save ${product.originalPrice - product.price}</Badge>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={isLoading || !product.inStock}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {isLoading ? "Adding..." : "Add to Cart"}
              </Button>
              <Button
                onClick={handleBuyNow}
                disabled={isLoading || !product.inStock}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Buy Now
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {!product.inStock && <p className="text-destructive text-sm">This item is currently out of stock.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
