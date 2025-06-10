# Calculadora Web 🧮

Una calculadora web moderna desarrollada con React y TypeScript, diseñada como proyecto del curso de Tecnologías Web.

## 🚀 Características

- ✅ **Interfaz moderna y responsive** - Funciona perfectamente en desktop y móvil
- ✅ **Operaciones matemáticas básicas** - Suma, resta, multiplicación, división y módulo
- ✅ **Funciones adicionales** - Cambio de signo, números decimales y limpieza
- ✅ **Arquitectura modular** - Componentes React reutilizables
- ✅ **Custom Hook** - Lógica de negocio encapsulada en `useCalculator`
- ✅ **TypeScript** - Tipado estático para mayor confiabilidad
- ✅ **Testing** - Suite de pruebas con Jest y React Testing Library

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de frontend
- **TypeScript** - Superset de JavaScript con tipado estático
- **Yarn** - Gestor de paquetes
- **CSS3** - Estilos modernos con Grid y Flexbox
- **Jest** - Framework de testing
- **React Testing Library** - Utilities de testing para React

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Calculator.tsx   # Componente principal (≤20 líneas)
│   ├── Display.tsx      # Pantalla de la calculadora (≤20 líneas)
│   ├── Button.tsx       # Botón reutilizable (≤20 líneas)
│   ├── NumberPad.tsx    # Teclado numérico (≤20 líneas)
│   └── Operations.tsx   # Botones de operaciones (≤20 líneas)
├── hooks/
│   └── useCalculator.ts # Hook personalizado con lógica de negocio
├── styles/
│   └── Calculator.css   # Estilos de la calculadora
└── tests/
    └── Calculator.test.tsx # Suite de pruebas
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v14 o superior)
- Yarn (gestor de paquetes)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/GAOV314/CalculadoraWeb.git
   cd CalculadoraWeb
   ```

2. **Instalar dependencias**
   ```bash
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   yarn start
   ```
   La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

4. **Ejecutar tests**
   ```bash
   yarn test
   ```

5. **Crear build de producción**
   ```bash
   yarn build
   ```

## 🧪 Testing

El proyecto incluye pruebas automatizadas que verifican:

- ✅ Renderizado correcto de componentes
- ✅ Operaciones matemáticas básicas
- ✅ Manejo de números decimales
- ✅ Funcionalidad de cambio de signo
- ✅ Limpieza de pantalla

```bash
# Ejecutar todas las pruebas
yarn test

# Ejecutar pruebas en modo watch
yarn test --watch

# Generar reporte de cobertura
yarn test --coverage
```

## 🎯 Funcionalidades

### Operaciones Básicas
- **Suma (+)** - Adición de números
- **Resta (−)** - Sustracción de números  
- **Multiplicación (×)** - Producto de números
- **División (÷)** - División de números
- **Módulo (%)** - Resto de división

### Funciones Especiales
- **AC (All Clear)** - Limpia completamente la calculadora
- **+/−** - Cambia el signo del número actual
- **Decimal (.)** - Permite números con decimales

## 📋 Criterios de Evaluación Cumplidos

- ✅ **(40 puntos)** Calculadora completamente funcional
- ✅ **(20 puntos)** Todos los componentes ≤ 20 líneas de código
- ✅ **(10 puntos)** Lógica manejada con hook personalizado `useCalculator`
- ✅ **(10 puntos)** Suite de pruebas implementada
- ✅ **(5 puntos)** Uso de Yarn (no npm) con lockfile commiteado
- ✅ **(5 puntos)** README.md completo y documentado

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto fue desarrollado como parte del curso de Tecnologías Web.

## 👨‍💻 Autor

**GAOV314** - [GitHub Profile](https://github.com/GAOV314)

---

⭐ ¡Dale una estrella al proyecto si te gustó!