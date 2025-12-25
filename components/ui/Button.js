/**
 * Button Component
 * Reusable button with multiple variants
 */

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href,
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  ...props 
}) {
  const baseStyles = 'btn'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...props}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
