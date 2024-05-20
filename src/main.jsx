import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
// import { BrowserRouter } from 'react-router-dom'
// import { StoreProvider } from './storeContext/index.js'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <StoreProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
      {/* </StoreProvider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
