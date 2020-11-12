import React from 'react'
import Common from "./Common"
import logo from "./logo.png"

function Home() {
    return (
        <div>
        <Common 
        name="Hi, i am" 
        imgsrc={logo}
        visit="./project"
        btname="View Projects"/>
       
        </div>
    )
}

export default Home
