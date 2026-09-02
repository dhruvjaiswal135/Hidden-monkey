import { JsonLd, generateFAQSchema } from '@/lib/seo'
import { FAQS } from './faq.data'

export const metadata = {
  title: 'FAQ',
  description: 'Everything you need to know before staying at Hidden Monkey — booking, payments, dorm life, homestays, safety and more.',
  alternates: { canonical: 'https://hiddenmonkey.in/faq' },
}

export default function FAQLayout({ children }) {
  return (
    <>
      <JsonLd schema={generateFAQSchema(FAQS.flatMap((c) => c.items.map((i) => ({ question: i.q, answer: i.a }))))} />
      {children}
    </>
  )
}
