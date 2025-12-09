import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Menuleft = () => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 10,
                speed: 100,
                glare: false,
                "max-glare": 0.3,
            });
        }
    }, []);

    return (
        <div className='hidden sm:flex sm:w-2/3 h-screen sm:py-14 sm:px-25 relative'>
            <div ref={tiltRef} className='h-full relative w-full'>
                <img className='absolute opacity-5 scale-[0.98] object-cover h-full w-full' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-10 scale-[0.93] object-cover h-full w-full' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-20 scale-[0.87] object-cover h-full w-full' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-30 scale-[0.82] object-cover h-full w-full' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-40 scale-[0.75] object-cover h-full w-full' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
                <img className='absolute opacity-50 object-cover h-full w-full' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
            </div>
        </div>
    );
};

export default Menuleft;
