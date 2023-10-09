import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import {useState} from "react";
import { Button } from "@mui/material";

export function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome back. Sign in below
            </Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async() => {

                    }}

                > Signin</Button>
            </Card>
        </div>
    </div>
  );
}
