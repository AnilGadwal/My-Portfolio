import React, { useState } from 'react'
import Social from "./Social"

function Contact() {
    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent= (event) => {
        const{name, value} = event.target;

        setData((preVal =>{
            return{
                ...preVal, 
                [name] : value,
            }            
        }))
    }


    const formSubmit = (e) =>{
        e.preventDefault();
        console.log()
    }; 

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">C O N T A C T</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlInput1 ">Full Name</label>
    <input name="fullname" value={data.fullname} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
  </div>
  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlInput1">Phone</label>
    <input name="phone" value={data.phone} onChange={InputEvent} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone number"/>
  </div>
  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group pb-3">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea name="msg" value={data.msg} onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
        <br></br>
  <div className="col-12">
      <button className="btn btn-outline-dark mb-5" type="submit">Submit</button>
  </div>
</form>
<h5 className="my-3">
<strong className="brand-name">Follow</strong> me on
</h5>
<Social />
                </div>
              
            </div>
            
        </div>
        </>
    )
}

export default Contact
