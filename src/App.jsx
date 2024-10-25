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

import { GlobalStyle } from './style.js'

function App() {

  return (
    <>
    <GlobalStyle />
      <Header />
      <SideBar />
      <Main />
    </>
  )
}

export default App
