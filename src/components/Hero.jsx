import React, { useEffect, useState } from "react";
import { NotebookText, Github, Linkedin, Mail, } from 'lucide-react'
import { Link as LinkS } from 'react-scroll';
import { Link } from 'react-router'
import { Element } from 'react-scroll';

const Hero = () => {

    const [typedText, setTypedText] = useState("");

    const simulateTyping = (text, delay = 60) => {
        return new Promise((resolve) => {
            let currentText = "";
            let index = 0;

            const interval = setInterval(() => {
                currentText += text[index];
                index++;

                setTypedText(currentText);

                if (index === text.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, delay);
        });
    };

    useEffect(() => {
        const message =
            "A Full-Stack Developer focusing on creating beautiful, functional web experiences";
        simulateTyping(message);

    }, []);

    return (
        <Element name="hero">

            <section id="hero" className="py-64 min-h-screen overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-8 ">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Hi, I'm <span className="text-primary">Willard</span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-lg text-gray-500 md:text-xl">
                            {typedText}
                        </p>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <LinkS to="project" smooth={true}
                            duration={500}
                            offset={-80} className="p-3 w-32 bg-black border-2  rounded-xl text-white hover:bg-gray-900 text-center cursor-pointer" >My Work</LinkS>
                        <a href="/resume.pdf" className="p-3 w-40 bg-white border-[1px] rounded-xl text-black flex items-center justify-center hover:bg-slate-200" >
                            <NotebookText className="mr-2 h-4 w-4" /> Resume
                        </a>
                    </div>

                    <div className="flex items-center space-x-8" >

                        <Link to="https://github.com/ShadowLicht" target="_blank" >
                            <Github className="h-5 w-5" />
                        </Link>


                        <Link to="https://www.linkedin.com/in/willard-kent-de-los-santos/" target="_blank" >
                            <Linkedin className="h-5 w-5" />
                        </Link>


                        <Link to="mailto:willardkentdelossantos@gmail.com" >
                            <Mail className="h-5 w-5" />
                        </Link>

                    </div>
                </div>
            </section>
        </Element >

    )
}

export default Hero