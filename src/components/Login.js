import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    //google auth code
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            //payload
            //all these functions are given by GOOGLE
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => error.message);
  };

  return (
    <div className="login">
      <div className="login__container">
        {/*Contains the gmail functionality*/}
        <img
          src="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
