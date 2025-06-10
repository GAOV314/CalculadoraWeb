interface DisplayProps {
  value: string
}

export const Display = ({ value }: DisplayProps) => {
  return (
    <div className="display" data-testid="calculator-display">
      {value}
    </div>
  )
}