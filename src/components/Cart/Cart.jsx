/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectedCourse}) => {
    return (
        <div>
            <h4>Credit Hour Remaining 7 hr</h4>
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
                        <p>Total Credit Hour:</p>
                        <hr />
                        <p>Total Price:</p>
        </div>
    );
};

export default Cart;