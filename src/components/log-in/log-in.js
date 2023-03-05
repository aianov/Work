import React from 'react'
import { useEffect, useState } from 'react';
import mylogo from '../../pages/main-page/images/logo.jpg'
import './log-in.css';

import { NavLink } from 'react-router-dom';
import { Icon24LogoVk } from '@vkontakte/icons';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiLeftArrowAlt } from 'react-icons/bi';

export const LogIn = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [passwordDirty, setPasswordDirty] = useState(false)
  const [loginCheck, setLoginCheck] = useState(false)

  const [loginError, setLoginError] = useState('Поле не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не мог быть меньше 3')
  const [loginErrora, setLoginErrora] = useState('Логин не может быть меньше 2')

  const [btnValid, setBtnValid] = useState(true)

  const loginHandler = (e) => {
    const firstPassValue = document.querySelector(".logwindow__inp1").value
    const secondPassValue = document.querySelector(".logwindow__inp2").value
    const logForm = document.querySelector(".logwindow__inp1")
    const pass = document.querySelector(".logwindow__formlastchild")
    const formValue = e.target.value
    const formSpace = formValue.indexOf(' ')
    const re = /^[A-Za-z\s0-9]*$/
    setLogin(e.target.value)

    // IF LOGIN > 2
    if (formValue.length === 0) {
      setLoginCheck(false)
      pass.classList.add("logwindow__formadd")
    }
    if (formValue.length > 2) {
      pass.classList.add("logwindow__formadd")
      setLoginCheck(false)
      if (firstPassValue.length > 2 && secondPassValue.length > 4) {
        const btnn = document.querySelector(".logform-btn");
        btnn.action = "/tasks";
        setBtnValid(false)
      }
    }
    // IF LOGIN > 12

    if (formValue.length > 12) {
      setLogin(e.target.value = '')
      setLoginError('Логин не мог быть больше 12')
      const logForm = document.querySelector(".logwindow__inp1")
      logForm.placeholder = loginError;
    } else if (!re.test(e.target.value)) {
      setLogin(e.target.value = '')
      setLoginError('Некорректный логин')
      const logForm = document.querySelector(".logwindow__inp1")
      logForm.placeholder = 'Некорректный логин';
    } else if (true) {
      if (logForm.value === '') {
        setLogin(e.target.value = '')
        const logForm = document.querySelector(".logwindow__inp1")
        logForm.placeholder = "Поле не может быть пустым";
        } else if (formSpace === -1) {
        // nothing...
        } else {
          setLogin(e.target.value = '')
          const logForm = document.querySelector(".logwindow__inp1")
          logForm.placeholder = 'Логин не мог иметь пробелы'
      }
      if (formValue.length < 3) {
        pass.classList.remove("logwindow__formadd")
        setLoginCheck(true)
      }
    }
  }

  const passwordHandler = (e) => {
    const firstPassValue = document.querySelector(".logwindow__inp1").value
    const secondPassValue = document.querySelector(".logwindow__inp2").value
    const passValue = e.target.value
    const passSpace = passValue.indexOf(' ')
    setPassword(e.target.value)
    const passFormSpaceCheck = e.target.value === '';
    if (passValue.length > 19) {
      setPassword(e.target.value = '')
      const passForm = document.querySelector(".logwindow__inp2")
      passForm.placeholder = 'Пароль не мог быть меньше 19'
    } else if (passFormSpaceCheck === true) {
      setPassword(e.target.value = '')
      const passForm = document.querySelector(".logwindow__inp2")
      passForm.placeholder = 'Поле не может быть пустым'
      setPasswordDirty(false)
    } else if (passValue.length < 4) {
      setPasswordDirty(true)
    } else {
      setPasswordDirty(false)
      if (firstPassValue.length > 2 && secondPassValue.length > 4) {
        const btnn = document.querySelector(".logform-btn");
        btnn.action = "/tasks";
        setBtnValid(false)
      }
    }  
      if (passSpace === -1) {
      //nothing
    } else {
      setPassword(e.target.value = '')
      const passForm = document.querySelector(".logwindow__inp2")
      passForm.placeholder = 'Пароль не мог иметь пробелы'
    }
  }

  const btnHandler = () => {
    const logVal = document.querySelector(".logwindow__inp1").value
    const passVal = document.querySelector(".logwindow__inp2").value
    if (logVal === '') {
      setLoginCheck(false)
    } else if (passVal === '') {
      setPasswordDirty(false)
    } else if (passwordDirty === false && loginCheck === false) {
      alert("FUTURE LOG-IN!")
    }
  }
  return (
    <>
      <div className="main-logo">
        <img src={mylogo} alt="#" className='main-logo__logo' />
      </div>
      <div className="logcontainer">
        <div className="logwindow__forarrow">
          <div className="logwindow__wrapper">
            <div className="logwindow">
              <div className="logwindow__leftarrowdiv">
                <div className="logwindow__leftarrow">
                  <NavLink to="/"><BiLeftArrowAlt size={25} className="logwindow__leftarrowico" /></NavLink>
                </div>
              </div>
              <div className="logwindow__elements">
                <div className="logwindow__titlediv">
                  <p className='logwindow__title'>Рад тебя видеть!</p>
                </div>
                <div className="logwindow__forms">
                  <div className="logwindow__formwrap">
                    <div className="logwindow__form">
                      <form className='logwindow__inp'>
                        <input autoComplete="off" onChange={e => loginHandler(e)} value={login} name='login' placeholder='Логин' className='logwindow__inp1 inpcss inptext' type="text" />
                      </form>
                    </div>
                    {(loginCheck && loginErrora) && <div className='repValid'><a className='none' href=''>{loginErrora}</a></div>}
                  </div>
                  <div className="logwindow__formlastchild logwindow__formadd">
                    <form className='logwindow__inp'>
                      <input autoComplete='off' onChange={e => passwordHandler(e)} value={password} name='password' placeholder='Пароль' className='logwindow__inp2 inpcss' type="password" />
                    </form>
                  </div>
                  {(passwordDirty && passwordError) && <div className='repValid'><a className='none' href=''>{passwordError}</a></div>}
                </div>
                <div className="logwindow__logbtn">
                  <form className="logform-btn">
                    <button disabled={btnValid} type='submit' onClick={btnHandler} className='logwindow__logbtn-text'>Войти</ button> {/*БУДУЩУЮ ССЫЛКУ НА ВХОД В САЙТ ПРОПИСАТЬ В href*/}
                  </form>
                </div>
                <div className="logwindow__socials">
                  <div className="logwindow__socials-vk socdiv">
                    <Icon24LogoVk className="vkc socico" />
                  </div>
                  <div className="logwindow__socials-google socdiv">
                    <AiOutlineGoogle className="google socico" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
