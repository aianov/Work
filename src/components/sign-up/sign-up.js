import React from 'react';
import mylogo from '../../pages/main-page/images/logo.jpg'
import './sign-up.css';

import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Icon24LogoVk } from '@vkontakte/icons';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiLeftArrowAlt } from 'react-icons/bi';

export const SignUp = () => {

  // ARRAY WITH SIGN UP DATA

  const [registerArray, setRegisterArray] = useState([])

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [repeat, setRepeat] = useState('')

  const [repeatDirtya, setRepeatDirtya] = useState(false)
  const [loginCheck, setLoginCheck] = useState(false)

  const [loginError, setLoginError] = useState('Поле не может быть пустым')
  const [passwordError, setPasswordError] = useState('Поле не может быть пустым')
  const [repeatError, setRepeatError] = useState('Пароли не совпадают')
  const [repeatErrora, setRepeatErrora] = useState('Пароли не совпадают')
  const [repeatTrue, setRepeatTrue] = useState('Пароли совпадают')
  const [loginErrora, setLoginErrora] = useState('Логин не может быть меньше 2')

  // GLOBAL PASSWORD

  const [globalPass, setGlobalPass] = useState('');

  const [btnValid, setBtnValid] = useState(true)

  // PEOPLE TYPE BTNS

  const mateAnim = 'regwindow__bar-mateanim'
  const mateBg = 'regwindow__bar-matebg'
  const mateCursor = 'regwindow__bar-matecursor'

  const teacherAnim = 'regwindow__bar-teacheranim'
  const teacherBg = 'regwindow__bar-teacherbg'
  const teacherCursor = 'regwindow__bar-teachercursor'

  const parentAnim = 'regwindow__bar-parentanim'
  const parentBg = 'regwindow__bar-parentbg'
  const parentCursor = 'regwindow__bar-parentcursor'

  const [clickCheck, setClickChech] = useState(false)

  // HUMAN TYPE, FOR USESTATE CONST'S

  const [human, setHuman] = useState('')
  const [humancheck, setHumanCheck] = useState(false)
  const [humanvalid, setHumanValid] = useState(false)
  const [humanerror, setHumanError] = useState('Выберите набоилее подходящий вариант')

  // LOGIN HANDLER

  const loginHandler = (e) => {
    const firstPassValue = document.querySelector(".regwindow__inp2").value
    const secondPassValue = document.querySelector(".regwindow__inp3").value
    const logForm = document.querySelector(".regwindow__inp1")
    const pass = document.querySelector(".regwindow__formlastchild")
    const formValue = e.target.value
    const formSpace = formValue.indexOf(' ')
    const re = /^[A-Za-z\s0-9]*$/
    setLogin(e.target.value)

    if (formValue.length === 0) {
      setLoginCheck(false)
      pass.classList.add("regwindow__formadd")
    }
    if (formValue.length > 2) {
      pass.classList.add("regwindow__formadd")
      setLoginCheck(false)
      if (firstPassValue === secondPassValue && loginCheck === false && humancheck === true) {
        const btnn = document.querySelector(".regform-btn");
        btnn.action = "/tasks";
        setBtnValid(false)
      }
    }
    // IF LOGIN > 12

    if (formValue.length > 12) {
      setLogin(e.target.value = '')
      setLoginError('Логин не мог быть больше 12')
      const logForm = document.querySelector(".regwindow__inp1")
      logForm.placeholder = loginError;
    } else if (!re.test(e.target.value)) {
      setLogin(e.target.value = '')
      setLoginError('Некорректный логин')
      const logForm = document.querySelector(".regwindow__inp1")
      logForm.placeholder = 'Некорректный логин';
    } else if (true) {
      if (logForm.value === '') {
        setLogin(e.target.value = '')
        const logForm = document.querySelector(".regwindow__inp1")
        logForm.placeholder = "Поле не может быть пустым";
      } else if (formSpace === -1) {
        // nothing...
      } else {
        setLogin(e.target.value = '')
        const logForm = document.querySelector(".regwindow__inp1")
        logForm.placeholder = 'Логин не мог иметь пробелы'
      }
      if (formValue.length < 3) {
          pass.classList.remove("regwindow__formadd")
          setLoginCheck(true)
        }
    }
  }

  const passwordHandler = (e) => {
    const firstPassValue = document.querySelector(".regwindow__inp2").value
    const secondPassValue = document.querySelector(".regwindow__inp3").value
    const passValue = e.target.value
    const passSpace = passValue.indexOf(' ')
    setPassword(e.target.value)
    const passFormSpaceCheck = e.target.value === '';
    if (passValue.length > 19) {
      setPassword(e.target.value = '')
      setPasswordError('Пароль должен быть меньше 19')
      const passForm = document.querySelector(".regwindow__inp2")
      passForm.placeholder = 'Пароль должен быть меньше 19'
    } else if (passFormSpaceCheck === true) {
      setPassword(e.target.value = '')
      setPasswordError('Поле не может быть пустым')
      const passForm = document.querySelector(".regwindow__inp2")
      passForm.placeholder = 'Поле не может быть пустым'
      setRepeatDirtya(true)
    } else if (passSpace === -1) {
      //nothing
    } else {
      setPassword(e.target.value = '')
      setPasswordError('Пароль не может иметь пробелы')
      const passForm = document.querySelector(".regwindow__inp2")
      passForm.placeholder = 'Пароль не может иметь пробелы'
    }
    if (firstPassValue.length > 2 && secondPassValue.length > 2) {
      if (firstPassValue === secondPassValue) {
        setRepeatDirtya(false)
        if (firstPassValue === secondPassValue && loginCheck === false && humancheck === true) {
          const btnn = document.querySelector(".regform-btn");
          btnn.action = "/tasks";
          setBtnValid(false)
        }
      } else {
        setRepeatDirtya(true)
      }
    }
  }
  const repeatHandler = (e) => {
    const firstPassValue = document.querySelector(".regwindow__inp2").value
    const secondPassValue = document.querySelector(".regwindow__inp3").value
    const reapFormSpaceCheck = e.target.value === '';
    const reapValue = e.target.value
    const reapSpace = reapValue.indexOf(' ')
    setRepeat(e.target.value)
    if (reapValue.length > 19) {
      setRepeat(e.target.value = '')
      setRepeatError('Пароль не мог быть больше 19')
      const reapForm = document.querySelector(".regwindow__inp3")
      reapForm.placeholder = 'Пароль не мог быть больше 19'
    } else if (reapFormSpaceCheck === true) {
      setRepeat(e.target.value = '')
      setRepeatError('Поле не может быть пустым')
      const reapForm = document.querySelector(".regwindow__inp3")
      reapForm.placeholder = 'Поле не может быть пустым'
      setRepeatDirtya(true)
    } else if (reapSpace === -1) {
      // nothing...
    } else {
      setRepeat(e.target.value = '')
      setRepeatError('Пароль не мог иметь пробелы')
      const reapForm = document.querySelector(".regwindow__inp3")
      reapForm.placeholder = 'Пароль не мог иметь пробелы'
    }
    if (firstPassValue.length > 2 && secondPassValue.length > 2) {
      if (firstPassValue === secondPassValue) {
        setRepeatDirtya(false)
        if (firstPassValue === secondPassValue && loginCheck === false && humancheck === true) {
          const btnn = document.querySelector(".regform-btn");
          btnn.action = "/tasks";
          setBtnValid(false)
        }
      } else {
        setRepeatDirtya(true)
      }
    }
  }

  const mateHandler = () => {
    setClickChech(true)
    const proverka = true;
    setHumanValid(false)
    setHumanCheck(true);
    setHuman('mate');
    const firstPassValue = document.querySelector(".regwindow__inp2").value
    const secondPassValue = document.querySelector(".regwindow__inp3").value
    const mateDiv = document.querySelector(".regwindow__bar-mate")
    const teacherDiv = document.querySelector(".regwindow__bar-teacher")
    const parentDiv = document.querySelector(".regwindow__bar-parent")
    teacherDiv.classList.remove(teacherAnim)
    teacherDiv.classList.remove(teacherBg)
    parentDiv.classList.remove(parentAnim)
    parentDiv.classList.remove(parentBg)
    mateDiv.classList.remove(mateAnim)
    mateDiv.classList.add(mateBg)
    mateDiv.classList.remove(mateCursor)
    teacherDiv.classList.add(teacherCursor)
    parentDiv.classList.add(parentCursor)
    if (firstPassValue === secondPassValue && loginCheck === false && proverka === true) {
      const btnn = document.querySelector(".regform-btn");
      btnn.action = "/tasks";
      setBtnValid(false)
    }
  }

  const teacherHandler = () => {
    const proverka = true;
    setHumanValid(false)
    setHumanCheck(true);
    setHuman('teacher');
    const firstPassValue = document.querySelector(".regwindow__inp2").value
    const secondPassValue = document.querySelector(".regwindow__inp3").value
    const mateDiv = document.querySelector(".regwindow__bar-mate")
    const teacherDiv = document.querySelector(".regwindow__bar-teacher")
    const parentDiv = document.querySelector(".regwindow__bar-parent")
    parentDiv.classList.remove(parentAnim)
    parentDiv.classList.remove(parentBg)
    mateDiv.classList.remove(mateAnim)
    mateDiv.classList.remove(mateBg)
    teacherDiv.classList.remove(teacherAnim)
    teacherDiv.classList.add(teacherBg)
    teacherDiv.classList.remove(teacherCursor)
    parentDiv.classList.add(parentCursor)
    mateDiv.classList.add(mateCursor)
    if (firstPassValue === secondPassValue && loginCheck === false && proverka === true) {
      const btnn = document.querySelector(".regform-btn");
      btnn.action = "/tasks";
      setBtnValid(false)
    }
  } 

  const parentHandler = () => {
    const proverka = true;
    setHumanValid(false)
    setHumanCheck(true);
    setHuman('parent');
    const firstPassValue = document.querySelector(".regwindow__inp2").value
    const secondPassValue = document.querySelector(".regwindow__inp3").value
    const mateDiv = document.querySelector(".regwindow__bar-mate")
    const parentDiv = document.querySelector(".regwindow__bar-parent")
    const teacherDiv = document.querySelector(".regwindow__bar-teacher")
    teacherDiv.classList.remove(teacherAnim)
    teacherDiv.classList.remove(teacherBg)
    mateDiv.classList.remove(mateAnim)
    mateDiv.classList.remove(mateBg)
    parentDiv.classList.remove(parentAnim)
    parentDiv.classList.add(parentBg)
    parentDiv.classList.remove(parentCursor)
    mateDiv.classList.add(mateCursor)
    teacherDiv.classList.add(teacherCursor)
    if (firstPassValue === secondPassValue && loginCheck === false && proverka === true) {
      const btnn = document.querySelector(".regform-btn");
      btnn.action = "/tasks";
      setBtnValid(false)
    }
  }

  const btnSubmit = () => {
    const logVal = document.querySelector(".regwindow__inp1").value
    const logForm = document.querySelector(".regwindow__formlastchild")
    const firstPassVal = document.querySelector(".regwindow__inp2").value
    const secondPassVal = document.querySelector(".regwindow__inp3").value
    if (logVal === '') {
      setBtnValid(true)
      setLoginCheck(true)
      logForm.classList.remove("regwindow__formadd")
    } else if (logVal.length > 2) {
      setLoginCheck(false)
      if (firstPassVal === secondPassVal) {
        setGlobalPass(secondPassVal)
        setRepeatDirtya(false)
        if (humancheck === true) {
          if (firstPassVal === '' || secondPassVal === '') {
            setRepeatDirtya(true)
            setBtnValid(true)
          } else if (repeatDirtya === false && loginCheck === false) {
            const regObj = {
              "id": "1",
              "type": human,
              "password": secondPassVal,
              "username": logVal,
            }
            setRegisterArray(registerArray.push(regObj))
            console.log(registerArray)
          } else {
            setBtnValid(true)
          }
        } else {
          setHumanValid(true)
          setBtnValid(true)
        }
      } else {
        setBtnValid(true)
      }
    }
  }
  
  return (
    <>
      <div className="main-logo">
        <img src={mylogo} alt="#" className='main-logo__logo' />
      </div>
      <div className="regcontainer">
        <sketch />
        <div className="regwindow__forarrow">
          <div className="regwindow__wrapper">
            <div className="regwindow">
              <div className="regwindow__leftarrowdiv">
                <div className="regwindow__leftarrow">
                  <NavLink to="/"><BiLeftArrowAlt size={25} className="regwindow__leftarrowico" /></NavLink>
                </div>
              </div>
              <div className="regwindow__elements">
                <div className="regwindow__titlediv">
                  <p className='regwindow__title'>Рад тебя видеть!</p>
                </div>
                <div className="regwindow__bar">
                  <button onClick={mateHandler} className="regwindow__bar-mate regbar regwindow__bar-mateanim"><p className="people peoplemate">Ученик</p></button>
                  <button onClick={teacherHandler} className="regwindow__bar-teacher regwindow__bar-teacheranim"><p className="people">Учитель</p></button>
                  <button onClick={parentHandler} className="regwindow__bar-parent regbar regwindow__bar-parentanim"><p className="people">Родитель</p></button>
                </div>
                {(humanvalid && humanerror) && <div className='repHumanValid'><a className='none' href=''>{humanerror}</a></div>}
                <div className="regwindow__forms">
                  <div className="regwindow__formwrap">
                    <div className="regwindow__form">
                      <form className='regwindow__inp'>
                        <input autoComplete="off" onChange={e => loginHandler(e)} value={login} name='login' placeholder='Логин' className='regwindow__inp1 inpcss inptext' type="text" />
                      </form>
                    </div>
                    {(loginCheck && loginErrora) && <div className='repValidreg'><a className='none' href=''>{loginErrora}</a></div>}
                  </div>
                  <div className="regwindow__formlastchild regwindow__formadd">
                    <form className='regwindow__inp'>
                      <input autoComplete="off" onChange={e => passwordHandler(e)} value={password} name='password' placeholder='Пароль' className='regwindow__inp2 inpcss' type="password" />
                    </form>
                  </div>
                  <div className="regwindow__formlast regwindow__formadd">
                    <form className='regwindow__inp'>
                      <input autoComplete="off" onChange={e => repeatHandler(e)} value={repeat} name='repeat' placeholder='Повторите пароль' className='regwindow__inp3 inpcss' type="password" />
                    </form>
                  </div>
                  {(repeatDirtya && repeatErrora) && <div className='repValid'><a className='none' href=''>{repeatErrora}</a></div>}
                </div>
                <div className="regwindow__regbtn">
                  <form className='regform-btn'>
                  <button disabled={btnValid} onClick={btnSubmit} type='submit' className='regwindow__regbtn-text'>Войти</button> {/*БУДУЩУЮ ССЫЛКУ НА ВХОД В САЙТ ПРОПИСАТЬ В href*/}
                  </form>
                </div>
                <div className="regwindow__socials">
                  <div className="regwindow__socials-vk socdiv">
                    <Icon24LogoVk className="vk socico" />
                  </div>
                  <div className="regwindow__socials-google socdiv">
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
