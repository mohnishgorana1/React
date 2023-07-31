import "./card.css"
import Logo from "./Logo"
import Footer from "./Footer"

function SignInInput() {
  return (
    <>
      <div className="sign-in">
        <Logo />
        <div className="inputs">
          <input className="input_field" type="text" placeholder="Phone Number, Username, or Email" />
          <input className="input_field" type="password" placeholder="Password" />
        </div>
        <button className="btn">Sign In</button>
        <Footer />
      </div>
    </>
  )
}

export default SignInInput
