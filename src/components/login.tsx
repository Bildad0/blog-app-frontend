import { useMutation } from "@apollo/client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LOGIN } from "../mutations"

const Login = ({ setUser }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [submitLogin] = useMutation(LOGIN);
    const navigate = useNavigate();

    async function SubmitData(e) {
        e.preventDefault()
        console.log(username, password)
        if (!username || !password) return;
        try {
            const response = await submitLogin({
                variables:
                {
                    password: password,
                    username: username
                }
            });
            if (!response.errors) {
                localStorage.setItem('token', response.data.token)
                console.log("token:", response.data.token)
                setUser(response.data.user)
                navigate("/profile")
                console.error("server error:", response.errors)
            }

            return navigate("/login")
        } catch (err) {
            console.error("error: ", err)
        }



    }

    return (
        <div className="sr-only sm:not-sr-only justify-center flex min-h-screen mt-4">
            <form onSubmit={SubmitData} className="flex flex-col gap-4 max-w-[50%] min-w-[30%] min-h-[50%] bg-white p-3 rounded-md m-40">
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