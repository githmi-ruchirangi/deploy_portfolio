import { Input } from "postcss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
            <p className="heading_mini">Get in Touch</p>
            <h1 className="heading_primary">Let's make your <span className="text-yellow-300">Brand</span> brilliant</h1>
            <p className="text-[15px] text-white mt-[1rem] opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Kuis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.ea Lorem ipsum dolor sit</p>
                <h1 className="mt-[2rem] mb-[2rem] text-[17px] text-yellow-300 underline font-bold flex items-center">
                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +94 71 919 0880
                    </h1>
                    <h1 className="mt-[2rem] mb-[2rem] text-[17px] text-yellow-300 underline font-bold flex items-center cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> dilanthaweerakoon@gmail.com
                    </h1>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input 
        type="text" 
        placeholder="Name" 
        className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
      />
      <input 
        type="email" 
        placeholder="E-mail" 
        className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
      />
            </div>
            <input type="text" placeholder="Subject" className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md
            px-4"/>
            <textarea placeholder="Message" className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 px-4 rounded-md" rows={4}></textarea>
            <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-600 hover:bg-blue-800 rounded-md
            px-4" >Submit</button>
        </div>
        </div>
    </div>
    );
};
export default Contact;