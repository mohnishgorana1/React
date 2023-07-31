import './card.css'
function SignInInput() {
  return (
    <>
        <div className='inputs'>
            <input type="text" placeholder="Phone Number, username, or email" />
            <input type="password" placeholder="Password" />
        </div>
     
    </>
  );
}

function SignInButton() {
  return <> <button>Sign In </button></>
}


export {
    SignInInput ,
    SignInButton
};
