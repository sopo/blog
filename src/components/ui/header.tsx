import { ModeToggle } from "../mode-toggle";
import { Button } from "./button";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div>
            <Link to="sign-up">
            <Button className="bg-purple-500 hover:bg-purple-700 text-purple-50 rounded" >Sign up</Button>
            <ModeToggle/>
            </Link>
        </div>
    )
}