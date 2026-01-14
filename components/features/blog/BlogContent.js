'use client'

/**
 * BlogContent Component
 * 
 * Design: Reading a travel diary in a quiet hostel corner
 * - Visual rhythm with breathing space and section blocks
 * - Strong typography hierarchy with accent markers
 * - Readable width, comfortable line height
 * - Subtle visual separators between sections
 * - Pull-quotes and highlighted content
 * 
 * Content length must NOT affect layout.
 * NO gradients, accent color (#EEA727) used sparingly.
 */
export default function BlogContent({ content }) {
  return (
    <div className="blog-content">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <style jsx>{`
        .blog-content {
          max-width: 42rem;
          margin: 0 auto;
          line-height: 1.85;
          color: #2B2622;
          font-size: 1.0625rem;
        }

        /* Breathing space and visual rhythm */
        .blog-content p {
          margin-bottom: 1.75rem;
          color: rgba(43, 38, 34, 0.85);
        }

        /* Add alternating visual rhythm to content blocks */
        .blog-content p:nth-of-type(3n+1) {
          margin-bottom: 2.25rem;
        }

        /* Section heading hierarchy with accent marker */
        .blog-content h2 {
          font-size: 1.625rem;
          font-weight: 600;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          color: #2B2622;
          letter-spacing: -0.01em;
          position: relative;
          padding-bottom: 0.75rem;
        }

        /* Accent underline for h2 */
        .blog-content h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 3rem;
          height: 2px;
          background-color: #EEA727;
        }

        /* Sub-section headings */
        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2.25rem;
          margin-bottom: 0.875rem;
          color: #2B2622;
          letter-spacing: -0.005em;
        }

        /* Visual breathing point before h3 - subtle dot separator */
        .blog-content h3::before {
          content: '•';
          color: #EEA727;
          margin-right: 0.5rem;
          opacity: 0.6;
        }

        /* Lists with better spacing */
        .blog-content ul,
        .blog-content ol {
          margin: 1.75rem 0;
          padding-left: 1.75rem;
        }

        .blog-content ul {
          list-style-type: disc;
        }

        .blog-content ul li,
        .blog-content ol li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
          color: rgba(43, 38, 34, 0.85);
        }

        .blog-content ul li::marker {
          color: #EEA727;
        }

        .blog-content ol li::marker {
          color: rgba(43, 38, 34, 0.5);
        }

        /* Text emphasis */
        .blog-content strong {
          font-weight: 700;
          color: #2B2622;
        }

        .blog-content em {
          font-style: italic;
          color: rgba(43, 38, 34, 0.7);
        }

        /* Pull-quote styling - visual break */
        .blog-content blockquote {
          border-left: 4px solid #EEA727;
          padding: 1.5rem;
          padding-left: 1.75rem;
          margin: 2.5rem 0;
          background-color: rgba(238, 167, 39, 0.03);
          border-radius: 0.5rem;
          color: rgba(43, 38, 34, 0.8);
          font-style: italic;
          line-height: 1.9;
        }

        .blog-content blockquote p {
          margin-bottom: 0.5rem;
          color: rgba(43, 38, 34, 0.8);
        }

        .blog-content blockquote p:last-child {
          margin-bottom: 0;
        }

        /* Code styling */
        .blog-content code {
          background-color: rgba(43, 38, 34, 0.08);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.9em;
          color: #2B2622;
        }

        .blog-content pre {
          background-color: #2B2622;
          color: #F4EFEA;
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 2rem 0;
          line-height: 1.6;
        }

        .blog-content pre code {
          background-color: transparent;
          color: #F4EFEA;
          padding: 0;
          font-size: 0.9em;
        }

        /* Link styling with accent underline */
        .blog-content a {
          color: #2B2622;
          text-decoration: none;
          border-bottom: 2px solid #EEA727;
          transition: all 0.2s ease;
        }

        .blog-content a:hover {
          background-color: rgba(238, 167, 39, 0.1);
          border-bottom-color: #2B2622;
        }

        /* Images with subtle visual separation */
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 2.5rem 0;
          display: block;
        }

        /* Section dividers with visual rhythm */
        .blog-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(to right, 
            transparent 0%, 
            rgba(238, 167, 39, 0.3) 25%, 
            rgba(238, 167, 39, 0.3) 75%, 
            transparent 100%);
          margin: 3rem 0;
        }

        /* Table styling */
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .blog-content table th {
          background-color: rgba(238, 167, 39, 0.1);
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #2B2622;
          border-bottom: 2px solid rgba(238, 167, 39, 0.3);
        }

        .blog-content table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(43, 38, 34, 0.05);
          color: rgba(43, 38, 34, 0.85);
        }

        .blog-content table tr:last-child td {
          border-bottom: none;
        }

        /* Inline figures and captions */
        .blog-content figure {
          margin: 2.5rem 0;
          padding: 0;
        }

        .blog-content figure img {
          margin: 0;
        }

        .blog-content figcaption {
          text-align: center;
          font-size: 0.875rem;
          color: rgba(43, 38, 34, 0.55);
          margin-top: 0.75rem;
          font-style: italic;
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .blog-content {
            font-size: 1rem;
            max-width: 100%;
            padding: 0 1rem;
          }

          .blog-content h2 {
            font-size: 1.375rem;
            margin-top: 2.5rem;
          }

          .blog-content h3 {
            font-size: 1.125rem;
            margin-top: 1.75rem;
          }

          .blog-content blockquote {
            padding: 1.25rem;
            padding-left: 1.5rem;
            margin: 2rem 0;
          }

          .blog-content pre {
            padding: 1rem;
            font-size: 0.875rem;
          }

          .blog-content table {
            font-size: 0.9rem;
          }

          .blog-content table th,
          .blog-content table td {
            padding: 0.75rem 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
