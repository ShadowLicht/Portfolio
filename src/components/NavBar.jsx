import React from 'react'
import { Link } from 'react-scroll';



const NavBar = () => {



    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-b-slate-300 z-50">

            <div className="mx-auto max-w-full p-4 px-24">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight justify-end">Willard De los Santos</h1>
                    <div className="flex items-center gap-4">
                        <nav className="flex items-center space-x-6 text-sm font-medium">

                            <Link to="hero" smooth={true}
                                duration={500}
                                offset={-80} className="hover:text-foreground/80 cursor-pointer">
                                Intro
                            </Link>
                            <Link to="about" smooth={true}
                                duration={500}
                                offset={-80} className="hover:text-foreground/80 cursor-pointer">
                                About
                            </Link>
                            <Link to="experience" smooth={true}
                                duration={500}
                                offset={-80} className="hover:text-foreground/80 cursor-pointer">
                                Experience
                            </Link>
                            <Link to="project" smooth={true}
                                duration={500}
                                offset={-80} className="hover:text-foreground/80 cursor-pointer">
                                Project
                            </Link>


                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar