import "./App.css";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          setIsSubmitted(true);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
            <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
              <h1 className="font-bold text-center block text-2xl">Log In</h1>
              <form noValidate onSubmit={handleSubmit}>
                <label className="text-gray-500 block mt-3">
                  Email Address
                  <input
                    autoFocus={true}
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email id"
                    className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                  <p className="text-red-600">
                    {errors.email && touched.email && errors.email}
                  </p>
                </label>
                <label className="text-gray-500 block mt-3">
                  Password
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
                  />
                  <p className="text-red-600">
                    {errors.password && touched.password && errors.password}
                  </p>
                </label>
                {isSubmitted && (
                  <p className="text-green-600">Successfully logged in</p>
                )}
                <button
                  type="submit"
                  className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default App;
