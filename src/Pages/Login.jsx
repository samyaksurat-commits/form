import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { log } from "node:console";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "@/context/userContext";

const Login = () => {
  let token=false;
const inp1=useRef();
  useEffect(()=>
  {
    inp1.current.focus();
  },[]);

const [isprotected,setIsprotected]=useState(true);
const [email,setEmail]=useState('');
const [pass,setPass]=useState('');
const [imgUrl, setImgUrl] = useState();

const navigate=useNavigate();
function handleLogin()
{
  navigate('/Home')
}
function handleRegister()
{
  sessionStorage.setItem(email,pass);
  token=true;
}

const handleFile = (e) => {
  const file = e.target.files[0];

  const imgUrl = URL.createObjectURL(file)

  setImgUrl(imgUrl)
  
    
}

const user = useContext(userContext);
console.log(user.salary);

  return (
    <>
    <input type="file" accept="image/*" onChange={handleFile}/>
    <img src={imgUrl} alt="" />
    <h1>{user.name}</h1>
    <h1>{import.meta.env.VITE_USER_NAME}</h1>
      <h1>Login Page</h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  ref={inp1}
                  placeholder="m@example.com"
                  value={email}
                  onInput={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type={isprotected?"password":"text"} value={pass} onInput={(e)=>{setPass(e.target.value)}} required />
                <button className="text-right text-xs font-underline" onClick={()=>{setIsprotected(!isprotected)}}>👁</button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full border-2 font-bold text-lg" onClick={handleLogin}>
            Login
          </Button>
          <Button type="submit" className="w-full border-2 font-bold text-lg" onClick={handleRegister}>
            Register
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Login;
