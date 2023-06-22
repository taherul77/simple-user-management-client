import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Route.jsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <QueryClientProvider client={QueryClient}> */}
    <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
      
  </React.StrictMode>,
)
