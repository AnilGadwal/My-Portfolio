import React from 'react'
import Common from "./Common"
import logo from "./logo.png"

function Home() {
    return (
        <div>
        <Common 
        name="Grow your bussiness with" 
        imgsrc={logo}
        visit="./project"
        btname="View Projects"/>
       
        </div>
    )
}

export default Home
