import { useMutation } from "@apollo/client"
import { useState } from "react";
import { CREATE_USER } from "../mutations";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const [signup, { data, loading, error }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      localStorage.setItem('auth-token', data.signup.token);
    }
  });

  const handleSubmit = (e: unknown) => {
    e.preventDefault();
    if (loading) return toast.info("Loading...");
    signup({ variables: { username, email, password } }).then((res) => {
      if (res.errors) {
        navigate("/register");
        toast.error(error.message)
      } else {
        setUser(data.user)
        toast.info(`Welcome ${data.user.username}`)
        navigate("/profile")
      }
    });
    if (error) return toast.error(error.message);
  };
  
  return (
    <div className="min-h-screen bg-gray-300 flex flex-row justify-between sr-only sm:not-sr-only ">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-w-[50%] overscroll-contain justify-items-center">
        <form onSubmit={handleSubmit} className="m-8 flex flex-col gap-4 max-w-[40%] bg-white p-3 rounded-md m-[20%]">
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