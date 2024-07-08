import './App.css'
import Courses from '../src/components/Courses/Courses'
import Coursescart from './components/CoursesCart/Coursescart'
import { useState } from 'react'
function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const handleSelect = course =>{
    const newCourse = [...selectCourses, course];
    setSelectCourses(newCourse);
    console.log(selectCourses);
  }

  return (
    <>
      <div className='bg-stone-100 py-10'>
        <h1 className='text-2xl font-bold text-center'>Course Registration</h1>
        <div className=' mt-10 mx-20 md:flex'>
          <Courses handleSelect ={handleSelect}></Courses>
          <Coursescart></Coursescart>
        </div>
      </div>
    </>
  )
}

export default App
