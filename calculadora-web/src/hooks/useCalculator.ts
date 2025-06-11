import { useState, useCallback } from 'react'

export type Operation = '+' | '-' | '*' | '/' | '%' | null

export interface CalculatorState {
  display: string
  previousValue: number | null
  operation: Operation
  waitingForNext: boolean
  hasError: boolean
  operationDisplay: string
}

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForNext: false,
    hasError: false,
    operationDisplay: '',
  })

  const formatDisplay = useCallback((value: number): string => {
    if (value < 0) return 'ERROR'
    if (value > MAX_VALUE) return 'ERROR'
    
    const str = value.toString()
    if (str.length > MAX_DIGITS) {
      if (str.includes('.')) {
        const [integer] = str.split('.')
        if (integer.length > MAX_DIGITS) return 'ERROR'
        
        const availableDecimals = MAX_DIGITS - integer.length - 1
        if (availableDecimals <= 0) return 'ERROR'
        
        return parseFloat(value.toFixed(availableDecimals)).toString()
      }
      return 'ERROR'
    }
    return str
  }, [])

  const getOperationSymbol = useCallback((op: Operation): string => {
    switch (op) {
      case '+': return '+'
      case '-': return '−'
      case '*': return '×'
      case '/': return '÷'
      case '%': return '%'
      default: return ''
    }
  }, [])

  const calculate = useCallback((prev: number, current: number, op: Operation): number => {
    switch (op) {
      case '+': return prev + current
      case '-': return prev - current
      case '*': return prev * current
      case '/': return current === 0 ? NaN : prev / current
      case '%': return current === 0 ? NaN : prev % current
      default: return current
    }
  }, [])

  const handleNumber = useCallback((digit: string) => {
    setState(prev => {
      if (prev.hasError) {
        return { 
          ...prev, 
          display: digit, 
          hasError: false, 
          operationDisplay: '' 
        }
      }
      
      if (prev.waitingForNext) {
        // Cuando empezamos a escribir el segundo número, construimos la operación completa
        const newDisplay = digit
        const newOperationDisplay = prev.previousValue !== null && prev.operation 
          ? `${prev.previousValue} ${getOperationSymbol(prev.operation)} ${newDisplay}`
          : ''
        
        return { 
          ...prev, 
          display: newDisplay, 
          waitingForNext: false,
          operationDisplay: newOperationDisplay
        }
      }
      
      if (prev.display === '0') {
        const newDisplay = digit
        // Si ya hay una operación pendiente, actualizamos la operación completa
        const newOperationDisplay = prev.previousValue !== null && prev.operation 
          ? `${prev.previousValue} ${getOperationSymbol(prev.operation)} ${newDisplay}`
          : prev.operationDisplay
        
        return { 
          ...prev, 
          display: newDisplay,
          operationDisplay: newOperationDisplay
        }
      }
      
      if (prev.display.length >= MAX_DIGITS) return prev
      
      const newDisplay = prev.display + digit
      // Si hay una operación pendiente, actualizamos con el número completo
      const newOperationDisplay = prev.previousValue !== null && prev.operation 
        ? `${prev.previousValue} ${getOperationSymbol(prev.operation)} ${newDisplay}`
        : prev.operationDisplay
      
      return { 
        ...prev, 
        display: newDisplay,
        operationDisplay: newOperationDisplay
      }
    })
  }, [getOperationSymbol])

  const handleDecimal = useCallback(() => {
    setState(prev => {
      if (prev.hasError) {
        return { 
          ...prev, 
          display: '0.', 
          hasError: false, 
          operationDisplay: '' 
        }
      }
      
      if (prev.waitingForNext) {
        const newDisplay = '0.'
        const newOperationDisplay = prev.previousValue !== null && prev.operation 
          ? `${prev.previousValue} ${getOperationSymbol(prev.operation)} ${newDisplay}`
          : ''
        
        return { 
          ...prev, 
          display: newDisplay, 
          waitingForNext: false,
          operationDisplay: newOperationDisplay
        }
      }
      
      if (prev.display.includes('.')) return prev
      if (prev.display.length >= MAX_DIGITS) return prev
      
      const newDisplay = prev.display + '.'
      const newOperationDisplay = prev.previousValue !== null && prev.operation 
        ? `${prev.previousValue} ${getOperationSymbol(prev.operation)} ${newDisplay}`
        : prev.operationDisplay
      
      return { 
        ...prev, 
        display: newDisplay,
        operationDisplay: newOperationDisplay
      }
    })
  }, [getOperationSymbol])

  const handleOperation = useCallback((operation: Operation) => {
    setState(prev => {
      if (prev.hasError) return prev
      const currentValue = parseFloat(prev.display)
      
      if (prev.previousValue !== null && prev.operation && !prev.waitingForNext) {
        // Calculamos el resultado intermedio y empezamos una nueva operación
        const result = calculate(prev.previousValue, currentValue, prev.operation)
        if (isNaN(result)) {
          return { 
            ...prev, 
            display: 'ERROR', 
            hasError: true, 
            operation, 
            waitingForNext: true,
            operationDisplay: `ERROR ${getOperationSymbol(operation)}`
          }
        }
        const formattedResult = formatDisplay(result)
        return { 
          ...prev, 
          display: formattedResult, 
          previousValue: formattedResult === 'ERROR' ? null : result, 
          operation, 
          waitingForNext: true, 
          hasError: formattedResult === 'ERROR',
          operationDisplay: `${formattedResult} ${getOperationSymbol(operation)}`
        }
      }
      
      // Primera operación o cambio de operador
      return {
        ...prev,
        previousValue: currentValue,
        operation,
        waitingForNext: true,
        operationDisplay: `${prev.display} ${getOperationSymbol(operation)}`
      }
    })
  }, [calculate, formatDisplay, getOperationSymbol])

  const handleEquals = useCallback(() => {
    setState(prev => {
      if (prev.hasError || prev.previousValue === null || !prev.operation) return prev
      
      const currentValue = parseFloat(prev.display)
      const result = calculate(prev.previousValue, currentValue, prev.operation)
      
      if (isNaN(result)) {
        return { 
          ...prev, 
          display: 'ERROR', 
          hasError: true, 
          previousValue: null, 
          operation: null,
          operationDisplay: ''
        }
      }
      
      const formattedResult = formatDisplay(result)
      return { 
        ...prev, 
        display: formattedResult, 
        previousValue: null, 
        operation: null, 
        waitingForNext: true, 
        hasError: formattedResult === 'ERROR',
        operationDisplay: '' // Limpiar después de calcular
      }
    })
  }, [calculate, formatDisplay])

  const handleClear = useCallback(() => {
    setState({ 
      display: '0', 
      previousValue: null, 
      operation: null, 
      waitingForNext: false, 
      hasError: false,
      operationDisplay: ''
    })
  }, [])

  const handleToggleSign = useCallback(() => {
    setState(prev => {
      if (prev.hasError || prev.display === '0') return prev
      const currentValue = parseFloat(prev.display)
      const newValue = -currentValue
      const formattedResult = formatDisplay(Math.abs(newValue))
      if (formattedResult === 'ERROR') return prev
      const finalDisplay = newValue < 0 ? `-${formattedResult}` : formattedResult
      if (finalDisplay.length > MAX_DIGITS) return prev
      
      // Si hay una operación pendiente, actualizamos la operación completa con el nuevo número
      const newOperationDisplay = prev.previousValue !== null && prev.operation 
        ? `${prev.previousValue} ${getOperationSymbol(prev.operation)} ${finalDisplay}`
        : prev.operationDisplay
      
      return { 
        ...prev, 
        display: finalDisplay,
        operationDisplay: newOperationDisplay
      }
    })
  }, [formatDisplay, getOperationSymbol])

  return { state, handleNumber, handleDecimal, handleOperation, handleEquals, handleClear, handleToggleSign }
}