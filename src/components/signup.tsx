import { useMutation } from "@apollo/client"
import { useState } from "react";
import { CREATE_USER } from "../mutations";


function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const [submitRegister] = useMutation(CREATE_USER)

  async function SubmitData() {
    if (!email) return <div>Email cannot be empty</div>
    if (!password) return <div>Password cannot be empty</div>
    if (!username) return <div>Username cannot be empty</div>
    const response = await submitRegister({
      variables: {
        username,
        password,
        email
      }
    })
    console.log("user data: ", response.data);

    if (response.errors) return console.log(response.errors)
    return response.data;
  }



  return (
    <div className="min-h-screen bg-gray-300 flex flex-row justify-between sr-only sm:not-sr-only ">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-w-[50%] overscroll-contain justify-items-center">
        <form onSubmit={SubmitData} className="m-8 flex flex-col gap-4 max-w-[40%] bg-white p-3 rounded-md m-[20%]">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md border-0 admin-autocomplete bg-gray-100 min-h-10"
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }}>

          </input>
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
          <div className="flex flex-row gap-2">
            <input type="radio" name="radio" id="radio" className="active:bg-red p-2"></input>
            <label htmlFor="radio">Get news update whenever they are posted</label>
          </div>
          <button type="submit" className="bg- max-w-[50%] rounded-md p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Sign up</button>
        </form>
        <div className="flex justify-center">
          <h1>
            Already have an account please
            <span>
              <a href="./login" className="btn btn-primary p-2 text-blue-900 hover:underline">Login</a>
            </span>
          </h1>
        </div>
      </div>

      <section className="min-w-[40%]">
        <q className="font-3xl font-bold">Welcome to our blog app</q>
      </section>
    </div>
  )
}

export default Register