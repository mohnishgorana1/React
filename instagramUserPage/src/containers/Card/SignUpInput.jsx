import "./card.css"
import Logo from "./Logo"
import Footer from "./Footer"

function SignUpInput() {
  return (
    <>
      <div className="sign-up">
        <Logo />
        <div className="inputs">
          <input className="input_field" type="text" placeholder="Phone Number,or Email" />
          <input className="input_field" type="text" placeholder="Full Name" />
          <input className="input_field" type="text" placeholder="Phone Number,Username, or Email" />
          <input className="input_field" type="password" placeholder="Password" />
        </div>
        <button className="btn">Sign Up</button>
        <Footer />
      </div>
    </>
  )
}

export default SignUpInput
