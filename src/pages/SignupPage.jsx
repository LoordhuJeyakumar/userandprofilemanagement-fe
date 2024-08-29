import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { setSignupData } from "../redux/slices/userSlice";
import { register } from "../services/userService";
import { toast } from "react-toastify";

function SignupPage() {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { signupData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  });


  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSignupSubmit = async (values, { resetForm }) => {
    setIsSubmitted(true);
    // Dispatch the form data to Redux store
    dispatch(setSignupData(values));

    try {
      const res = await register(values);

     

      if (res.success) {
      

        setIsSubmitted(false);
        toast.success(res.data.data.message);
        setSignupData(res.data.data);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        resetForm();
      } else {
        setIsSubmitted(false);
        if (res.error.response) {
          toast.error(res.error.response.data.error);
          resetForm();
          return;
        }
        toast.error(res.error.message);
        resetForm();
        return;
      }
    } catch (error) {
      console.log(error);
      resetForm();
      if (error.code === "ERR_NETWORK") {
        toast.error("Network error, please try again later");
        setIsSubmitted(false);
        console.log(error);
        return;
      }

      toast.error(error.response.data.message);
      setIsSubmitted(false);
      return;
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="row justify-content-center flex-row card mx-5 mt-4 p-5 signup-box pt-5 w-75">
        <div className="col-lg-6 col-xxl-6 d-flex align-items-center order-md-0 order-1 justify-content-center text-md-start text-center">
          <div className="signup-content">
            <h2 className="fw-bold">User and Profile</h2>
            <h3>Management System</h3>
            <p>Create an account to get started</p>
            <h6>Key Features</h6>
            <span>
              Manage users and their profiles | Easy to use interface | Secure
              data
            </span>
          </div>
        </div>

        <div className="col-md-8 col-lg-6 col-xxl-5 order-md-1 order-0">
          <div className="card mb-0">
            <div className="card-body">
              <h3 className="text-center mb-4">Register here</h3>
              <hr />

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSignupSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="signup-form">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter Username"
                        autoComplete=""
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address"
                        autoComplete=""
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        autoComplete=""
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-4 rounded-2 signup-btn"
                      disabled={isSubmitting}
                    >
                      Sign Up <i className="bi bi-arrow-right-short"></i>
                      {isSubmitted && (
                        <span className="spinner-border spinner-border-sm ms-2"></span>
                      )}
                    </button>

                    <div className="d-flex align-items-center justify-content-center">
                      <span className="mb-0 fw">Already have an Account?</span>
                      <Link className="text-primary fw-bold ms-2" to={"/login"}>
                        Sign In
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
