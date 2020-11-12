import React from 'react'
import Common from "./Common"
import logo from "./logo.png"

function About() {
    return (
        <div>
        <Common name="Welcome to About page" 
        imgsrc={logo}
        visit="./contact"
        btname="Contact Now"/>
        </div>
    )
}
export default About
