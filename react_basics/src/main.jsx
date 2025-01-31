// import ( StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*const reactElement = {
  type: 'a',
  props:{
      href: 'https://google.com',
      target: '_blank',
  },
  children: 'CLick me to visit Google'
}*/

// const anotherElement = (
//   <a href="https://google.com">Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank'},
//   'Visit Google'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  // anotherElement
  // reactElement
)
