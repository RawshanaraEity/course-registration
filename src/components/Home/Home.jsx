/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';

const Home = () => {
    const [allCourse, setAllCourse] = useState([])
    

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setAllCourse(data))
    },[])
    

    return (
        <div>
            <h1>Course Registration</h1>
            <div className="container">
                <div className="card-container">
                    {
                        allCourse.map(course => (
                            <div className="card">
                        <img src={course.image} alt="" />
                        <h2 className='card-title'>{course.title} </h2>
                        <p className='card-description'>{course.description}</p>
                        <div className='card-info'>
                            <p>$ Price: {course.price}</p>
                            <p>credit: {course.credit}hr</p>
                        </div>
                        <button className='card-btn'>Select</button>
                    </div>
                        ))
                    }
                </div>
                <div className="cart">

                </div>
            </div>
        </div>
    );
};

export default Home;