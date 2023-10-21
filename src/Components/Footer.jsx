import React from 'react';
import footerlogo from '../Assets/craftedsoleremv.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-sky-500 py-10 flex-col flex">
            <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                {/* Logo and Slogan */}
                <div className=" rounded-xl shadow-xl items-center text-center flex flex-col">
                    <div className="text-white text-2xl font-semibold">
                        <img src={footerlogo} alt="" />
                    </div>
                    <p className="text-white opacity-75 font-montserrat mt-2">Crafted For You</p>
                </div>

                {/* Instant Links */}
                <div className=" items-center flex flex-col text-center mt-4 shadow-xl w-[250px] rounded-md font-montserrat">
                    <h2 className="text-white text-lg font-semibold mb-3">Instant Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white hover:text-gray-200 transition">Home</a></li>
                        <Link to='/TermsConditions'><li><a href="#" className="text-white hover:text-gray-200 transition">T&C</a></li></Link>
                        <Link to='/AccDisplay'><li><a href="#" className="text-white hover:text-gray-200 transition">My Account</a></li></Link>
                        <li><a href="#" className="text-white hover:text-gray-200 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className=" w-[250px] mt-4 rounded-md shadow-xl font-montserrat flex flex-col items-center text-center">
                    <h2 className="text-white text-lg font-semibold mb-3">Categories</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white hover:text-gray-200 transition">Signatures</a></li>
                        <li><a href="#" className="text-white hover:text-gray-200 transition">Men</a></li>
                        <li><a href="#" className="text-white hover:text-gray-200 transition"> Couples &amp; Kids</a></li>
                        <li><a href="#" className="text-white hover:text-gray-200 transition">Women</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className=" w-[250px] mt-4 rounded-md shadow-xl items-center flex flex-col text-center font-montserrat">
                    <h2 className="text-white text-lg font-semibold mb-3">Contact Us</h2>
                    <p className="text-white opacity-75">Badlands, Umma University<br />Kajiado, Kenya<br />Contact@craft.com</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-white opacity-75 font-montserrat">
                &copy; 2023 Crafted Sole. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
