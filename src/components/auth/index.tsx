import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../context/redux";
import { login, signup } from "../../lib/api";

const Auth = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  const dispatchFunc = useDispatch();
  const submit = async(event: any) => {
    setIsWaiting(true);
    event.preventDefault();
    event.stopPropagation();
    const toSend: any = ['email', 'password'].reduce((acc, x, i) => ({...acc, [x]: event.target[i].value }), {});
    if(loginForm) {
      const isLog = await login(toSend).catch(() => null);
      dispatchFunc(actions.setIsLogedIn(!!isLog));
    } else {
      const signedUp = await signup(toSend).catch(()=> null);
      if (signedUp) {
        setLoginForm(true);
      }
    }
    setTimeout(() => {
      setIsWaiting(false);
    }, 1500);
  }
  return (
    <div className="pageContainer auth">
      <div className="authContainer">
        <form className="authForm" onSubmit={submit}>
          <input type="email" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Mot de passe"/>
          <button disabled={isWaiting} className="authCta" type="submit">{loginForm ? 'Login' : 'Signup'}</button>
          <span className="suggestion" onClick={() => setLoginForm(!loginForm)}>{loginForm ? 'Inscrivez-vous maintenant' : 'Connectez vous à votre compte'}</span>
        </form>
      </div>
    </div>
  )
}

export default Auth;