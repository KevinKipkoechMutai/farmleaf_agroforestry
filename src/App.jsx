import { Navbar, Home, Benefits, Finance, Services, Footer, Goals, Contact } from './components'
import { ToastProvider } from 'react-toast-notifications'
 

function App() {
 

  return (
      
        <div className='w-[100%] overflow-hidden'>
         <ToastProvider>
          <Navbar /> 
          <Home />
          <Goals/>
          <Benefits />
          <Services />
          <Finance />
          <Contact />
          <Footer />
         </ToastProvider>
        </div>
      
  )
}

export default App
