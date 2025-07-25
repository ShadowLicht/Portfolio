import React, { useEffect, useState } from "react";
import { NotebookText, Github, Linkedin, Mail } from 'lucide-react';
import { Link as LinkS, Element } from 'react-scroll';

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
            <section
                id="hero"
                className="py-32 md:py-48 lg:py-64 min-h-screen flex items-center justify-center text-center px-4"
            >
                <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
                    {/* Heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Hi, I'm <span className="text-primary">Willard</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-500">{typedText}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <LinkS
                            to="project"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="p-3 w-32 bg-black border-2 rounded-xl text-white hover:bg-gray-900 text-center cursor-pointer"
                        >
                            My Work
                        </LinkS>
                        <a
                            href="/resume.pdf"
                            className="p-3 w-40 bg-white border rounded-xl text-black flex items-center justify-center hover:bg-slate-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <NotebookText className="mr-2 h-4 w-4" />
                            Resume
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
                        <a
                            href="https://github.com/ShadowLicht"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="h-6 w-6 hover:text-gray-700" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/willard-kent-de-los-santos/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-6 w-6 hover:text-gray-700" />
                        </a>

                        <a
                            href="mailto:willardkentdelossantos@gmail.com"
                            aria-label="Email"
                        >
                            <Mail className="h-6 w-6 hover:text-gray-700" />
                        </a>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Hero;
