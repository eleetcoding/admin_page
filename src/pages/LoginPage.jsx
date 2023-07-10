import React from 'react';
import styles from './LoginPageStyles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIncorrect, setLoggedIn } from '../store/slices/appSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const incorrect = useSelector((state) => state.appSlice.incorrect);

  function login(e) {
    e.preventDefault();

    fetch('/server/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.currentTarget.elements[0].value,
        password: e.currentTarget.elements[1].value,
      }),
    }).then((res) => {
      if (res.status === 200) {
        dispatch(setIncorrect(''));
        dispatch(setLoggedIn(true));
      } else dispatch(setIncorrect('Wrong username/password'));
    });
  }

  return (
    <div className={styles.loginDiv}>
      <p style={{ color: 'red' }}>{incorrect}</p>
      <form onSubmit={(e) => login(e)}>
        <label className={styles.formLabel}>Username:</label>
        <input type='text' id='username' name='username' />
        <br />
        <label className={styles.formLabel}>Password:</label>
        <input type='password' id='password' name='password' />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
