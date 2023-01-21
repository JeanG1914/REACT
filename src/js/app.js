import React from 'react'
import NavBar from "./component/NavBar/NavBar.jsx";
import Jumpbotron from './component/Jumpbotron.jsx';
import Card from './component/Card.jsx';
import Footer from './component/Footer.jsx';

const App = () => {
let array = [1,2,3,4] 
  return (
    <div className='h-100'>
        <NavBar></NavBar>
       <div className='container'>
        <Jumpbotron></Jumpbotron>
        <div className ="d-flex mb-auto justify-content-between">{array.map(i=>{
            return <Card></Card>
        })}</div>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default App