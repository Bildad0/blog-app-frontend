import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const LOGIN_MUTATION = gql`
        mutation TokenAuth($password:String!, $username:String!) {
            tokenAuth(password:$password, username: $username) {
                    token
                    user {
                        dateJoined
                        firstName
                        id
                        lastLogin
                        profile {
                            bio
                            email
                            id
                        }
                    }
                }
            }    
        }
    `;

    const [submitLogin] = useMutation(LOGIN_MUTATION);

    async function SubmitData() {
        const response = await submitLogin({
            variables:
            {
                username: username,
                password: password
            }
        });
        if (response.errors) {
            console.log(response.errors)
        }

        console.log(response.data);
    }

    return (
        <div className="sr-only sm:not-sr-only">
            <form onSubmit={SubmitData} className="m-8 flex flex-col gap-4 max-w-[40%] bg-white p-3 rounded-md m-[20%]">
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
                    }}> -
                </input>
                <button type="submit" className="bg- max-w-[50%] rounded-md p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Login</button>
            </form>
        </div>
    )
}

export default Login