import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const FeaturedData = ({feature}) => {
    return (
        <div className='leading-9'>
            <p className='flex items-center gap-2'> <CircleCheckBig></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default FeaturedData;