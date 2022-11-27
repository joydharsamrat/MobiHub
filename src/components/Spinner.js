import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <InfinitySpin
                width='200'
                color="#004aad"
            />
        </div>
    );
};

export default Spinner;