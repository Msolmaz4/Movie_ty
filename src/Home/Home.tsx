import Cards from "../components/card/Cards"
import Header from "../components/head"
import Navbar from "../components/navbar/Navbar"
import {useState} from 'react'



const Home = () => {
  const [inp,setInpu] = useState('')
  console.log(inp)

  return (
    <div>

      <Navbar inp = {inp} setInpu= {setInpu}/>
      <Header/>
      <Cards inp = {inp}/> 

    </div>
  )
}

export default Home