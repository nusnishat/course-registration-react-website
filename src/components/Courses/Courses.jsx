import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('fakeDb.json')
        .then(res=> res.json())
        .then(data => setCourses(data))
    }, [])
    
    return (
        <div className='md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {courses.map(course => <Course key={course.id} handleSelect={handleSelect} course= {course}></Course>)}
        </div>
    );
};

export default Courses;