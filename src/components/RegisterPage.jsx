import { Link } from "react-router-dom";
import { useState } from "react";


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="mt-4 grow flex items-center justify-around h-screen">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-12">REGISTER</h1>
        <form className="max-w-md mx-auto" action="" >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <input
            type="email"
            name=""
            id=""
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="your password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary mt-4">Register</button>

          <div className="text-center py-2 text-gray-500 mt-24">
            Already a member?{" "}
            <Link className="underline text-bn" to={"/login"}>
              Login
            </Link>

        
          </div>
          <div className="text-center py-2 text-gray-500 ">
          <Link className="  underline text-bn" to={"/"}>
              Back to home
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
}
