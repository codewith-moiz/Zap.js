# Zap.js 

A lightweight, modern JavaScript framework for building reactive web applications with a component-based architecture.

## Features

- **Virtual DOM**: Efficient rendering with a virtual DOM implementation
- **Component-Based Architecture**: Build UIs from reusable, composable components
- **Reactive State Management**: Built-in reactivity system with fine-grained updates
- **Hooks API**: React-like hooks (useState, useEffect, useCallback, useMemo, useRef)
- **Global Store**: Simple but powerful state management with createStore
- **Context API**: Share state between components without prop drilling
- **Tiny Footprint**: Minimal bundle size for optimal performance
- **No Dependencies**: Zero external dependencies
- **TypeScript Support**: Built with TypeScript for better developer experience

## Core Concepts

### Components

Components are the building blocks of Zap.js applications. Create functional components that return virtual DOM elements:

```js
function Counter() {
  const [count, setCount] = useState(0);
  
  return h('div', { className: 'counter' }, [
    h('p', {}, [`Count: ${count}`]),
    h('button', { onClick: () => setCount(count + 1) }, ['Increment'])
  ]);
}
```

### Virtual DOM

Create DOM elements using the `h()` function:

```js
h(type, props, children)
```

Where:
- `type`: String (HTML tag) or function (component)
- `props`: Object containing attributes and event handlers
- `children`: Array of child elements or text content

### State Management

Zap.js offers multiple ways to manage state:

1. **Component State** with `useState`:
   ```js
   const [state, setState] = useState(initialValue);
   ```

2. **Global State** with `createStore`:
   ```js
   const store = createStore({
     count: 0,
     todos: []
   });
   
   // In components:
   const [state, setState] = useStore(store);
   ```

3. **Context API** for state sharing:
   ```js
   const ThemeContext = createContext('light');
   
   // In components:
   const theme = useContext(ThemeContext);
   ```

## Example Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>Zap.js App</title>
  <script src="zap.min.js"></script>
</head>
<body>
  <div id="app"></div>
  
  <script>
    const { h, render, useState } = Zap;
    
    function App() {
      const [message, setMessage] = useState('Hello, Zap.js!');
      
      return h('div', { className: 'app' }, [
        h('h1', {}, [message]),
        h('input', {
          value: message,
          onInput: (e) => setMessage(e.target.value)
        })
      ]);
    }
    
    render(h(App), document.getElementById('app'));
  </script>
</body>
</html>
```

## Getting Started

1. Include Zap.js in your project:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/zapjs/zap/dist/zap.min.js"></script>
   ```
   
## Browser Support

Zap.js works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

MIT 