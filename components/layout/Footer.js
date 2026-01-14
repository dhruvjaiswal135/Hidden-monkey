import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#FAFAF9] overflow-hidden">

      {/* Background Typography Watermark */}
      <div className="absolute inset-0 hidden md:block mt-16 items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] font-bold text-[#1E1F1C] opacity-[0.04] whitespace-nowrap leading-none">
          Hidden Monkey
        </div>
      </div>

      <div className="absolute inset-0 block md:hidden mt-36 pl-32 pointer-events-none overflow-hidden">
        <div className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] font-bold text-[#1E1F1C] opacity-[0.04] whitespace-nowrap leading-none">
          Hidden <br /> Monkey
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="relative pt-10 pb-32 md:py-12 lg:py-14">
        <Container className="max-w-[1400px]">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-10">

            {/* ZONE 1: Brand & Links (Mobile: Full, Tablet: 50%, Desktop: 4 cols) */}
            <div className="md:col-span-1 lg:col-span-4 flex flex-col justify-between">
              <div>
                <Link href="/" className="inline-block mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="relative w-32 h-20 flex-shrink-0">
                      <Image
                        src="/images/logo.png"
                        alt="Hidden Monkey Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                  </div>
                </Link>

                <p className="text-[#5E625A] text-[13px] leading-relaxed mb-6 max-w-[280px]">
                  A home for travellers, not tourists.
                </p>
              </div>

              <ul className="space-y-2">
                <li>
                  <Link href="/stays" className="text-[#5E625A] text-[12px] hover:text-[#EEA727] transition-colors">
                    Stays
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="text-[#5E625A] text-[12px] hover:text-[#EEA727] transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-[#5E625A] text-[12px] hover:text-[#EEA727] transition-colors">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#5E625A] text-[12px] hover:text-[#EEA727] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* ZONE 2: QR Feedback (Mobile: Full, Tablet: 50%, Desktop: 4 cols) */}
            <div className="md:col-span-1 lg:col-span-4 flex items-center md:items-end lg:items-center justify-start md:justify-center lg:justify-center">
              <div className="bg-white border border-[#E6E4DF] rounded-[18px] p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-auto flex md:flex-col items-center gap-4 md:gap-4">

                {/* QR */}
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] flex-shrink-0 md:flex-shrink bg-gradient-to-br from-[#1E1F1C] to-[#5E625A] rounded-lg flex items-center justify-center relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 110 110" fill="none">
                    <rect x="8" y="8" width="20" height="20" fill="white" opacity="0.3" />
                    <rect x="82" y="8" width="20" height="20" fill="white" opacity="0.3" />
                    <rect x="8" y="82" width="20" height="20" fill="white" opacity="0.3" />

                    <circle cx="30" cy="35" r="2.5" fill="white" opacity="0.4" />
                    <circle cx="50" cy="45" r="2" fill="white" opacity="0.5" />
                    <circle cx="70" cy="40" r="2" fill="white" opacity="0.4" />
                    <circle cx="35" cy="60" r="2.5" fill="white" opacity="0.5" />
                    <circle cx="65" cy="65" r="2" fill="white" opacity="0.4" />
                    <circle cx="45" cy="75" r="2" fill="white" opacity="0.5" />
                    <circle cx="55" cy="55" r="3" fill="white" opacity="0.6" />
                  </svg>

                  <div className="absolute inset-0 flex items-end justify-center pb-2">
                    <span className="text-white text-[8px] font-medium opacity-40">
                      scan
                    </span>
                  </div>
                </div>

                {/* QR Text */}
                <div className="md:text-center flex-1 md:flex-none">
                  <p className="text-[#1E1F1C] text-[12px] font-medium mb-1">
                    Tell us how it was
                  </p>
                  <p className="text-[#5E625A] text-[11px]">
                    Share your Monkey House moment
                  </p>
                </div>

              </div>
            </div>

            {/* ZONE 3: Illustration (Hidden mobile/tablet, Visible desktop, 4 cols) */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-center ">
              <svg
                className="w-[160px] lg:w-[180px] h-auto opacity-[0.1]"
                viewBox="0 0 200 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M60 80 L70 140 Q70 150 60 150 L50 150 Q40 150 40 140 L50 80 Z"
                      stroke="#1E1F1C" strokeWidth="2" fill="none" />

                <path d="M70 100 Q90 100 90 120"
                      stroke="#1E1F1C" strokeWidth="2" fill="none" strokeLinecap="round" />

                <ellipse cx="55" cy="155" rx="20" ry="8"
                         stroke="#1E1F1C" strokeWidth="2" fill="none" />

                <path d="M55 100 Q60 90 50 85"
                      stroke="#1E1F1C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M60 95 Q68 92 65 82"
                      stroke="#1E1F1C" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                <path d="M30 60 L45 35 L60 50 L75 20 L90 45 L105 30"
                      stroke="#1E1F1C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                <path d="M25 65 Q40 62 55 65"
                      stroke="#1E1F1C" strokeWidth="1" fill="none" opacity="0.6" />
                <path d="M35 72 Q50 70 65 72"
                      stroke="#1E1F1C" strokeWidth="1" fill="none" opacity="0.5" />

                <circle cx="45" cy="110" r="1.5" fill="#1E1F1C" opacity="0.6" />
                <circle cx="75" cy="105" r="1.5" fill="#1E1F1C" opacity="0.6" />
                <circle cx="50" cy="130" r="1" fill="#1E1F1C" opacity="0.5" />
              </svg>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#E6E4DF] relative -mt-8">
        <Container className="max-w-[1400px] py-3 md:py-4 ">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] md:text-[12px]">
            <p className="text-[#5E625A]">
              © {currentYear} Hidden Monkey
            </p>
            <div className="flex items-center gap-3 md:gap-4 ">
              <Link href="/privacy" className="text-[#5E625A] hover:text-[#EEA727] transition-colors">
                Privacy
              </Link>
              <span className="text-[#E6E4DF]">·</span>
              <Link href="/terms" className="text-[#5E625A] hover:text-[#EEA727] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  )
}
