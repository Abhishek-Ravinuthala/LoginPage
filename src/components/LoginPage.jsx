
import { useState } from "react";
import { Link } from "react-router-dom";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    
  
  return (
   
   <div className="mt-4 grow flex items-center justify-around h-screen">
      <div className="mb-64">
      <h1 className="text-4xl text-center mb-20">LOGIN</h1>
        
        <form className="max-w-md mb-8 " action="">
      
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
          <button className="primary mt-2">Login</button>

          <div className="text-center py-2 text-gray-500 mt-24">
            Don't have an account yet?{"    "}
            <Link className="underline text-bn" to={"/register"}>
              Register now
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
