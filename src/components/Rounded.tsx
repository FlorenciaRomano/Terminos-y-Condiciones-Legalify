import React from 'react';

interface Props {
    label: string
}

export const Rounded: React.FC<Props> = ({ label }) => {

    return (
        <div className="mt-1 lg:my-6">
            <div className='font-semibold bg-legalify-primary text-white rounded-full w-6 h-6 text-center'>
                {label}
            </div>
        </div>
    )
}
