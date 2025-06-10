import { renderHook, act } from '@testing-library/react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useCalculator } from '../hooks/useCalculator'
import { Calculator } from '../components/Calculator'

describe('Calculator Tests', () => {
  // Test 1: Hook initialization
  test('calculator hook initializes correctly', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  // Test 2: Basic addition functionality
  test('performs addition correctly', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => {
      result.current.inputNumber('5')
      result.current.performOperation('+')
      result.current.inputNumber('3')
      result.current.calculate()
    })
    
    expect(result.current.display).toBe('8')
  })

  // Test 3: Error handling for negative results
  test('shows ERROR for negative results', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => {
      result.current.inputNumber('3')
      result.current.performOperation('-')
      result.current.inputNumber('5')
      result.current.calculate()
    })
    
    expect(result.current.display).toBe('ERROR')
  })

  // Test 4: 9-character limit enforcement
  test('enforces 9-character display limit', () => {
    const { result } = renderHook(() => useCalculator())
    
    act(() => {
      // Try to input 10 characters
      for (let i = 1; i <= 10; i++) {
        result.current.inputNumber(i.toString().slice(-1))
      }
    })
    
    expect(result.current.display.length).toBeLessThanOrEqual(9)
    expect(result.current.display).toBe('123456789')
  })

  // Test 5: Component integration test
  test('calculator component integrates with user interactions', () => {
    render(<Calculator />)
    
    // Test that display starts at 0
    const display = screen.getByTestId('calculator-display')
    expect(display).toHaveTextContent('0')
    
    // Test number input
    fireEvent.click(screen.getByRole('button', { name: '7' }))
    expect(display).toHaveTextContent('7')
    
    // Test clear functionality
    fireEvent.click(screen.getByRole('button', { name: 'C' }))
    expect(display).toHaveTextContent('0')
  })
})