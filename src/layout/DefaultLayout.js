import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'

const DefaultLayout = () => {
  return (
    <div className='default-layout'>
      <header className='header'>
      <Header/>
      </header>

      <main className='main'>
Main Content
      </main>
      

      <footer className='footer'>
        <Footer/>
      </footer>
      
      
    </div>
  )
}

export default DefaultLayout
