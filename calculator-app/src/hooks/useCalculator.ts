import { useState, useCallback } from 'react'

interface CalculatorState {
  display: string
  previousValue: number | null
  operation: string | null
  waitingForNumber: boolean
  hasError: boolean
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForNumber: false,
    hasError: false
  })

  const clearAll = useCallback(() => {
    setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForNumber: false,
      hasError: false
    })
  }, [])

  const inputNumber = useCallback((num: string) => {
    setState(prevState => {
      if (prevState.hasError) return prevState
      
      if (prevState.waitingForNumber) {
        return {
          ...prevState,
          display: num,
          waitingForNumber: false
        }
      }
      
      if (prevState.display === '0') {
        return {
          ...prevState,
          display: num
        }
      }
      
      if (prevState.display.length >= 9) {
        return prevState
      }
      
      return {
        ...prevState,
        display: prevState.display + num
      }
    })
  }, [])

  const inputDecimal = useCallback(() => {
    setState(prevState => {
      if (prevState.hasError) return prevState
      
      if (prevState.waitingForNumber) {
        return {
          ...prevState,
          display: '0.',
          waitingForNumber: false
        }
      }
      
      if (prevState.display.includes('.')) {
        return prevState
      }
      
      if (prevState.display.length >= 9) {
        return prevState
      }
      
      return {
        ...prevState,
        display: prevState.display + '.'
      }
    })
  }, [])

  const performOperation = useCallback((nextOperation: string) => {
    setState(prevState => {
      if (prevState.hasError) return prevState
      
      const inputValue = parseFloat(prevState.display)
      
      if (prevState.previousValue === null) {
        return {
          ...prevState,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForNumber: true
        }
      }
      
      if (prevState.operation && prevState.waitingForNumber) {
        return {
          ...prevState,
          operation: nextOperation
        }
      }
      
      const currentValue = prevState.previousValue || 0
      let result: number
      
      switch (prevState.operation) {
        case '+':
          result = currentValue + inputValue
          break
        case '-':
          result = currentValue - inputValue
          break
        case '*':
          result = currentValue * inputValue
          break
        case '/':
          if (inputValue === 0) {
            return {
              ...prevState,
              display: 'ERROR',
              hasError: true
            }
          }
          result = currentValue / inputValue
          break
        case '%':
          result = currentValue % inputValue
          break
        default:
          return prevState
      }
      
      // Solo mostrar ERROR si el resultado de la operación es negativo
      if (result < 0) {
        return {
          ...prevState,
          display: 'ERROR',
          hasError: true
        }
      }
      
      if (result > 999999999) {
        return {
          ...prevState,
          display: 'ERROR',
          hasError: true
        }
      }
      
      let displayResult = result.toString()
      if (displayResult.length > 9) {
        if (displayResult.includes('.')) {
          const decimalIndex = displayResult.indexOf('.')
          const integerPart = displayResult.substring(0, decimalIndex)
          if (integerPart.length >= 9) {
            displayResult = 'ERROR'
          } else {
            const remainingDecimals = 9 - integerPart.length - 1
            displayResult = result.toFixed(remainingDecimals).replace(/\.?0+$/, '')
          }
        } else {
          displayResult = 'ERROR'
        }
      }
      
      if (displayResult === 'ERROR') {
        return {
          ...prevState,
          display: 'ERROR',
          hasError: true
        }
      }
      
      return {
        ...prevState,
        display: displayResult,
        previousValue: result,
        operation: nextOperation,
        waitingForNumber: true
      }
    })
  }, [])

  const calculate = useCallback(() => {
    setState(prevState => {
      if (prevState.hasError) return prevState
      
      const inputValue = parseFloat(prevState.display)
      
      if (prevState.previousValue === null || !prevState.operation) {
        return prevState
      }
      
      const currentValue = prevState.previousValue
      let result: number
      
      switch (prevState.operation) {
        case '+':
          result = currentValue + inputValue
          break
        case '-':
          result = currentValue - inputValue
          break
        case '*':
          result = currentValue * inputValue
          break
        case '/':
          if (inputValue === 0) {
            return {
              ...prevState,
              display: 'ERROR',
              hasError: true
            }
          }
          result = currentValue / inputValue
          break
        case '%':
          result = currentValue % inputValue
          break
        default:
          return prevState
      }
      
      // Solo mostrar ERROR si el resultado de la operación es negativo
      if (result < 0) {
        return {
          ...prevState,
          display: 'ERROR',
          hasError: true
        }
      }
      
      if (result > 999999999) {
        return {
          ...prevState,
          display: 'ERROR',
          hasError: true
        }
      }
      
      let displayResult = result.toString()
      if (displayResult.length > 9) {
        if (displayResult.includes('.')) {
          const decimalIndex = displayResult.indexOf('.')
          const integerPart = displayResult.substring(0, decimalIndex)
          if (integerPart.length >= 9) {
            displayResult = 'ERROR'
          } else {
            const remainingDecimals = 9 - integerPart.length - 1
            displayResult = result.toFixed(remainingDecimals).replace(/\.?0+$/, '')
          }
        } else {
          displayResult = 'ERROR'
        }
      }
      
      if (displayResult === 'ERROR') {
        return {
          ...prevState,
          display: 'ERROR',
          hasError: true
        }
      }
      
      return {
        ...prevState,
        display: displayResult,
        previousValue: null,
        operation: null,
        waitingForNumber: true
      }
    })
  }, [])

  const toggleSign = useCallback(() => {
    setState(prevState => {
      if (prevState.hasError || prevState.display === '0') return prevState
      
      const currentValue = parseFloat(prevState.display)
      const newValue = -currentValue
      
      const newDisplay = newValue.toString()
      
      // Verificar que el resultado con el signo no exceda 9 caracteres
      // El signo negativo cuenta como un carácter
      if (newDisplay.length > 9) {
        return {
          ...prevState,
          display: 'ERROR',
          hasError: true
        }
      }
      
      return {
        ...prevState,
        display: newDisplay
      }
    })
  }, [])

  return {
    display: state.display,
    clearAll,
    inputNumber,
    inputDecimal,
    performOperation,
    calculate,
    toggleSign
  }
}