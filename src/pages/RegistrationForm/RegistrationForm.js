import React, { useState, useEffect } from 'react'
import './RegistrationForm.css'
import picture from '../../assets/Picture1.png'
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {

  const navigate = useNavigate();

  const initialValues = { email: '', password1: '', password2: '', fullname: '', phone: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      navigate('/chart')
    }
  }, [formErrors, formValues, isSubmit, navigate]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullname) {
      errors.fullname = "Full Name is required!"
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password1) {
      errors.password1 = "Password is required!"
    }
    else if (values.password1.length < 6) {
      errors.password1 = "Password must be more than 6 characters!"
    }
    if (!values.password2) {
      errors.password2 = "Password is required!"
    } else if (values.password1 !== values.password2) {
      errors.password1 = "Password Doesn't Match"
      errors.password2 = "Password Doesn't Match"
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!"
    }
    else if (values.phone.length < 11) {
      errors.phone = "Phone Number should be more than 11 digit!"
    }
    return errors;
  }

  return (
    <div className='box'>
      <div className="left">
        <div className="left-image">
          <img src={picture} alt="" />
        </div>
        <div className='left-text'>
          <h3>Choose a date range</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque incidunt ipsa rerumm.</p>
        </div>
      </div>
      <div className="right">
        <div className="right-container">
          <h3>Create an account</h3>
          <form className='right-form' onSubmit={handleSubmit}>
            <label>Your email address</label>
            <input type="email" name="email" id="email" value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
            <label>Your password</label>
            <input type="password" name="password1" id="password1" value={formValues.password1}
              onChange={handleChange}
            />
            <p>{formErrors.password1}</p>
            <label>Confirm your password</label>
            <input type="password" name="password2" id="password2" value={formValues.password2}
              onChange={handleChange}
            />
            <p>{formErrors.password2}</p>
            <label>Your full name</label>
            <input type="text" name="fullname" id="fullName"
              value={formValues.fullname}
              onChange={handleChange}
            />
            <p>{formErrors.fullname}</p>
            <label>Your phone number</label>
            <input type="tel" name="phone" id="phone" value={formValues.phone}
              onChange={handleChange}
            />
            <p>{formErrors.phone}</p>
            <div className="form-input-checkbox">
              <input type="checkbox" className='myInput' name="checkboxmark" id="terms"
                required
              />
              <label htmlFor="terms">I read and agree Terms and Conditions</label>
            </div>
            <input type="submit" value="Create account" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm