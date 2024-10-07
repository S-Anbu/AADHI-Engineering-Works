// import React from 'react';
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
// import email from "../../assets/Contact/email.svg";
// import address from "../../assets/Contact/address.svg";
// import phone from "../../assets/Contact/smartphone.svg";
// import location from "../../assets/Contact/location.svg";



import React from 'react';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ysaiwga', 'template_dyjscn3', form.current, {
                publicKey: 'SQ1CD8GNjOS0JXRuE',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <Element className='' id='Contacts' name='Contact'>
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                            Contact
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>
                <div className=" flex flex-col lg:flex-row items-center justify-center gap-10">

                    <form
                        ref={form} onSubmit={sendEmail}
                        data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
                        className="bg-white p-8 rounded-md shadow-xl w-full max-w-sm md:max-w-lg"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact us</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600">First Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600">Last Name</label>
                                <input
                                    type="text"
                                    name="last_Name"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                    placeholder="Last Name"

                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm text-gray-600">Message</label>
                            <textarea
                                name="message"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                                placeholder="Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                value="Send"
                                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                    <div className=" text-xl sm:text-2xl p-6 rounded-lg w-fit " data-aos="fade-down"  data-aos-delay="50" data-aos-duration="2000">
                        <div className="flex items-center mb-4">
                            <MdEmail className="mr-3 text-2xl" /> {/* Email Icon */}
                            <span className=' text-sm md:text-2xl font-semibold'>aadhiengineeringworks2021@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <MdPhone className="mr-3 text-2xl" /> {/* Phone Icon */}
                            <span className='font-semibold text-sm md:text-2xl'>  +91 9865219547</span>
                            <span className='font-semibold text-sm md:text-2xl'>  / +91 7397089417</span>
                        </div>
                        <div className="flex items-center">
                            <MdLocationOn className="mr-3 text-2xl" /> {/* Location Icon */}
                            <div className='font-semibold text-sm md:text-2xl'>
                                <p>NO:10 Pillaiyar Kovil Street,</p>
                                <p>Periyakalaprt, Puducherry-14</p>
                                <p>Landmark: Near Fire Station</p>
                            </div>


                        </div>
                        <div  className="mt-4 hidden lg:flex items-center space-x-5 " >
                            <a href="https://wa.me/+919865219547" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></svg>
                            </a>
                            <a href="https://github.com/S-Anbu/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
                            </a>
                            <a href="https://wa.me/+919865219547" target="_blank">
                                <img src="https://api.iconify.design/logos:whatsapp-icon.svg?color=%23888888" width={50} alt="Whatsapp" />
                            </a>
                            <a href="https://wa.me/+919865219547" target="_blank">
                                <img src="https://api.iconify.design/skill-icons:instagram.svg?color=%23888888" width={50} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
};

export default Contact;
