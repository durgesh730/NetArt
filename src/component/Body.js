import React from 'react'
import img from '../Netart-Test/logo.png'
import './Body.css'
import logo from '../Netart-Test/1.png'
import IMG from '../Netart-Test/2.png'
import IMGI from '../Netart-Test/3.png'
import {ImDribbble } from 'react-icons/im';
import {HiOutlinePhoneMissedCall } from 'react-icons/hi';

function Body() {
    return (
        <>
            <section className='logo container' >
                <img src={img} class="img-fluid" alt="..."></img>
            </section>

            <div className="MainDiv">
                <div className='LargeImage'>
                    <img src={logo} class="img-fluid" alt="..."></img>
                </div>

                <div className='textimage' >
                    <div className='firsttext'>
                        <span>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</span>
                    </div>

                    <div className='RightImgtext' >
                        <div className='SecondText' >
                            <small>
                                <li>  C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                                <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                            </small>
                        </div>

                        <div className='ImageInPara' >
                            <img src={IMG} class="img-fluid" alt="..."></img>
                        </div>
                    </div>

                    <div className='LastText'>
                        <span>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</span>
                    </div>
                </div>
            </div>

            <div className=' container linetext'>
                <small>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </small>
            </div>

            <div className='bottomImg'>
                <img src={IMGI} class="img-fluid" alt="..."></img>
                <div><span>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span></div>
            </div>

            <hr className='new1'></hr>

            <div className='Lastsecond' >
                <span>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</span>
            </div>

            <div className='lasttext' >
                <span>CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL</span>
            </div>

            <div className='footer' >
                <div><span><HiOutlinePhoneMissedCall/> Toll free 1800 200 1234</span></div>
                <div><a href='/'> <i class="fa-brands fa-facebook"></i> www.facebook.com/cripumps</a></div>
                <div><a href='/'><ImDribbble/> www.crigroups.com</a></div>
            </div>
        </>
    )
}

export default Body
