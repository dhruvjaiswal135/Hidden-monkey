'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { FAQList } from '@/components/sections/MiniFAQ'
import { FAQS } from './faq.data'

const CATEGORIES = ['All', ...FAQS.map((g) => g.category)]

export default function FAQPage() {
  const [category, setCategory] = useState('All')
  const groups = category === 'All' ? FAQS : FAQS.filter((g) => g.category === category)

  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="bg-white border-b border-line">
          <div className="container-site pt-9 md:pt-16 pb-7">
            <p className="kicker">Help center</p>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h1 className="display text-d-page">Frequently asked<br /><span className="text-teal">questions.</span></h1>
              <div className="flex flex-col gap-3 max-w-[440px]">
                <p className="text-[16px] leading-relaxed text-ink-3">Everything you need to know about staying with us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs + accordions */}
        <section className="py-10 md:py-14">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-wrap gap-1.5 mb-9">
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={category === c ? 'pill-on' : 'pill-off'}>{c}</button>
              ))}
            </div>

            <div className="flex flex-col gap-10">
              {groups.map((group) => (
                <div key={group.category}>
                  <h2 className="display font-bold text-[28px] leading-none mb-4">{group.category}</h2>
                  <FAQList items={group.items} size="text-[22px]" />
                </div>
              ))}
            </div>

            {/* Still have questions (dark accent) */}
            <div className="mt-14 rounded-hero bg-jungle text-white p-7 md:p-12">
              <p className="kicker text-gold">Talk to us</p>
              <h2 className="display text-[clamp(30px,4vw,48px)] leading-[.95] mb-2.5">Still have questions?</h2>
              <p className="text-[16px] leading-relaxed text-white/80 mb-6">We&apos;re happy to help anytime.</p>
              <Link href="/contact" className="btn-gold">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
