import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useRef } from "react";
import { Context } from "../../context/context";

export default function Login() {

    const userRef = useRef();


    const { user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();

    }


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>

                <label>Username</label>
                <input className="loginInput"
                    type="text"
                    placeholder="Enter your username..."
                    ref={userRef}
                />

                <label>Password</label>
                <input className="loginInput"
                    type="password"
                    placeholder="Enter your password..."

                />

                <button className="loginButton" type="submit">Login</button>

            </form>
            <button className="loginRegisterButton">
                <Link to="/register" className="link">Register</Link>
            </button>
        </div>
    );
}