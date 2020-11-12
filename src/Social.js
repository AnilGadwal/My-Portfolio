import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import "./index.css"

import React from 'react'

function Social() {
    return (
        <div className="social_container">
                                 <a href="https://github.com/AnilGadwal" target="_blank" className="sButton">
                                   <FaGithub size={23} color={"#3498db"}/>
                                  </a>
                                  <a href="https://www.linkedin.com/in/anil-gadwal-807410144/" target="_blank" className="sButton">
                                   <FaLinkedin size={23} color={"#3498db"} />
                                  </a>
                                  <a href="https://www.instagram.com/neo_0_o/" target="_blank" className="sButton">
                                   <FaInstagram size={23} color={"#3498db"}/>
                                  </a>
                              </div>
    )
}

export default Social

