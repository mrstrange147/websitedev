import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary font-[var(--font-playfair)]">Luxe Store</h3>
            <p className="text-muted-foreground">
              Your destination for premium products and exceptional quality. We curate the finest selection for
              discerning customers.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Shop", "Categories", "New Arrivals", "Sale", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Customer Service</h4>
            <ul className="space-y-2">
              {["Help Center", "Returns", "Shipping Info", "Size Guide", "Track Order", "Privacy Policy"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Stay Connected</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@luxestore.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Luxury Ave, Premium City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Luxe Store. All rights reserved. | Designed with excellence in mind.</p>
        </div>
      </div>
    </footer>
  )
}
