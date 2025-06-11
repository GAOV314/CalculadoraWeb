import { render, screen, fireEvent } from '@testing-library/react'
import { Calculator } from '../components/Calculator'
import { describe, test, expect } from 'vitest'

describe('Calculator UI Tests - User Interface Validation', () => {
  
  test('should display numbers when clicking visible number buttons', () => {
    render(<Calculator />)
    
    // Buscar botones por su texto visible (lo que ve el usuario)
    const button1 = screen.getByRole('button', { name: '1' })
    const button2 = screen.getByRole('button', { name: '2' })
    const button3 = screen.getByRole('button', { name: '3' })
    
    // Verificar que los botones existen y son visibles
    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
    expect(button3).toBeInTheDocument()
    
    // Verificar que tienen el texto correcto
    expect(button1).toHaveTextContent('1')
    expect(button2).toHaveTextContent('2')
    expect(button3).toHaveTextContent('3')
    
    // Hacer clic en los botones
    fireEvent.click(button1)
    fireEvent.click(button2)
    fireEvent.click(button3)
    
    // Verificar resultado
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('123')
  })

  test('should perform basic arithmetic with visible operator buttons', () => {
    render(<Calculator />)
    
    // Buscar botones por texto visible (símbolos que ve el usuario)
    const number5 = screen.getByRole('button', { name: '5' })
    const addButton = screen.getByRole('button', { name: '+' })
    const number3 = screen.getByRole('button', { name: '3' })
    const equalsButton = screen.getByRole('button', { name: '=' })
    
    // Verificar que todos los botones necesarios existen
    expect(number5).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
    expect(number3).toBeInTheDocument()
    expect(equalsButton).toBeInTheDocument()
    
    // Verificar que muestran el texto correcto
    expect(number5).toHaveTextContent('5')
    expect(addButton).toHaveTextContent('+')
    expect(number3).toHaveTextContent('3')
    expect(equalsButton).toHaveTextContent('=')
    
    // Realizar operación
    fireEvent.click(number5)
    fireEvent.click(addButton)
    fireEvent.click(number3)
    fireEvent.click(equalsButton)
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('8')
  })

  test('should clear display when AC button with correct text is clicked', () => {
    render(<Calculator />)
    
    const number9 = screen.getByRole('button', { name: '9' })
    const clearButton = screen.getByRole('button', { name: 'AC' })
    
    // Verificar que el botón AC existe y tiene el texto correcto
    expect(clearButton).toBeInTheDocument()
    expect(clearButton).toHaveTextContent('AC')
    
    // Ingresar un número
    fireEvent.click(number9)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('9')
    
    // Limpiar
    fireEvent.click(clearButton)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('0')
  })

  test('should respect 9 digit limit with actual number buttons', () => {
    render(<Calculator />)
    
    // Verificar que todos los botones numéricos existen y tienen texto correcto
    const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(num => {
      const button = screen.getByRole('button', { name: num })
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent(num)
      return button
    })
    
    // Intentar ingresar 10 dígitos
    '1234567890'.split('').forEach(digit => {
      const button = numberButtons.find(btn => btn.textContent === digit)
      if (button) fireEvent.click(button)
    })
    
    // Debe mostrar solo 9 dígitos
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('123456789')
  })

  test('should handle decimal point with visible decimal button', () => {
    render(<Calculator />)
    
    const number3 = screen.getByRole('button', { name: '3' })
    const decimalButton = screen.getByRole('button', { name: '.' })
    const number1 = screen.getByRole('button', { name: '1' })
    const number4 = screen.getByRole('button', { name: '4' })
    
    // Verificar que el botón decimal existe y tiene el texto correcto
    expect(decimalButton).toBeInTheDocument()
    expect(decimalButton).toHaveTextContent('.')
    
    // Verificar que los números tienen el texto correcto
    expect(number3).toHaveTextContent('3')
    expect(number1).toHaveTextContent('1')
    expect(number4).toHaveTextContent('4')
    
    fireEvent.click(number3)
    fireEvent.click(decimalButton)
    fireEvent.click(number1)
    fireEvent.click(number4)
    
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('3.14')
  })

  test('should show operation display correctly', () => {
    render(<Calculator />)
    
    const number9 = screen.getByRole('button', { name: '9' })
    const addButton = screen.getByRole('button', { name: '+' })
    const number5 = screen.getByRole('button', { name: '5' })
    
    // Verificar textos de botones
    expect(number9).toHaveTextContent('9')
    expect(addButton).toHaveTextContent('+')
    expect(number5).toHaveTextContent('5')
    
    fireEvent.click(number9)
    fireEvent.click(addButton)
    fireEvent.click(number5)
    
    // Verificar que se muestra la operación completa
    const operationDisplay = screen.getByText('9 + 5')
    expect(operationDisplay).toBeInTheDocument()
  })

  test('should handle all operator symbols correctly', () => {
    render(<Calculator />)
    
    // Verificar que todos los operadores existen con sus símbolos correctos
    const operators = [
      { symbol: '+', name: 'suma' },
      { symbol: '−', name: 'resta' },
      { symbol: '×', name: 'multiplicación' },
      { symbol: '÷', name: 'división' },
      { symbol: '%', name: 'módulo' }
    ]
    
    operators.forEach(({ symbol, name }) => {
      const button = screen.getByRole('button', { name: symbol })
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent(symbol)
    })
  })

  test('should handle toggle sign button correctly', () => {
    render(<Calculator />)
    
    const number5 = screen.getByRole('button', { name: '5' })
    const toggleButton = screen.getByRole('button', { name: '±' })
    
    // Verificar que el botón ± existe y tiene el símbolo correcto
    expect(toggleButton).toBeInTheDocument()
    expect(toggleButton).toHaveTextContent('±')
    expect(number5).toHaveTextContent('5')
    
    fireEvent.click(number5)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('5')
    
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('calculator-display')).toHaveTextContent('-5')
  })

  test('should validate calculator grid layout structure', () => {
    render(<Calculator />)
    
    // Verificar que existe la estructura básica
    const calculator = document.querySelector('.calculator')
    const display = document.querySelector('.display')
    const buttonGrid = document.querySelector('.button-grid')
    
    expect(calculator).toBeInTheDocument()
    expect(display).toBeInTheDocument()
    expect(buttonGrid).toBeInTheDocument()
    
    // Verificar que hay exactamente 19 botones (como debe ser en una calculadora)
    const allButtons = screen.getAllByRole('button')
    expect(allButtons).toHaveLength(19)
  })
})
