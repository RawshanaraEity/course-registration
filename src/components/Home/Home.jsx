/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';
	



const Home = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCredit, setTotalCredit] = useState(0)
    const [remaining, setRemaining] = useState(20)
    

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setAllCourse(data))
    },[])
    

    const handleSelectCourse = (course) =>{
        const isSelected = selectedCourse.find(item => item.id === course.id)

        let price = course.price;
        let credit = parseInt(course.credit)
        
        if(isSelected){
           return toast.error('You have already selected this course', {
                position: 'top-center',
                autoClose: 2000,
              });
        }
        else{
            selectedCourse.forEach(item => {
                price = price + item.price
                credit = credit + parseInt(item.credit)
            })
        
            const remainingHour = 20 - credit;

            if(remainingHour < 0 || credit > 20){
               return toast.error('You have not enough credit remaining hour', {
                    position: 'top-center',
                    autoClose: 2000,
                  });
            }
            setTotalCredit(credit)
            setRemaining(remainingHour)
            setTotalPrice(price)

            const newSelectedCourse = [...selectedCourse, course];
            setSelectedCourse(newSelectedCourse)
        }
    }

    return (
        <div>
            <h1 className='header'>Course Registration</h1>
            <div className="container">
                <div className="card-container">
                    {
                        allCourse.map(course => (
                            <div key={course.id} className="card">
                        <img src={course.image} alt="" />
                        <h2 className='card-title'>{course.title} </h2>
                        <p className='card-description'>{course.description}</p>
                        <div className='card-info'>
                            <p>$ Price: {course.price}</p>
                            <p>credit: {course.credit}hr</p>
                        </div>
                        <button onClick={() => handleSelectCourse(course)} className='card-btn'>Select</button>
                    </div>
                        ))
                    }
                </div>
                <div className="cart-container">
                    <div className="cart">
                        <Cart 
                        selectedCourse={selectedCourse}
                        totalPrice = {totalPrice}
                        totalCredit = {totalCredit}
                        remaining ={remaining}
                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;