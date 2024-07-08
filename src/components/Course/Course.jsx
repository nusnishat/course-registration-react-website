import React from 'react';

const Course = ({course, handleSelect}) => {
    const{ title, img, description, credit, price} = course;

    return (
        <div className='bg-white rounded-md px-4 py-4 space-y-4'>
            <img className='text-center mx-auto w-full' src={img} alt="" />
            <h1 className='text-md font-semibold'>{title}</h1>
            <p className='text-sm text-gray-700'>{description}</p>
            <div className='flex justify-between text-gray-700'>
                <div className='text-sm '>
                    <span className='space-x-3 '>Price: {price}</span>
                </div>
                <div>
                    <span className='space-x-3'>Credit: {credit} hr</span>
                </div>
            </div>
            <button onClick={()=>handleSelect(course)} className='bg-blue-600 px-20 rounded-md text-center mx-auto text-white font-semibold'>Select</button>
        </div>
    );
};

export default Course;