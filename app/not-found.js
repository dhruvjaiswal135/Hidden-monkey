import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center bg-[#FBFBF9]">
        <div className="text-center px-6 py-20">
          <div className="mb-6">
            <span className="text-6xl md:text-7xl block mb-2">🐒</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBB11A]/10 border border-[#FBB11A]/20 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBB11A] animate-pulse" />
            <span className="text-[9px] font-bold text-[#FBB11A] uppercase tracking-widest">Coming Soon</span>
          </div>

          <h1 className="text-[28px] md:text-[40px] font-bold text-[#1E1F1C] leading-[1.1] tracking-[-0.02em] mb-3">
            We&apos;re building<br />
            <span className="text-[#128790]">something fun.</span>
          </h1>

          <p className="text-[#6B665E] text-[14px] md:text-[15px] font-light max-w-md mx-auto mb-8 leading-relaxed">
            This page is still under construction. Our monkeys are working hard to get it ready. Check back soon!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-2.5 bg-[#128790] hover:bg-[#0e6e75] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/stays"
              className="px-6 py-2.5 bg-white border border-[#E6E4DF] hover:border-[#128790]/30 text-[#1E1F1C] text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors"
            >
              Book a Stay
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-[#E6E4DF]">
            <span className="w-8 h-[1px] bg-[#E6E4DF]" />
            <span className="text-[9px] font-bold text-[#9A948C] uppercase tracking-widest">Hidden Monkey</span>
            <span className="w-8 h-[1px] bg-[#E6E4DF]" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
