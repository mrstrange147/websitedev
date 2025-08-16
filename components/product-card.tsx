"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const router = useRouter()

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent navigation when clicking add to cart
    setIsLoading(true)
    console.log("[v0] Adding to cart:", product.name)

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const handleProductClick = () => {
    router.push(`/product/${product.id}`)
  }

  return (
    <Card
      className="group hover:shadow-lg transition-all duration-300 bg-card border-border cursor-pointer"
      onClick={handleProductClick}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
            {product.isSale && <Badge variant="destructive">Sale</Badge>}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isLoading ? "Adding..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
