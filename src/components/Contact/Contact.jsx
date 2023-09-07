import React, { useContext } from "react";
import '../../styles/contact.css'
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs"; 
import { MdMail } from "react-icons/md";
import { ViewModeContext } from "../../context/viewModeContext";

export const Contact = () => {
    const {lightMode} = useContext(ViewModeContext);

    return (
        <>
            <div className="contact" id="contact">
                {
                lightMode ?
                <div className="contact-icons">
                    <a href="https://github.com/TaiBiscuit" className="contact-link" target="_blank">
                        <BsGithub size={50} className="contact-icon" style={{color: '#242424'}} /> 
                    </a>
                    <a href="#" className="contact-link" target="_blank">
                        <BsFillTelephoneFill size={50} className="contact-icon" style={{color: '#242424'}} />
                    </a>                       
                    <a href="#" className="contact-link" target="_blank">
                        <MdMail size={50} className="contact-icon" style={{color: '#242424'}} /> 
                    </a>
                </div>
                :
                <div className="contact-icons">
                    <div className="contact-link">
                        <a href="https://github.com/TaiBiscuit" className="contact-link" target="_blank">
                        <BsGithub size={50} className="contact-icon" style={{color: 'white'}}/> 
                        </a>
                        <p className="contact-txt">TaiBiscuit</p>
                    </div>
                    <div className="contact-link">
                        <a href="#" className="contact-link" target="_blank">
                            <BsFillTelephoneFill size={50} className="contact-icon" style={{color: 'white'}} />
                        </a>  
                        <p className="contact-txt">(+54) 9 11 44089846</p>
                    </div>      
                    <div className="contact-link">
                        <a href="mailto: nicolas.l.campos1@gmail.com" className="contact-link" target="_blank">
                            <MdMail size={50} className="contact-icon" style={{color: 'white'}} /> 
                        </a>
                        <p className="contact-txt">nicolas.l.campos1@gmail.com</p>
                    </div>               
                </div>
                }
            </div>
        </>
    )
}
