import React from 'react'
import  Hero from '@/components/marketing/home/Hero';
import Awards from '@/components/marketing/home/Awards';
import Stats from '@/components/marketing/home/Stats';
import Education from '@/components/marketing/home/Education';
import Pricing from '@/components/marketing/home/Pricing';
import OpenAccount from '@/components/marketing/home/OpenAccout';

export default function Home() {
    return (
        <div className="flex flex-col bg-white">
            <Hero />
            <Awards />
            <Stats />
            <Pricing/>
            <Education />
            <OpenAccount />
        </div>
      
    )
}