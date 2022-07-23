import {React, useState} from 'react';
import '../style.scss';
import Results  from '../components/Results';
import P2 from './P2';

const Body = () => {
 
  const [ isDisplay, setDisplay ] = useState(false);
  const [ isShown, setIsShown ] = useState(false);
  
  const handleClick = event => {
    event.preventDefault();
    setIsShown(true);
    setDisplay(false);
  };
  
  const invisible = () => {
    setIsShown(false);
    setDisplay(false);
  }
  const search = event => { 
    event.preventDefault();
    setIsShown(false);
    setDisplay(!isDisplay);
    
  }
    


  return (
    <div id='main'>
      <header className='logo'>
        <img src="./logo.png" alt=""></img>
      </header>

      <div className='form'>
        <input type="text" placeholder="Search..." name='message' onClick={handleClick} onBlur={invisible}></input>   
        <button type="submit" className= "fa fa-search" onClick={search} ></button>
      </div>
      {isShown && <Results />}
      {isDisplay && <P2 />}
    </div>
  );
}

export default Body
