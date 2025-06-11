import { render, screen, fireEvent } from '@testing-library/react'
import { Calculator } from '../components/Calculator'
import {describe, test, expect} from 'vitest'

describe('Calculator UI Tests', () => {
  test('should display numbers when clicking number buttons', () => {
    render(<Calculator />)
    
    fireEvent.click(screen.getByTestId('number-1'))
    fireEvent.click(screen.getByTestId('number-2'))
    fireEvent.click(screen.getByTestId('number-3'))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('123')
  })

  test('should perform basic arithmetic operations', () => {
    render(<Calculator />)
    
    fireEvent.click(screen.getByTestId('number-5'))
    fireEvent.click(screen.getByTestId('add-button'))
    fireEvent.click(screen.getByTestId('number-3'))
    fireEvent.click(screen.getByTestId('equals-button'))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('8')
  })

  test('should clear display when AC button is clicked', () => {
    render(<Calculator />)
    
    fireEvent.click(screen.getByTestId('number-9'))
    fireEvent.click(screen.getByTestId('clear-button'))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('0')
  })

  test('should respect 9 digit limit', () => {
    render(<Calculator />)
    
    '1234567890'.split('').forEach(digit => {
      fireEvent.click(screen.getByTestId(`number-${digit}`))
    })
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('123456789')
  })

  test('should handle decimal point correctly', () => {
    render(<Calculator />)
    
    fireEvent.click(screen.getByTestId('number-3'))
    fireEvent.click(screen.getByTestId('decimal-button'))
    fireEvent.click(screen.getByTestId('number-1'))
    fireEvent.click(screen.getByTestId('number-4'))
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('3.14')
  })
})