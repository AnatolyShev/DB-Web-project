import React, {useState, useContext} from 'react';
import { singup, login, token, confirmSingUP, confirmLogin } from '../../api/auth';
import { AuthContext } from '../../App';
import classes from './AuthForm.module.css'
const AuthForm = () => {

    // const isUser = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [code, setCode] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginCode, setLoginCode] = useState('');

    const { setAuth } = useContext(AuthContext);

    const SingUP= (e) => {
      e.preventDefault()
      const token = singup(email, name, telegram, code);
      token.then((result) => {
        if (result !== "Error Code") {
          localStorage.setItem("token", result.token)
          setAuth(true)
        }
      });
    }

    const ConfirmSingUP = (e) => {
        e.preventDefault()
        confirmSingUP(email);
    }

    const Login = (e) => {
      e.preventDefault()
      const token = login(loginEmail, loginCode);
      console.log(token)
      token.then((result) => {
        if (result !== "Error Code") {
          localStorage.setItem("token", result.token)
          setAuth(true)
        }
      });   
    }
    const ConfirmLogin = (e) => {
      e.preventDefault()
      const result = confirmLogin(loginEmail);
        result.then((result) => {
          if (result === "Not User") {
            console.log("Not User")
          }
        });   
    }

    

  return (
    <div className={classes.wrap}>
      <div className={classes.header}><div>Вход</div><div>Регистрация</div></div>
      <div className={classes.singup}>
        <form>
            <input type="text" onChange={e => setEmail(e.target.value)}/>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <input type="text" onChange={e => setTelegram(e.target.value)}/>
            <button onClick={ConfirmSingUP}>Отправить</button>
        </form>
        <form>
          <input type="text" onChange={e => setCode(e.target.value)}/>
          <button onClick={SingUP}>Подтвердить</button>
        </form>
      </div>
      <div className={classes.login}>
        <form>
          <input type="text" onChange={e => setLoginEmail(e.target.value)}/>
          <button onClick={ConfirmLogin}>Отправить</button>
        </form>
        <form>
            <input type="text" onChange={e => setLoginCode(e.target.value)}/>
            <button onClick={Login}>Подтвердить</button>
        </form>
      </div>
   
   
    
  </div>
  );
};
export default AuthForm;