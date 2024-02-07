import React from "react";
import { useNavigate } from "react-router-dom";

function useForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    };

    if (formData.name.length < 3 || formData.name.length > 30) {
      newErrors.name = "Name should be between 3 and 30 characters";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    if (
      formData.password.length < 10 ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
    ) {
      newErrors.password =
        "Password should be at least 10 characters with one special character";
    }

    if (formData.repeatPassword !== formData.password) {
      newErrors.repeatPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      console.log("Form data is valid:", formData);
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { formData, errors, isSubmitted, handleChange, handleSubmit };
}

function MyForm() {
  const { formData, errors, isSubmitted, handleChange, handleSubmit } =
    useForm();
  const navigate = useNavigate();

  const handleSuccess = () => {
    // Redirecting after successful form submission
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {isSubmitted && (
          <div className={`success`} onClick={handleSuccess}>
            Form submitted successfully!{" "}
            <span> Click here to go to Books List</span>
          </div>
        )}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="error">{errors.name}</div>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>
        </div>

        <div>
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          <div className="error">{errors.repeatPassword}</div>
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default MyForm;
