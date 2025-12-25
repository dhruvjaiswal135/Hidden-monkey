/**
 * Card Component
 * Reusable card container
 */

export default function Card({ children, className = '', hover = true, ...props }) {
  const hoverClass = hover ? 'hover:shadow-xl' : ''
  
  return (
    <div 
      className={`card ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}
