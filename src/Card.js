import React from 'react'
import "./index.css"
import { FaDesktop, FaGithub} from "react-icons/fa"

function Card(props) {
    return (

                        <div className="col-md-4 col-12 mx-auto">
                            <div className="card" >
                                <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">
                                        {props.title}
                                    </h5>
                                    <p class="card-text">{props.desc}</p>
                                    <div className="buttonss">
                                    <a href={props.liveUrl} class="btn btn-dark btn-sm" target="_blank">Demo <FaDesktop size={16}/></a>
                                    <a href={props.gitUrl} class="btn btn-dark btn-sm" target="_blank">Code <FaGithub size={18}/></a>
                                    </div>
                                </div>
                                </div>
                            </div>
    )
}

export default Card
