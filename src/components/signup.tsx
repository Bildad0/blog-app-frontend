import { gql, useQuery } from "@apollo/client"
import { useState } from "react";

const CREATE_USER = gql`
mutation CreateUser($email: String!, $username: String!, $password: String!, ) {
  createUser(email:$email, username: $username, password: $password ) {
    user {
      id
      username
      email
    }
  }
}
`;
function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  function SubmitData(e) {
    e.preventDefault()
    console.log("user data: ", email, username, password);
    const { loading, error, data } = useQuery(CREATE_USER, {
      variables: {
        email,
        username,
        password
      }
    })
    if (!email) return <div>Email cannot be empty</div>
    if (!password) return <div>Password cannot be empty</div>
    if (!username) return <div>Username c annot be empty</div>
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    return data;
  }



  return (
    <div className="min-h-screen bg-gray-300 flex flex-row justify-between sr-only sm:not-sr-only ">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-w-[50%]">
        <form onSubmit={SubmitData} className="m-8 flex flex-col justify-center gap-4">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="username">username</label>
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

          <label htmlFor="password">Password</label>
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
          <button type="submit" className="bg-white max-w-[20%] rounded-md p-4">Sign up</button>
        </form>
      </div>

      <section className="min-w-[40%]">
        <q className="font3xl font-bold">Welcome to our blog app</q>
      </section>
    </div>
  )
}

export default Register