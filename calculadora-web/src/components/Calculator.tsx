import { useCalculator } from '../hooks/useCalculator'
export const Calculator = () => {
  const { state, handleNumber, handleDecimal, handleOperation, handleEquals, handleClear, handleToggleSign } = useCalculator()
  return (
    <div className="calculator">
      <div className="display">
        <div className="operation-display">
          {state.operationDisplay}
        </div>
        <div className="main-display" data-testid="calculator-display">
          {state.display}
        </div>
      </div>  
      <div className="button-grid">
        <button className="btn btn-special" onClick={handleClear} data-testid="clear-button">AC</button>
        <button className="btn btn-special" onClick={handleToggleSign} data-testid="toggle-sign-button">±</button>
        <button className="btn btn-special" onClick={() => handleOperation('%')} data-testid="modulo-button">%</button>
        <button className="btn btn-operator" onClick={() => handleOperation('/')} data-testid="divide-button">÷</button>
        <button className="btn btn-number" onClick={() => handleNumber('7')} data-testid="number-7">7</button>
        <button className="btn btn-number" onClick={() => handleNumber('8')} data-testid="number-8">8</button>
        <button className="btn btn-number" onClick={() => handleNumber('9')} data-testid="number-9">9</button>
        <button className="btn btn-operator" onClick={() => handleOperation('*')} data-testid="multiply-button">×</button>
        <button className="btn btn-number" onClick={() => handleNumber('4')} data-testid="number-4">4</button>
        <button className="btn btn-number" onClick={() => handleNumber('5')} data-testid="number-5">5</button>
        <button className="btn btn-number" onClick={() => handleNumber('6')} data-testid="number-6">6</button>
        <button className="btn btn-operator" onClick={() => handleOperation('-')} data-testid="subtract-button">−</button>
        <button className="btn btn-number" onClick={() => handleNumber('1')} data-testid="number-1">1</button>
        <button className="btn btn-number" onClick={() => handleNumber('2')} data-testid="number-2">2</button>
        <button className="btn btn-number" onClick={() => handleNumber('3')} data-testid="number-3">3</button>
        <button className="btn btn-operator" onClick={() => handleOperation('+')} data-testid="add-button">+</button>
        <button className="btn btn-number btn-zero" onClick={() => handleNumber('0')} data-testid="number-0">0</button>
        <button className="btn btn-number" onClick={handleDecimal} data-testid="decimal-button">.</button>
        <button className="btn btn-equals" onClick={handleEquals} data-testid="equals-button">=</button>
      </div>
    </div>
  )
}