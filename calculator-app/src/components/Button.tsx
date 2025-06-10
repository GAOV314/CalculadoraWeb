interface ButtonProps {
  onClick: () => void
  className?: string
  children: React.ReactNode
}

export const Button = ({ onClick, className = '', children }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}