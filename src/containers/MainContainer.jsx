import React, { useEffect } from 'react';
import styles from './MainStyles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSessions } from '../store/slices/appSlice';

export default function main() {
  const sessions = useSelector((state) => state.appSlice.sessions);
  const dispatch = useDispatch();

  function addSess(e) {
    e.preventDefault();

    fetch('/server/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: e.currentTarget.elements[0].value,
        instructor: e.currentTarget.elements[1].value,
        date: new Date(e.currentTarget.elements[2].value).getTime(),
        description: e.currentTarget.elements[3].value,
      }),
    });
  }

  useEffect(() => {
    fetch('/server/sessions')
      .then((res) => res.json())
      .then((res) => dispatch(setSessions(res)));
  }, []);

  const sessionDisplay = [];

  for (let i = 0; i < sessions.length; i++) {
    sessionDisplay.push(
      <div className={styles.currSess}>
        <h1>{sessions[i].title}</h1>
        <h2>{sessions[i].instructor}</h2>
        <p>{new Date(sessions[i].date).toString()}</p>
        <p>{sessions[i].description}</p>
      </div>
    );
    console.log(sessions[i]);
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.addSess}>
        <h1>Schedule Session</h1>
        <form onSubmit={(e) => addSess(e)}>
          <label className={styles.formLabel}>Title:</label>
          <input type='text' placeholder='required' />
          <br />
          <label className={styles.formLabel}>Instructor:</label>
          <input type='text' placeholder='first name only' />
          <br />
          <label className={styles.formLabel}>Date and Time:</label>
          <input type='datetime-local' />
          <br />
          <label className={styles.formLabel}>Description:</label>
          <br />
          <textarea className={styles.descIn} type='text' placeholder='optional' />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div>
        <h1>Current Sessions</h1>
        {sessionDisplay}
      </div>
    </div>
  );
}
