import React from 'react';

function TextField({label, inputProps, onChange, values}) {
    return (
        <div className='flex flex-col'>
            <label className='mb-2 text-base text-gray-800'>{label}</label>
            <input 
            className='bg-gray-200 py-2 px-3 border-2 outline-none'
            {...inputProps}
            onChange={onChange}
            value={values}
            />
        </div>
    );
}

export default TextField;