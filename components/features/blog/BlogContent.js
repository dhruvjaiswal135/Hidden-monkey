/**
 * BlogContent Component
 * Renders blog post content (HTML or structured content)
 * 
 * Props:
 * - content: string (HTML) or array of paragraphs
 */

export default function BlogContent({ content }) {
  if (!content) return null

  // Handle array of paragraphs
  if (Array.isArray(content)) {
    return (
      <div className="space-y-6">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="text-base md:text-lg text-[#1E1F1C] leading-relaxed font-light"
          >
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  // Handle HTML content
  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-[#1E1F1C] prose-p:text-[#1E1F1C] prose-p:leading-relaxed"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
