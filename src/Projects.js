import React from 'react'
import Card from "./Card"
import Pdata from "./Pdata"

function Projects() {
    return (
    <>
        <div className="my-5">
            <h1 className="text-center">P R O J E C T S</h1>
        </div>

        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                       {Pdata.map((val, ind) =>{
                           return <Card key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc} liveUrl={val.liveUrl}/>
                       })}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Projects
