//import hook react
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
//import hook useHitory from react router dom
// dulu use history skrng usenavigate namanya
import { useNavigate } from 'react-router';

//import axios
import axios from 'axios';

function Register() {
    //define state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    //define state validation
    const [validation, setValidation] = useState([]);

    //define history
    const navigate = useNavigate();

    //function "registerHanlder"
    const registerHandler = async (e) => {
        e.preventDefault();

        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);

        //send data to server
        await axios.post('http://localhost:8000/api/register', formData)
            .then(() => {

                //redirect to logi page
                navigate('/dashboard');
            })
            .catch((error) => {

                //assign error to state "validation"
                setValidation(error.response.data);
            })
    };
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign Up
                </h1>
                <form className="mt-6" onSubmit={registerHandler}>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"
                        />
                        {
                            validation.name && (
                                <div className="alert alert-danger">
                                    {validation.name[0]}
                                </div>
                            )
                        }
                    </div>
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
                                <div classemail="alert alert-danger">
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
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password Konfirmasi
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password"
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link to={'/login'} className='font-medium text-purple-600 hover:underline'>
                    Sign In
                    </Link>
                </p>
            </div>
        </div>
    )

}

export default Register;