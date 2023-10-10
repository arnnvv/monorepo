import { Signup } from "ui";
import axios from "axios";

export default function SignupPage() {
  return (
    <div>
      <Signup
        onClick={async (username: string, password: string) => {
            try {
                const response = await axios.post("admin.kirat.com/signup", {
                    username,
                    password,
                });
            }
            catch (err) {
                // Handle any errors that occur during the request
                console.error(err);
            }
        }}
      />
    </div>
  );
}
