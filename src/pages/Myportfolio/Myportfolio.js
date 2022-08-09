import React from 'react';
import photo from '../../assests/myphoto.jpg'
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Myportfolio = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='p-20'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className='pt-10 pl-10'>
                        <div className="avatar">
                            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photo} alt=' ' />
                            </div>
                        </div>
                    </div>
                    <div className="mx-10 py-10">
                        <h2 className="text-md text-accent font-semibold">Hello, I am</h2>
                        <h2 className="text-4xl font-semibold text-primary"> Mahbub Noyon</h2>
                        <p className='text-md font-semibold'>Junior Full Stack Web Developer</p>
                        <p className='text-md '>I am an expert in Front End and Backend Development with <span className='text-primary'>React JS | Node Js | MongoDB</span> </p>

                        <div className='mt-5 lg:flex justify-between '>
                            <ul>
                                <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaPhone></FaPhone></button> +8801687874697</Link></li>
                                <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaAddressCard></FaAddressCard></button>Kawlar Airport, Dhaka-1230</Link></li>
                                <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaWhatsapp></FaWhatsapp></button>01687874697</Link></li>
                                <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaEnvelope></FaEnvelope></button>mahbub4noyon96@gmail.com</Link></li>
                                <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaGlobe></FaGlobe></button>webapparchitect.com</Link></li>
                                <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaLinkedinIn></FaLinkedinIn></button>linkedin.com/in/mahbubnoyon/</Link></li>
                            </ul>
                            <div className='sm:mt-5 md:mt-5'>
                                <h2 className='text-xl text-accent'>Site That I have done Recently</h2>
                                <ul>
                                    <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaGlobe></FaGlobe></button>warehouse-management-630a3.firebaseapp.com</Link></li>
                                    <li><Link className='text-accent hover:text-primary' to='#'><button className='my-2 mr-2'><FaGlobe></FaGlobe></button>david-louise-fitness-trainer.web.app</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='mx-20'>
                    <h2 className='text-2xl text-primary font-semibold mb-3 '>About Myself</h2>
                    <div className='pb-5'>
                        <p>I am Mahbub Noyon. I am a Professional Web Designer and Developer. I am an expert in Front End and Backend Development with React JS, Node JS and WordPress. I am capable to make a mobile-friendly and faster responsive website. You can also get unique ideas about UX/UI Design to me. I have completed 50+ projects of various local clients. Also, I have expertise in creating an eCommerce website and theme development. I love my profession and building websites with my best efforts. I am also passionate to make Web Applications using React JS and Node JS</p>
                    </div>
                    <div>
                        <div className="stats shadow">
                            <div className="stat place-items-center">
                                <div className="stat-title">Emperiance</div>
                                <div className="stat-value">2+</div>
                                <div className="stat-desc">Years</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Projects</div>
                                <div className="stat-value text-primary">50+</div>
                                <div className="stat-desc text-primary">Complete</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Happy Clients </div>
                                <div className="stat-value">10+</div>
                                <div className="stat-desc">Running</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-20 pb-10 lg:ml-0 '>
                    <h2 className='text-2xl text-primary font-semibold mb-3'>My Skills</h2>
                    <div>
                        <div>HTML 90% <input type="range" min="0" max="100" value="90" placeholder='80' className="range range-primary range-xs" /></div>
                        <div>CSS 70% <input type="range" min="0" max="100" value="70" placeholder='80' className="range range-#F3F4F6 range-xs" /></div>
                        <div>Bootstart/Tailwind 90% <input type="range" min="0" max="100" value="90" placeholder='80' className="range range-primary range-xs" /></div>
                        <div>JavaScript 60% <input type="range" min="0" max="100" value="60" placeholder='80' className="range range-accent range-xs" /></div>
                        <div>React Js 80% <input type="range" min="0" max="100" value="80" placeholder='80' className="range range-primary range-xs" /></div>
                        <div>Node Js 50% <input type="range" min="0" max="100" value="50" placeholder='80' className="range range-success range-xs" /></div>
                        <div>Express Js 60% <input type="range" min="0" max="100" value="60" placeholder='80' className="range range-primary range-xs" /></div>
                        <div>MongoDB 70% <input type="range" min="0" max="100" value="70" placeholder='80' className="range range-warning range-xs" /></div>
                        <div>TypeScript 40% <input type="range" min="0" max="100" value="40" placeholder='80' className="range range-primary range-xs" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;