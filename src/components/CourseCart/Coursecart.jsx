import React from 'react';

const Coursecart = ({selectCourse, index}) => {
    const {title}= selectCourse;
    return (
        <div>
            <ul className='text-gray-700'>
            <li>{index+1}. <span className='ms-2'>{title}</span></li>
            </ul>
        </div>
    );
};

export default Coursecart;