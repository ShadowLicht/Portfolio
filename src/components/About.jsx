import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element name="about">
            <section className="py-16 md:py-28 min-h-screen px-4 overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-12">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">About Me</h2>

                    {/* Intro Text */}
                    <div className="space-y-4 text-center text-gray-500 max-w-3xl">
                        <p>
                            I'm a Full Stack Developer with hands-on experience in building modern web applications using the
                            MERN stack (MongoDB, Express.js, React, and Node.js), Laravel with Inertia.js, and Tailwind CSS.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
                        {/* Frontend */}
                        <div
                            className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white w-full max-w-sm mx-auto"
                            data-aos="fade-down"
                            data-aos-duration="1200"
                        >
                            <h1 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
                                Frontend Development
                            </h1>
                            <h2 className="text-base text-gray-500 mb-4">
                                Building responsive and interactive user interfaces
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {['React', 'JavaScript', 'TypeScript', 'Tailwind'].map(skill => (
                                    <span
                                        key={skill}
                                        className="py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div
                            className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white w-full max-w-sm mx-auto"
                            data-aos="fade-down"
                            data-aos-duration="2000"
                        >
                            <h1 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
                                Backend Development
                            </h1>
                            <h2 className="text-base text-gray-500 mb-4">
                                Server-side development and API design
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {['Node.js', 'Php', 'Python', 'Mysql', 'MongoDB', 'REST APIs'].map(skill => (
                                    <span
                                        key={skill}
                                        className="py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div
                            className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white w-full max-w-sm mx-auto"
                            data-aos="fade-down"
                            data-aos-duration="2800"
                        >
                            <h1 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
                                Tools & Platforms
                            </h1>
                            <h2 className="text-base text-gray-500 mb-4">
                                Development tools and deployment platforms
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {['Git', 'Docker', 'AWS', 'Vercel', 'VS Code'].map(tool => (
                                    <span
                                        key={tool}
                                        className="py-1 bg-gray-100 rounded-full font-bold text-sm text-gray-700 text-center"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default About;
