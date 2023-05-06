//import hook react
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Sidebar from '../widgets/dashboard-layout/sidebar';
import Navbar from '../widgets/dashboard-layout/navbar';
//import hook useHitory from react router dom
import { useNavigate } from 'react-router';
//import axios
import axios from 'axios';
function Dashboard() {
    const [sidebar, setSidebar] = useState(false);

    const [loading, setLoading] = useState(false);

    //state user
    const [user, setUser] = useState({});

    //define history
    const navigate = useNavigate();

    //token
    const token = localStorage.getItem("token");

    //function "fetchData"
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get('http://localhost:8000/api/user')
            .then((response) => {

                //set response user to state
                setUser(response.data);
            })
    }



    //hook useEffect
    useEffect(() => {

        //check token empty
        if (!token) {

            //redirect login page
            navigate('/login');
        }

        //call function "fetchData"
        fetchData();
    }, []);

    //function logout
    const logoutHanlder = async () => {
        setLoading(true)
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch Rest API
        await axios.post('http://localhost:8000/api/logout')
            .then(() => {

                //remove token from localStorage
                localStorage.removeItem("token");

                //redirect halaman login
                navigate('/');
            });
        setLoading(false)

    };
    return (
        <>
            <div className='w-full bg-white flex flex-row'>
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} logoutHanlder={logoutHanlder} loading={loading}/>
                <Navbar sidebar={sidebar} setSidebar={setSidebar} username={user.name}/>
            </div>  
            <div>

            <p>Welcome To Dashboard Admin Julian Photography</p>
            </div>
        </>
    )

}

export default Dashboard;