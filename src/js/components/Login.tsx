import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useMessage,
} from "@vechaiui/react"
import { LoginIcon } from "@heroicons/react/solid"
import React from "react"
import axios from "../utils/axios"
import { useNavigate } from "react-router-dom"
import AuthPage from "./layout/AuthPage"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const message = useMessage()

  const doLogin = (email: string, password: string) => {
    axios
      .withToast({
        call: message,
        success: "Welcome Back!",
        error: "Incorrect Credentials.",
      })
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        window.location.reload()
      })
      .finally(() => setLoading(false))
  }

  return (
    <AuthPage title="Login" icon={<LoginIcon />}>
      <form
        className="Form Login-form"
        onSubmit={(e) => {
          e.preventDefault()

          setLoading(true)
          doLogin(email, password)
        }}
      >
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="foo@bar.baz"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Button
            variant="outline"
            loading={loading}
            className="btn--full"
            color="primary"
          >
            Login
          </Button>
        </FormControl>

        <FormControl className="FormControl--separator">
          <span className="FormControl-label">OR</span>
        </FormControl>

        <FormControl>
          <Button
            onClick={() => navigate("/register")}
            variant="solid"
            className="btn--full"
            color="primary"
          >
            Sign Up
          </Button>
        </FormControl>
      </form>
    </AuthPage>
  )
}

export default Login
