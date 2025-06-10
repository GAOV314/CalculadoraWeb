import { Button } from './Button'

interface NumberPadProps {
  onNumberClick: (num: string) => void
  onDecimalClick: () => void
}

export const NumberPad = ({ onNumberClick, onDecimalClick }: NumberPadProps) => {
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3']
  
  return (
    <>
      {numbers.map(num => (
        <Button key={num} onClick={() => onNumberClick(num)}>{num}</Button>
      ))}
      <Button className="zero" onClick={() => onNumberClick('0')}>0</Button>
      <Button onClick={onDecimalClick}>.</Button>
    </>
  )
}