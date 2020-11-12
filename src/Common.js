import React from 'react'
import {NavLink} from "react-router-dom"
import Social from './Social'

function Common(props) {
    return (
        <div>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1>{props.name} <strong className="brand-name">Anil Gadwal</strong></h1>
                            <h2 className="my-3">
                                I am a <strong className="brand-name">Front-end/UI</strong> Web Developer
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started mb-5">
                                {props.btname}
                                </NavLink>
                            </div>
                            <h2 className="my-3">
                            <strong className="brand-name">Follow</strong> me on <strong className="brand-name">: </strong>
                            </h2>
                            < Social/>
                        </div>
                       

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} 
                            className="img-fluid animated" 
                            alt="home img"/>
                        </div>
                        </div>
                     </div>
                </div>
             </div>
         </section>
        </div>
    )
}

export default Common