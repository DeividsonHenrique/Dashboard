//import icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'

import { GlobalStyle, AjustComponent } from './style.js'
import Footer from './components/Footer/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

function App() {

  return (
    <>
      <GlobalStyle />
      <AjustComponent />
      <Header />
      <SideBar />
      <Main />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
