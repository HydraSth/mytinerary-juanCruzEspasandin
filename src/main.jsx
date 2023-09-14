import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="672029235388-p1vhgn9bkg6v5ifnf4t9tg24atlg3eav.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
)
