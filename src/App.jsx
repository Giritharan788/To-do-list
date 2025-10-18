import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css'
import { createContext, useState } from 'react'

export let UserContext = createContext();

function App() {

const [user,setUser] = useState({
  name : "Giritharan",
  age : 32,
  email : "abc@gmail.com"
})

  return (
    <>
    <UserContext.Provider value={{user}}>
    <div className="App">

      <Header />
      <Content />
      <Footer />
      
    </div>
    </UserContext.Provider>
    </>
  )
}

export default App
