import "./card.css"
import { SignInInput,  SignInButton } from "./SignInInput.jsx"
function Card() {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="logo">
            <img id="ig_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027" alt="" />
          </div>
          <div className="inputs">
            <SignInInput />
          </div>
          <div className="btns">
            <SignInButton />
          </div>
          <footer className="footer">
            
          </footer>
        </div>
      </div>
    </>
    
  )
}

export default Card