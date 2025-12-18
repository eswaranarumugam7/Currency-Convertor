# 💱 Currency Converter

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A modern, real-time currency converter built with React, TypeScript, and Vite. Features a stunning glass-morphism UI with dynamic currency support and live exchange rates.

## ✨ Features

- 🌍 **170+ Currencies** - Dynamic currency list from ExchangeRate-API
- ⚡ **Real-time Rates** - Live exchange rate updates
- 🎨 **Modern UI** - Glass-morphism design with green theme
- 📱 **Responsive** - Mobile-first responsive design
- 🔄 **Currency Swap** - One-click currency switching
- ⌨️ **TypeScript** - Full type safety and IntelliSense
- 🚀 **Fast Performance** - Powered by Vite for lightning-fast builds
- 🛡️ **Error Handling** - Graceful fallbacks and user feedback

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- ExchangeRate-API key ([Get free key](https://www.exchangerate-api.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Add your API key to `.env`:
   ```env
   VITE_EXCHANGE_RATE_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Built With

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 19.2.0 | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | Type Safety |
| [Vite](https://vitejs.dev/) | 7.2.4 | Build Tool |
| [ExchangeRate-API](https://www.exchangerate-api.com/) | v6 | Currency Data |

## 📁 Project Structure

```
currency-converter/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CurrencyConverter.tsx
│   │   └── CurrencyConverter.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 API Integration

### Supported Currencies Endpoint
```typescript
GET https://v6.exchangerate-api.com/v6/{API_KEY}/codes
```

### Exchange Rates Endpoint
```typescript
GET https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{BASE_CURRENCY}
```

## 🎨 UI Components

### Key Features
- **Glass Morphism**: Semi-transparent cards with subtle borders
- **Green Theme**: Nature-inspired color palette
- **Smooth Animations**: CSS transitions and transforms
- **Custom Dropdowns**: Styled select elements with custom arrows
- **Loading States**: Spinner animations during API calls

## 📱 Responsive Design

| Breakpoint | Layout |
|------------|--------|
| Desktop (>640px) | Horizontal currency selection |
| Mobile (≤640px) | Vertical stacked layout |

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # ESLint check
npm run type-check   # TypeScript check
```

## 🌟 Key Components

### CurrencyConverter.tsx
Main component handling:
- State management for currencies and rates
- API integration with error handling
- Real-time conversion calculations
- User interface rendering

### Features Implementation
- **Dynamic Currency Loading**: Fetches available currencies on mount
- **Auto-calculation**: Updates conversion on input change
- **Error Boundaries**: Graceful API failure handling
- **Loading States**: User feedback during operations

## 🚀 Performance Optimizations

- **Vite HMR**: Hot module replacement for fast development
- **TypeScript**: Compile-time error catching
- **CSS Animations**: Hardware-accelerated transitions
- **API Caching**: Reduces redundant network requests

## 🔒 Security

- **Environment Variables**: API keys stored securely
- **Input Validation**: Number parsing and sanitization
- **Error Handling**: No sensitive data exposure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ExchangeRate-API](https://www.exchangerate-api.com/) for reliable currency data
- [React Team](https://reactjs.org/) for the amazing framework
- [Vite Team](https://vitejs.dev/) for the blazing fast build tool

## 📞 Support

If you have any questions or run into issues, please [open an issue](https://github.com/yourusername/currency-converter/issues).

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</div>