/**
 * Section Component
 * Page section wrapper with consistent spacing
 */

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  spacing = 'default',
  id,
}) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-50',
    dark: 'bg-neutral-900 text-white',
  }
  
  const spacings = {
    none: '',
    small: 'py-8 md:py-12',
    default: 'py-16 md:py-24',
    large: 'py-24 md:py-32 lg:py-40',
  }
  
  return (
    <section 
      id={id}
      className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}
    >
      {children}
    </section>
  )
}
