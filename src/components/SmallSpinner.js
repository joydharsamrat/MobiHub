import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const SmallSpinner = () => {
    return (
        <ThreeDots
            height="50"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
};

export default SmallSpinner;