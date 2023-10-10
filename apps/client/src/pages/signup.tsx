import { Signup } from "ui";

export default function SignupPage() {
  return (
    <div>
      <Signup
        onClick={async (username, password) => {
          const response = await axios.post("admin.kirat.com/signup", {
            username,
            password,
          });
        }}
      />
    </div>
  );
}
