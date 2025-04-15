import React from 'react';
import FeaturedData from './FeaturedData';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    const {price,name,description,features} =pricing
    return (
        <div className='bg-slate-300 p-5 rounded-2xl flex flex-col'>
            <h1 className='text-4xl font-medium'>{name}</h1>
            <h3 className='text-2xl'>{price}</h3>
            
            <div className='bg-sky-400 mt-5 rounded-2xl p-3 flex-1'>
            <p className='mb-2'>{description}</p>

            {
                features.map((feature,index) => <FeaturedData feature={feature} key={index}></FeaturedData>)
            }
            </div>
            <button className="btn bg-black rounded mt-5 text-white w-full">Wide</button>
        </div>
    );
};

export default PricingCard;