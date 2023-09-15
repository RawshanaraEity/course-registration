/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectedCourse, totalPrice, totalCredit, remaining}) => {
    return (
        <div>
            <h4 className='remaining-hour'>Credit Hour Remaining {remaining} hr</h4>
                        <hr />
                        <h3>Course Name</h3>
                        <ol className="selected-course">
                        {
                            selectedCourse.map((course, idx) => (
                                <li key={idx}>
                                    {course.title}
                                </li>
                            ))
                        }
                        </ol>
                        <hr />
                        <p>Total Credit Hour: {totalCredit}</p>
                        <hr />
                        <p>Total Price: {totalPrice} USD</p>
        </div>
    );
};

export default Cart;