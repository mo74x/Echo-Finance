import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './state/Api'
export const store = configureStore({
  reducer: {[api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
