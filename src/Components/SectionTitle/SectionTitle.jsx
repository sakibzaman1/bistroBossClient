import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center py-16'>
            <p className='mb-6 text-yellow-600 text-xl'>{subHeading}</p>
            <h2 className='text-4xl border-y-2 w-3/12 mx-auto py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;