import React from 'react';
import Carousel from '../ui/ImageCarousel';
import { IconButton } from "@material-tailwind/react";

export default function Landing() {
    return (
        // <main className="section-landing flex flex-col xl:flex-row justify-center items-center md:h-[calc(100vh-_128px)] lg:h-[calc(100vh-_160px)] xl:h-[calc(100vh-_160px)]">
        <main className="section-landing flex flex-col xl:flex-row justify-center items-center md:h-100vh lg:h-[calc(100vh-_160px)] xl:h-[calc(100vh-_160px)] md:py-16">
            <article className="wrapper xl:flex flex-row-reverse lg:my-16 xl:my-16 max-w-7xl px-4 md:px-8 sm:pb-8">
                <header className='md:hidden text-2xl py-8'>JOONHEE SENIOR LIVING OF KIRKLAND</header>

                <section className="content-img xl:w-1/2 xl:px-4 xl:px-12">
                    <Carousel />
                </section>

                <section className="content md:flex justify-center w-full xl:w-1/2 px-4">
                    <div className="max-w-xl text-black xl:p-12 xl:text-left lg:text-left sm:px-4 sm:text-left">
                        <h1 className='md:text-center lg:text-left text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl md:mb-2'>
                            <span className='sm:hidden'>JOONHEE SENIOR LIVING OF KIRKLAND</span>
                        </h1>
                        <h2 className='md:text-center lg:text-left text-4xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-6xl mb-6 leading-tight'>
                            Welcome Home to Your ʻJoonhee!
                        </h2>

                        <p className="md:text-center lg:text-left text-xl xl:text-3xl mb-4">
                            Experience 24/7 competent care in our lovely adult family home, tailored to your safety and personal needs.
                        </p>

                        <div className="flex flex-row justify-center items-center sm:justify-start md:justify-center lg:justify-start text-lg xl:text-xl  lg:pt-16 xl:pt-16">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                            <div className="pl-2 hover:text-black hover:underline">

                                <a href="/contact">Contact Us</a>

                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}
