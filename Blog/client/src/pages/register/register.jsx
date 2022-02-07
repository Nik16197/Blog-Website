import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./register.css"

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        setError(false);
        e.preventDefault();
        try {
            const res = await axios.post("/auth/register", {
                username: username,
                email: email,
                password: password
            })

            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true)
        }

        // console.log(res.data)
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>

                <input className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Email</label>
                <input className="registerInput"
                    type="text"
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input className="registerInput"
                    type="password"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login" className="link">Login</Link>
            </button>
            {
                error && (
                    <span style={{ color: "red", marginTop: "10px" }}>
                        Oops !! something went wrong !
                    </span>
                )
            }

        </div>
    )
}