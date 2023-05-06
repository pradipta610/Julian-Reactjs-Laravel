//import hook react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// dulu use history skrng usenavigate namanya
import { useNavigate } from 'react-router';
import BeatLoader from 'react-spinners/BeatLoader';
//import axios
import axios from 'axios';

function Login() {
    //define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // loading animation
    const [loading, setLoading] = useState(false);
    //define state validation
    const [validation, setValidation] = useState([]);
    // useEffect(() => console.log(validation), [validation]);
    //define history
    const navigate = useNavigate();
    //hook useEffect
    useEffect(() => {

        //check token
        if (localStorage.getItem('token')) {

            //redirect page dashboard
            navigate('/dashboard');
        }
    }, []);

    //function "loginHanlder"
    const loginHandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data to server
        await axios.post('http://localhost:8000/api/login', formData)
            .then((response) => {

                //set token on localStorage
                localStorage.setItem('token', response.data.token);
                //redirect to dashboard page
                navigate('/dashboard');
            })
            .catch((error) => {
                //assign error to state "validation"
                // console.log(error)
                setValidation(error.response.data);
            })
        setLoading(false);

    };
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                {
                    validation.message && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            {validation.message}
                        </div>
                    )
                }
                <form className="mt-6" onSubmit={loginHandler}>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Email"
                        />
                        {
                            validation.email && (
                                <div className="alert alert-danger">
                                    {validation.email[0]}
                                </div>
                            )
                        }


                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"
                        />
                        {
                            validation.password && (
                                <div className="alert alert-danger">
                                    {validation.password[0]}
                                </div>
                            )
                        }

                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={loginHandler}>
                            {loading ? <BeatLoader color="#AC38D6" /> :
                                'login'}
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to={'/register'} className='font-medium text-purple-600 hover:underline'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )

}

export default Login;