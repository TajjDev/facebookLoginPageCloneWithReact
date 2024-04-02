import { useState } from 'react'
import './App.css'
import Login from './component/Login/Login'
import SignUp from './component/SignUp/SignUp'

function App() {

  const [page, setPage] = useState(false)

  return(
    <>
      <Login ShowSignUp={setPage} />
      {page ? <SignUp HidePage={setPage}/> : ""}
      {/* <SignUp></SignUp> */}
      </>
  )
}

export default App