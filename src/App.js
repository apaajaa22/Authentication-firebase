import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "@firebase/auth"
import {useState} from "react"
import "./App.css"
import {auth} from "./Fire"

function App() {
  const [email, setEmail] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (resuser) => {
    setUser(resuser)
  })

  const register = async (e) => {
    e.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      setEmail("")
      setPassword("")
    } catch (err) {
      console.log(err.message)
      setEmail("")
      setPassword("")
    }
  }
  const login = async (e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
      setLoginEmail("")
      setLoginPassword("")
    } catch (err) {
      console.log(err.message)
      setLoginEmail("")
      setLoginPassword("")
    }
  }

  const onSignOut = async () => {
    await signOut(auth)
  }

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h1>register</h1>
          <form onSubmit={register}>
            <div>
              <label>email</label>
              <input
                type="email"
                required
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>password</label>
              <input
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">register</button>
          </form>
        </div>
        <div>
          <h1>Login</h1>
          <form onSubmit={login}>
            <div>
              <label>login email</label>
              <input
                type="email"
                required
                placeholder="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div>
              <label>login password</label>
              <input
                type="password"
                required
                placeholder="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        {user && (
          <div>
            <h1>User login</h1>
            {user?.email}
            <button type="button" onClick={onSignOut}>
              signout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
