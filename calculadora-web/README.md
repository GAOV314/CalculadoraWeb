# 🧮 Calculadora Web Moderna

Una calculadora web moderna y elegante desarrollada con React, TypeScript y TailwindCSS. Cuenta con una interfaz intuitiva tipo glass-morphism y todas las funcionalidades de una calculadora científica básica.

![Calculadora Web](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.8-blue?logo=tailwindcss)
![Tests](https://img.shields.io/badge/Tests-Vitest-green?logo=vitest)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz glass-morphism con efectos de blur y transparencia
- 📱 **Totalmente Responsiva**: Se adapta perfectamente a cualquier dispositivo
- ⚡ **Rápida y Fluida**: Construida con Vite para máximo rendimiento
- 🧪 **100% Testeada**: Suite completa de tests unitarios con Vitest
- 🔧 **TypeScript**: Tipado estático para mayor robustez
- 🎯 **Modular**: Arquitectura de componentes bien estructurada
- 📊 **Operaciones Completas**: Muestra la operación matemática en tiempo real

## 🚀 Demo en Vivo

[Ver Calculadora](https://calicheoficial.lat/231270/calculadoraWeb/)

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.1.0 + TypeScript 5.8.2
- **Estilos**: TailwindCSS 4.1.8 con PostCSS
- **Build Tool**: Vite 6.3.5
- **Testing**: Vitest + Testing Library
- **Package Manager**: Yarn
- **Deployment**: Optimizado para producción

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/GAOV314/calculadora-web.git
cd calculadora-web

# Instalar dependencias
yarn install

# Ejecutar en modo desarrollo
yarn dev

# Ejecutar tests
yarn test

# Build para producción
yarn build

# Preview del build
yarn preview
```

## 🎮 Uso

### Operaciones Básicas
- ➕ Suma
- ➖ Resta  
- ✖️ Multiplicación
- ➗ División
- 📊 Módulo (%)

### Funciones Especiales
- 🔄 **AC**: Limpiar todo
- ➕➖ **±**: Cambiar signo
- 🔢 **Decimales**: Soporte para números decimales
- 👁️ **Vista de Operación**: Muestra la operación completa en tiempo real

### Limitaciones
- 📏 Máximo 9 dígitos por número
- 🚫 Manejo de errores (división por cero, overflow)
- ⚡ Cálculos en cadena automáticos

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/           # Componentes React modulares
│   ├── Calculator.tsx   # Componente principal (15 líneas)
│   ├── Display.tsx      # Pantalla de la calculadora (10 líneas)
│   ├── Button.tsx       # Botón reutilizable (12 líneas)
│   ├── ButtonGrid.tsx   # Grid de botones (19 líneas)
│   ├── FirstRow.tsx     # Primera fila de botones (8 líneas)
│   ├── SecondRow.tsx    # Segunda fila de botones (8 líneas)
│   ├── ThirdRow.tsx     # Tercera fila de botones (8 líneas)
│   ├── FourthRow.tsx    # Cuarta fila de botones (8 líneas)
│   └── FifthRow.tsx     # Quinta fila de botones (8 líneas)
├── hooks/
│   └── useCalculator.ts # Lógica principal de la calculadora
├── test/
│   └── setup.ts         # Configuración de tests
├── tests/
│   └── Calculator.test.tsx # Tests unitarios
├── index.css           # Estilos globales con TailwindCSS
└── main.tsx           # Punto de entrada de la aplicación
```

## 🧪 Testing

El proyecto cuenta con una suite completa de tests unitarios:

```bash
# Ejecutar todos los tests
yarn test

# Tests en modo watch
yarn test --watch

# Coverage report
yarn test --coverage
```

### Tests Incluidos
- ✅ Entrada de números
- ✅ Operaciones aritméticas básicas
- ✅ Función de limpiar (AC)
- ✅ Límite de 9 dígitos
- ✅ Manejo de decimales
- ✅ Operaciones encadenadas

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `src/index.css`:

```css
.btn-operator {
  background: #f6ab3b; /* Naranja para operadores */
}

.btn-equals {
  background: #10b935; /* Verde para igual */
}
```

### Estilos
El proyecto usa TailwindCSS para estilos modulares y CSS personalizado para efectos específicos.

## 📋 Scripts Disponibles

```bash
yarn dev          # Servidor de desarrollo
yarn build        # Build optimizado para producción
yarn preview      # Preview del build de producción
yarn test         # Ejecutar tests
yarn test:watch   # Tests en modo watch
```

## 🔧 Configuración de Build

El proyecto está configurado para deployarse en:
```
Base URL: /231270/calculadoraWeb/
Producción: https://calicheoficial.lat/231270/calculadoraWeb/
```

Para cambiar la ruta base, edita `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/tu-nueva-ruta/',
  // ... resto de configuración
})
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**GAOV314**
- GitHub: [@GAOV314](https://github.com/GAOV314)
- Proyecto: [Calculadora Web](https://calicheoficial.lat/231270/calculadoraWeb/)

## 🎯 Roadmap

- [ ] Agregar más operaciones científicas
- [ ] Historial de cálculos
- [ ] Temas personalizables
- [ ] Soporte para teclado
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro/claro

---

⭐ ¡Dale una estrella si te gustó el proyecto!

*Desarrollado con ❤️ por GAOV314 - Junio 2025*