import { Display } from './Display'
import { NumberPad } from './NumberPad'
import { Operations } from './Operations'
import { useCalculator } from '../hooks/useCalculator'

export const Calculator = () => {
  const calc = useCalculator()

  return (
    <div className="calculator">
      <Display value={calc.display} />
      <div className="buttons">
        <Operations 
          onOperation={calc.performOperation}
          onClear={calc.clearAll}
          onToggleSign={calc.toggleSign}
          onEquals={calc.calculate}
        />
        <NumberPad onNumberClick={calc.inputNumber} onDecimalClick={calc.inputDecimal} />
      </div>
    </div>
  )
}