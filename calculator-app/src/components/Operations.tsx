import { Button } from './Button'

interface OperationsProps {
  onOperation: (op: string) => void
  onClear: () => void
  onToggleSign: () => void
  onEquals: () => void
}

export const Operations = ({ onOperation, onClear, onToggleSign, onEquals }: OperationsProps) => {
  const ops = [
    { text: 'C', onClick: onClear, className: 'clear' },
    { text: '+/-', onClick: onToggleSign, className: 'operation' },
    { text: '%', onClick: () => onOperation('%'), className: 'operation' },
    { text: '÷', onClick: () => onOperation('/'), className: 'operation' },
    { text: '×', onClick: () => onOperation('*'), className: 'operation' },
    { text: '-', onClick: () => onOperation('-'), className: 'operation' },
    { text: '+', onClick: () => onOperation('+'), className: 'operation' },
    { text: '=', onClick: onEquals, className: 'equals' }
  ]
  
  return <>{ops.map((op, i) => <Button key={i} className={op.className} onClick={op.onClick}>{op.text}</Button>)}</>
}