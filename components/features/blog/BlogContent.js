'use client'

/**
 * BlogContent — Premium editorial prose styling
 * Uses `style jsx global` scoped to `.blog-content` so dangerouslySetInnerHTML children receive styles
 * Brand palette: Teal #128790, Gold #FBB11A, Charcoal #1E1F1C
 */
export default function BlogContent({ content }) {
  return (
    <div className="blog-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />

      <style jsx global>{`
        /* ── Container ── */
        .blog-content {
          max-width: 42rem;
          margin: 0 auto;
          font-size: 1.0625rem;
          line-height: 1.9;
          color: #3a3833;
        }

        /* ─────────────────── PARAGRAPHS ─────────────────── */
        .blog-content p {
          margin-bottom: 1.75rem;
          color: #4a4640;
          font-weight: 350;
          letter-spacing: 0.005em;
        }

        /* First paragraph — larger intro style */
        .blog-content > div > p:first-of-type {
          font-size: 1.15rem;
          line-height: 1.85;
          color: #3a3833;
          font-weight: 400;
        }

        /* Drop cap on first paragraph */
        .blog-content > div > p:first-of-type::first-letter {
          font-size: 3.2em;
          float: left;
          line-height: 0.8;
          margin-right: 0.1em;
          margin-top: 0.05em;
          font-weight: 700;
          color: #128790;
        }

        /* ─────────────────── HEADINGS ─────────────────── */
        .blog-content h2 {
          font-size: 1.55rem;
          font-weight: 800;
          margin-top: 3.5rem;
          margin-bottom: 1rem;
          color: #1E1F1C;
          letter-spacing: -0.02em;
          line-height: 1.25;
          position: relative;
          padding-left: 1rem;
        }

        /* Teal left accent bar on h2 */
        .blog-content h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.15em;
          width: 3px;
          height: 1.1em;
          background-color: #128790;
          border-radius: 2px;
        }

        .blog-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          color: #1E1F1C;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .blog-content h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          color: #1E1F1C;
        }

        /* ─────────────────── LISTS ─────────────────── */
        .blog-content ul,
        .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 0;
          list-style: none;
        }

        .blog-content ul li,
        .blog-content ol li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.875rem;
          line-height: 1.75;
          color: #4a4640;
          font-weight: 350;
        }

        /* Custom bullet — teal dot */
        .blog-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #128790;
        }

        /* Custom numbered list */
        .blog-content ol {
          counter-reset: list-counter;
        }

        .blog-content ol li {
          counter-increment: list-counter;
        }

        .blog-content ol li::before {
          content: counter(list-counter);
          position: absolute;
          left: 0;
          top: 0;
          width: 1.25rem;
          height: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          background: #128790;
          border-radius: 50%;
          line-height: 1;
        }

        /* ─────────────────── EMPHASIS ─────────────────── */
        .blog-content strong {
          font-weight: 700;
          color: #1E1F1C;
        }

        .blog-content em {
          font-style: italic;
          color: #5a5650;
        }

        /* ─────────────────── BLOCKQUOTE ─────────────────── */
        .blog-content blockquote {
          margin: 2.5rem 0;
          padding: 1.75rem 2rem;
          background: linear-gradient(135deg, rgba(18,135,144,0.04) 0%, rgba(251,177,26,0.03) 100%);
          border-left: 3px solid #128790;
          border-radius: 0 16px 16px 0;
          position: relative;
        }

        .blog-content blockquote::before {
          content: '"';
          position: absolute;
          top: -0.2rem;
          left: 0.75rem;
          font-size: 3.5rem;
          color: #128790;
          opacity: 0.15;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .blog-content blockquote p {
          margin-bottom: 0.5rem;
          color: #3a3833;
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.8;
          font-weight: 400;
        }

        .blog-content blockquote p:last-child {
          margin-bottom: 0;
        }

        /* ─────────────────── CODE ─────────────────── */
        .blog-content code {
          background-color: rgba(18, 135, 144, 0.07);
          padding: 0.15rem 0.4rem;
          border-radius: 5px;
          font-family: 'SF Mono', 'Monaco', 'Menlo', monospace;
          font-size: 0.85em;
          color: #128790;
          border: 1px solid rgba(18, 135, 144, 0.12);
        }

        .blog-content pre {
          background-color: #1E1F1C;
          color: #FBFBF9;
          padding: 1.5rem 1.75rem;
          border-radius: 16px;
          overflow-x: auto;
          margin: 2rem 0;
          line-height: 1.65;
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .blog-content pre code {
          background: none;
          color: #FBFBF9;
          padding: 0;
          border: none;
          font-size: 0.9em;
        }

        /* ─────────────────── LINKS ─────────────────── */
        .blog-content a {
          color: #128790;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1.5px solid rgba(18, 135, 144, 0.25);
          transition: all 0.2s ease;
        }

        .blog-content a:hover {
          border-bottom-color: #128790;
          background-color: rgba(18, 135, 144, 0.05);
          border-radius: 2px;
        }

        /* ─────────────────── IMAGES ─────────────────── */
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
          margin: 2.5rem 0;
          display: block;
          border: 1px solid #E6E4DF;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        /* ─────────────────── HR DIVIDER ─────────────────── */
        .blog-content hr {
          border: none;
          margin: 3rem auto;
          width: 4rem;
          height: 0;
          border-top: 3px dotted #E6E4DF;
        }

        /* ─────────────────── TABLES ─────────────────── */
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #E6E4DF;
          font-size: 0.95rem;
        }

        .blog-content table th {
          background-color: #FBFBF9;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #128790;
          border-bottom: 2px solid #E6E4DF;
        }

        .blog-content table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #E6E4DF;
          color: #4a4640;
        }

        .blog-content table tr:last-child td {
          border-bottom: none;
        }

        .blog-content table tr:hover td {
          background-color: rgba(18, 135, 144, 0.02);
        }

        /* ─────────────────── FIGURES ─────────────────── */
        .blog-content figure {
          margin: 2.5rem 0;
          padding: 0;
        }

        .blog-content figure img {
          margin: 0;
        }

        .blog-content figcaption {
          text-align: center;
          font-size: 0.8rem;
          color: #9A948C;
          margin-top: 0.75rem;
          font-style: italic;
        }

        /* ─────────────────── MOBILE ─────────────────── */
        @media (max-width: 640px) {
          .blog-content {
            font-size: 1rem;
            max-width: 100%;
          }

          .blog-content > div > p:first-of-type::first-letter {
            font-size: 2.8em;
          }

          .blog-content h2 {
            font-size: 1.35rem;
            margin-top: 2.75rem;
            padding-left: 0.875rem;
          }

          .blog-content h3 {
            font-size: 1.1rem;
            margin-top: 2rem;
          }

          .blog-content blockquote {
            padding: 1.25rem 1.5rem;
            margin: 2rem 0;
          }

          .blog-content pre {
            padding: 1rem 1.25rem;
            font-size: 0.85rem;
            border-radius: 12px;
          }

          .blog-content table th,
          .blog-content table td {
            padding: 0.625rem 0.5rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  )
}
