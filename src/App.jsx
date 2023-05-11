import { Navbar, Home, Benefits, Finance, Footer, Contact } from './components'
import { ToastProvider } from 'react-toast-notifications'
 

function App() {
 

  return (
      
        <div className='w-[100%] overflow-hidden'>
         <ToastProvider>
          <Navbar /> 
          <Home />
          <Benefits />
          <Finance />
          <Contact />
          <Footer />
         </ToastProvider>
        </div>
      
  )
}

export default App
