import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/deere-logo-agriculture.svg'

const Footer = () => {
const year = new Date().getFullYear()
    return (
        <div >
            <div class="footer p-10 bg-neutral text-accent">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Equipment</a>
                    <a class="link link-hover">Find a Dealer</a>
                    <a class="link link-hover">Buy Online</a>
                    <a class="link link-hover">Build Your Own</a>
                </div>
                <div>
                    <span class="footer-title">About Our Company</span>
                    <a class="link link-hover">Our Higher Purpose</a>
                    <a class="link link-hover">Innovation</a>
                    <a class="link link-hover">Sustainability</a>
                    <a class="link link-hover">Diversity Equity & Inclusion</a>
                </div>
                <div>
                    <span class="footer-title">John Deere News</span>
                    <a class="link link-hover">The Furrow</a>
                    <a class="link link-hover">The Dirt</a>
                    <a class="link link-hover">The Landing</a>
                    <a class="link link-hover">Worksite Journal</a>
                </div>
                <div>
                    <span class="footer-title">Factory Tours</span>
                    <a class="link link-hover">John Deere Historic Site</a>
                    <a class="link link-hover">John Deere Pavilion</a>
                    <a class="link link-hover">John Deere Tractor & Engine Museum</a>
                    <a class="link link-hover">John Deere Rewards</a>
                </div>
            </div>
            <div class="footer footer-center p-10 bg-neutral text-accent">
                <div>
                    <img src={logo} alt="" />
                    <div className='block w-3/4'>
                        <Link to='#' class="link link-hover">Site Map | </Link> 
                        <Link to='#' class="link link-hover">Privacy and Data | </Link> 
                        <Link to='#' class="link link-hover">Cookie Statement | </Link> 
                        <Link to='#' class="link link-hover">Terms of Use | </Link>
                        <Link to='#' class="link link-hover">Accessibility | </Link>
                        <Link to='#' class="link link-hover">Contact Us | </Link>
                        <Link to='#' class="link link-hover">Cookie Preferences</Link>
                    </div>
                    <p>Copyright © {year} - All right reserved</p>
                </div>
                <div>
                    <div class="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;