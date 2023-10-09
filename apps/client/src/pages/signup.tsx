import { Signup } from "ui";

export default function SignupPage() {
  return (
    <div>
      <Signup onClick={(username, password)=>{
          alert(username);
          alert(password);
      }}/>
    </div>
  );
}
