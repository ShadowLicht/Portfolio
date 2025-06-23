import React from 'react'
import { Element } from 'react-scroll';
const About = () => {
    return (
        <Element name="about">
            <section className=" py-28  min-h-screen overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
                    <div className="space-y-4 text-center text-gray-500">
                        <p>
                            I'm a Full Stack Developer with hands-on experience in building modern web applications using
                            <br />the MERN stack (MongoDB, Express.js, React, and Node.js), Laravel with Inertia.js, and Tailwind CSS.
                        </p>

                    </div>
                    <div className="flex flex-row space-x-4 ">
                        <div className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white max-w-sm" data-aos="fade-down" data-aos-duration="1200">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
                                Frontend Development
                            </h1>
                            <h2 className="text-base text-gray-500 mb-4">
                                Building responsive and interactive user interfaces
                            </h2>

                            <div className="grid grid-cols-4 gap-3">
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    React
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    JavaScript
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    TypeScript
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    Tailwind
                                </span>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white max-w-sm" data-aos="fade-down" data-aos-duration="2000">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
                                Backend Development
                            </h1>
                            <h2 className="text-base text-gray-500 mb-4">
                                Server-side development and API design
                            </h2>

                            <div className="grid grid-cols-4 gap-3">
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    Node.js
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    Php
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    Python
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    Mysql
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    MongoDB
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    REST APIs
                                </span>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white max-w-sm" data-aos="fade-down" data-aos-duration="2800">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
                                Tools & Platforms
                            </h1>
                            <h2 className="text-base text-gray-500 mb-4">
                                Development tools and deployment platforms
                            </h2>

                            <div className="grid grid-cols-4 gap-3">
                                <span className="py-1 bg-gray-100 rounded-full  font-bold text-sm text-gray-700 text-center">
                                    Git
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    Docker
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    AWS
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    Vercel
                                </span>
                                <span className=" py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center">
                                    VS Code
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </Element>
    )
}

export default About