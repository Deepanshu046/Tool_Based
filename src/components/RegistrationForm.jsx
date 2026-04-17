import {useState} from "react";
function RegistrationForm() {   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        course:"",
    });
    //for handling form data 
    const handleChange = (e) => {
        const{name , value} = e.target; //destructuring the name and value from the event target
        setFormData({
            ...formData,
            //updating the form data by using the spread operator to copy the existing form data and then updating the specific field that has changed
            [name]:value}
        ) 
    }
    
    //for handling form submission
    const handlesubmit = (e) => {
        e.preventDefault(); //preventing the default form submission behavior
        console.log("Form submitted:", formData); //logging the form data to the console    
        alert('Welcome, ' + formData.name + '! You have successfully registered for the ' + formData.course + ' course.'); //displaying an alert with the user's name and course
    }

    return(
        <div className="max-w-md p-6 mx-auto bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">Registration Form</h2>
            <form onSubmit={handlesubmit}>
            <input type="text"
            name  = 'name'
            placeholder="Enter your name"   
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            
            />
            <input 
            type="email"
            name  = 'email'
            placeholder="Enter your email"   
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            
            />
            <input type="password"
            name  = 'password'
            placeholder="Enter your password"   
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            
            />
            <input 
            type="text"
            name  = 'course'
            placeholder="Enter your course name"   
            value={formData.course}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            
            />
            <input type="radio" name="gender" value="male" onChange={handleChange} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="female" onChange={handleChange} />
            <label htmlFor="female">Female</label>
            <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit" >
                Register
            </button>
            </form>

            {/* formdata display */}
            <div className="mt-4 p-4 bg-gray-100 rounded text-left">
                <h3 className="text-lg font-bold mb-2">Form Data:</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Password:</strong> {formData.password}</p>
                <p><strong>Course:</strong> {formData.course}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
            </div>

        </div>
    )


}
export default RegistrationForm