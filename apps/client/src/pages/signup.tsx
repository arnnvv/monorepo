import { Signup } from "ui";
import axios from "axios";
import {response} from "express";

export default function SignupPage() {
  return (
    <div>
      <Signup
        onClick={async (username: string, password: string) => {
            try {
                const response = await axios.post("/api/signup", {
                    username,
                    password,
                });
            }
            catch (err) {
                // Handle any errors that occur during the request
                console.error(err);
            }
         localStorage.setItem("token", response.data.token)
        }}
      />
    </div>
  );
}
