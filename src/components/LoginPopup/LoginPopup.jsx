
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Войти")

    return (
        <div className='login-popup'>
            <form className="login-popup-conatiner">
                <div className="login-popup-title">
                    <h2>{currState} </h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />

                </div>
                <div className="login-popup-input">
                    {currState === "Зарегистрироваться" ? <></> : <input type="text" placeholder='Ваше имя' required />}
                    <input type="email" placeholder='Ваш e-mail' required />
                    <input type="password" placeholder='Введите пароль' required />
                </div>
                <button className=''>{currState === "Войти" ? "Создать Аккаунт" : "Зарегистрироваться"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Продолжая, я соглашаюсь с условиями использования и политикой конфиденциальности.</p>
                </div>
                {currState === "Войти" ? <p>Создать новую учетную запись? <br/>
                    <span onClick={() => setCurrState("Зарегистрироваться")}>Нажмите здесь</span></p>
                    : <p>Уже есть аккаунт? <br/>
                        <span onClick={() => setCurrState("Войти")}>Войти</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopup