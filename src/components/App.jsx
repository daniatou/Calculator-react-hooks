import './App.css';
import {React, useState, useEffect, useRef} from 'react';


 function App () {
  // const [name, setName] = useState('Nia')

  const inputRef = useRef()
  const [count, setCount] = useState(0);
  const [color, setColor]= useState('#ffffff')
  const [value, setValue] =useState(null)
  
  const reset =() => { setCount(0)}
  const handleOnchange = (e) => { setValue(e.target.value) }
  const increment = () => {
    !!value && setCount(count + parseInt(value))
    setValue(null)
    inputRef.current.value= null
  }
  const decrement = () => {
    !!value && setCount(count - parseInt(value))
    setValue(null)
    inputRef.current.value= null
  }
  useEffect (() => {
    setColor(count < 0 ? '#c0392b' : '#ffffff' )
  }, [count])


    return(
      // <div className='App'>
      //   <h1>Use State</h1>
      //    <p>Hello {name}</p>
      //    <input type="text" name="" id="" onChange={ (e) => setName( e.target.value) } />
      // </div>

      <div className="App">
        <h1>Calculator</h1>
        <p className='App-p' style={{color: color}}>{count}</p>
        <input type="number" onChange={handleOnchange} ref = {inputRef} />
        <div className="App-buttons">
          <button className="App-button" onClick={decrement}>-</button>
          <button className="App-button" onClick={increment}>+</button>
          <button className='App-button' onClick={reset}>Reset</button>
        </div>
     </div>
    )

    }
export default App;
