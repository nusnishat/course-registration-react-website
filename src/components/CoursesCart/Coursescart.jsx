import React from 'react';
import Coursecart from '../CourseCart/Coursecart';

const Coursescart = ({selectCourses, creditHour, creditPrice, creditRemaining}) => {
    return (
        <div className='md: ms-4 w-1/3 mx-auto bg-white rounded-md p-4 space-y-4'>
            <h1 className='text-blue-700 font-semibold mb-4'>Credit hour remaining : {creditRemaining}</h1>
            <hr />
            <h1 className='font-semibold'>Course Name: </h1>
            {
                selectCourses.map((selectCourse, indx) => <Coursecart key={indx} index={indx} selectCourse={selectCourse}></Coursecart>)
            }
            <hr />
            <h1>Total credit hour: {creditHour}</h1>
            <hr />
            <h1>Total price: {creditPrice} </h1>
        </div>
    );
};

export default Coursescart;