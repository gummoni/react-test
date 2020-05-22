import React, { useState } from 'react'
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import useInterval from './useInterval';


function Header() {

  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(10);

  useInterval(() => {
    setCount(count + 1)
  }, delay);


  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>Edit <code>src/App.tsx</code> and save to reload.</p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>{count}</a>
      <Button variant='secondary' onClick={ () => setDelay(-1) }>stop</Button>
      <Button variant='danger' onClick={ () => setDelay(0) }>high</Button>
      <Button variant='success' onClick={ () => setDelay(100) }>low</Button>
    </header>
  )
}

export default Header;
