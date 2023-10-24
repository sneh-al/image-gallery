import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import ContextProvider from './Context'

function App() {

  return (
    <ContextProvider>
     <Header />
    <main className='bg-gray-50 dark:bg-gray-950'>
      <Hero/>
    <Gallery/>
    </main>
    </ContextProvider>
  )
}

export default App
