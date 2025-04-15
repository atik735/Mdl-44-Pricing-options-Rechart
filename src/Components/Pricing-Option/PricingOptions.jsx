import React, { use } from 'react';
import PricingCard from '../pricingCard/pricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);    
    return (
        <div className='my-8'>
            <h1 className='text-5xl px-2 mb-4'>Get Our Membership</h1>
        {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-15'>
            {
                pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            }
        </div> */}
<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-15 mx-48'>
            {
                pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
            }
        </div>
        </div>
    );
};

export default PricingOptions;