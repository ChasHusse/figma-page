import { useEffect, useRef, useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"


function App() {
  const [cartAmounth, setCartAmounth] = useState(0)
  console.log(cartAmounth)





  return (
    <>
      <Header cartAmounth={cartAmounth} />
      <Main setCartAmounth={setCartAmounth} />
    </>

  )
}

export default App
