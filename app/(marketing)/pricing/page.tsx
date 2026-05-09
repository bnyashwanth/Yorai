import React from 'react'
import Hero from '@/components/marketing/products/hero';
import LeftSection from '@/components/marketing/products/LeftSection';
import RightSection from '@/components/marketing/products/RightSection';
import Universe from '@/components/marketing/products/Universe';

export default function Products(){
    return (
        <div>
            <Hero />
            <LeftSection imageURL={''} productName={''} productDesription={''} tryDemo={''} learnMore={''} googlePlay={''} appStore={''} />
            <RightSection imageURL={''} productName={''} productDesription={''} learnMore={''} />
            <Universe />
            
        </div>
    )
}
