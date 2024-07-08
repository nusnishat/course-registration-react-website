import './App.css'
import Courses from '../src/components/Courses/Courses'
import Coursescart from './components/CoursesCart/Coursescart'
import { useState } from 'react'
function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [creditPrice, setCreditPrice] = useState(0);
  const [creditHour, setCreditHour] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);

  const handleSelect = course =>{
    const addedCourse = selectCourses.find(selectCourse => selectCourse.id === course.id)

    if(!addedCourse)
    {
      const newCreditHour = creditHour + parseInt(course.credit);
      
      if(newCreditHour<=20)
      {
        const newCourse = [...selectCourses, course];
        setSelectCourses(newCourse);

        const newCreditPrice = creditPrice + parseInt(course.price);
        setCreditPrice(newCreditPrice);
         
        setCreditHour(newCreditHour); 
         
        const newRemainingCredit = 20 - newCreditHour;
        setCreditRemaining(newRemainingCredit); 
      }
      else{
        alert('You have crossed total credit hour')
      }
    }
    else{
      alert("already added");
    }
    console.log(creditHour, creditPrice, selectCourses);

  }

  return (
    <>
      <div className='bg-stone-100 py-10'>h
        <h1 className='text-2xl font-bold text-center'>Course Registration</h1>
        <div className=' mt-10 mx-20 md:flex'>
          <Courses handleSelect ={handleSelect}></Courses>
          <Coursescart creditRemaining ={creditRemaining} creditHour={creditHour} creditPrice={creditPrice} selectCourses={selectCourses}></Coursescart>
        </div>
      </div>
    </>
  )
}

export default App
