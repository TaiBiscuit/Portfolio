import React, { useContext } from "react";
import '../../styles/contact.css'
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs"; 
import { MdMail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { ViewModeContext } from "../../context/viewModeContext";

export const Contact = () => {
    const {lightMode} = useContext(ViewModeContext);

    return (
        <>
            <div className="contact" id="contact">
                {
                lightMode ?
                <div className="contact-icons">
                    <div className="contact-link">
                        <a href="https://github.com/TaiBiscuit" className="contact-link" target="_blank">
                        <BsGithub size={50} className="contact-icon" style={{color: '#242424'}}/> 
                        </a>
                        <p className="contact-txt-B">TaiBiscuit</p>
                    </div>
                    <div className="contact-link">
                        <a href="https://www.linkedin.com/in/nicolas-cam-pos/" className="contact-link" target="_blank">
                            <ImLinkedin size={50} className="contact-icon" style={{color: '#242424'}} /> 
                        </a>
                        <p className="contact-txt-B"> Nicolás Campos </p>
                    </div> 
                    <div className="contact-link">
                        <a href="#" className="contact-link" target="_blank">
                            <BsFillTelephoneFill size={50} className="contact-icon" style={{color: '#242424'}} />
                        </a>  
                        <p className="contact-txt-B">(+54) 9 11 44089846</p>
                    </div>      
                    <div className="contact-link">
                        <a href="mailto: nicolas.l.campos1@gmail.com" className="contact-link" target="_blank">
                            <MdMail size={50} className="contact-icon" style={{color: '#242424'}} /> 
                        </a>
                        <p className="contact-txt-B">nicolas.l.campos1@gmail.com</p>
                    </div>               
                </div>
                :
                <div className="contact-icons">
                    <div className="contact-link">
                        <a href="https://github.com/TaiBiscuit" className="contact-link" target="_blank">
                        <BsGithub size={50} className="contact-icon" style={{color: 'white'}}/> 
                        </a>
                        <p className="contact-txt-A">TaiBiscuit</p>
                    </div>
                    <div className="contact-link">
                        <a href="https://www.linkedin.com/in/nicolas-cam-pos/" className="contact-link" target="_blank">
                            <ImLinkedin size={50} className="contact-icon" style={{color: 'white'}} /> 
                        </a>
                        <p className="contact-txt-A"> Nicolás Campos </p>
                    </div> 
                    <div className="contact-link">
                        <a href="#" className="contact-link" target="_blank">
                            <BsFillTelephoneFill size={50} className="contact-icon" style={{color: 'white'}} />
                        </a>  
                        <p className="contact-txt-A">(+54) 9 11 44089846</p>
                    </div>      
                    <div className="contact-link">
                        <a href="mailto: nicolas.l.campos1@gmail.com" className="contact-link" target="_blank">
                            <MdMail size={50} className="contact-icon" style={{color: 'white'}} /> 
                        </a>
                        <p className="contact-txt-A">nicolas.l.campos1@gmail.com</p>
                    </div>               
                </div>
                }
            </div>
        </>
    )
}
