import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="py-10 md:py-12">
        <Container className="max-w-[1400px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Brand & Social */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-4">
                <span className="text-xl font-semibold tracking-tight">Hidden Monkey</span>
              </Link>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-5 max-w-[280px]">
                Where solo travelers become lifelong friends. Hostels across India built for those who wander.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                
                {/* Stay */}
                <div>
                  <h4 className="text-white text-[13px] font-medium mb-3">Stay</h4>
                  <ul className="space-y-2">
                    <li><Link href="/rooms" className="text-[13px] text-gray-400 hover:text-white transition-colors">All Rooms</Link></li>
                    <li><Link href="/rooms/dorms" className="text-[13px] text-gray-400 hover:text-white transition-colors">Dorms</Link></li>
                    <li><Link href="/rooms/private" className="text-[13px] text-gray-400 hover:text-white transition-colors">Private</Link></li>
                    <li><Link href="/offers" className="text-[13px] text-gray-400 hover:text-white transition-colors">Deals</Link></li>
                  </ul>
                </div>

                {/* Explore */}
                <div>
                  <h4 className="text-white text-[13px] font-medium mb-3">Explore</h4>
                  <ul className="space-y-2">
                    <li><Link href="/destinations/rishikesh" className="text-[13px] text-gray-400 hover:text-white transition-colors">Rishikesh</Link></li>
                    <li><Link href="/destinations/bir" className="text-[13px] text-gray-400 hover:text-white transition-colors">Bir</Link></li>
                    <li><Link href="/destinations/goa" className="text-[13px] text-gray-400 hover:text-white transition-colors">Goa</Link></li>
                    <li><Link href="/destinations/kasol" className="text-[13px] text-gray-400 hover:text-white transition-colors">Kasol</Link></li>
                    <li><Link href="/destinations" className="text-[13px] text-gray-400 hover:text-white transition-colors">All locations</Link></li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-white text-[13px] font-medium mb-3">Company</h4>
                  <ul className="space-y-2">
                    <li><Link href="/about" className="text-[13px] text-gray-400 hover:text-white transition-colors">About</Link></li>
                    <li><Link href="/blog" className="text-[13px] text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="/careers" className="text-[13px] text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="/contact" className="text-[13px] text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>

                {/* Help */}
                <div>
                  <h4 className="text-white text-[13px] font-medium mb-3">Help</h4>
                  <ul className="space-y-2">
                    <li><Link href="/faq" className="text-[13px] text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                    <li><Link href="/cancellation" className="text-[13px] text-gray-400 hover:text-white transition-colors">Cancellation</Link></li>
                    <li><Link href="/safety" className="text-[13px] text-gray-400 hover:text-white transition-colors">Safety</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="max-w-[1400px] py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-[12px]">© {currentYear} Hidden Monkey</p>
            <div className="flex items-center gap-5 text-[12px]">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-300 transition-colors">Cookies</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
