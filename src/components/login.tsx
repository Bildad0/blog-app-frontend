import { useMutation } from "@apollo/client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LOGIN } from "../mutations"
import { toast } from "react-toastify"

const Login = ({ setUser }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const [login, { data, loading, error }] = useMutation(LOGIN, {
        onCompleted: (data) => {
            localStorage.setItem('auth-token', data.login.token);
        }
    });
    const handleSubmit = (e: unknown) => {
        e.preventDefault();
        if (loading) return toast.info("Loading...");
        login({ variables: { username, password } }).then((res) => {
            if (res.errors) {
                navigate("/login");
                toast.error(error.message)
            } else {
                setUser(data.user)
                toast.info(`welcome back ${data.user.username}`)
                navigate("/profile")
            }
        });
        if (error) return toast.error(error.message);
    };
    return (
        <div className="sr-only sm:not-sr-only justify-center flex min-h-screen mt-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-[50%] min-w-[30%] min-h-[50%] bg-white p-3 rounded-md m-40"
                method="POST"
            >
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="rounded-md border-0 admin-autocomplete bg-gray-100 min-h-10"
                    required
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}>

                </input>

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="rounded-md border-0 bg-gray-100 min-h-10"
                    required
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}>
                </input>
                <button
                    type="submit"
                    className="bg- max-w-[50%] rounded-md p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                >Login
                </button>
            </form>
        </div>
    )
}

export default Login 