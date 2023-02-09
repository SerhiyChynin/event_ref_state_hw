import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let selectValue = React.createRef();
  let outValue = React.createRef();
  const [value, setValue] = useState('');
  
  let colorValue = React.createRef()
  let outColorValue = React.createRef()
  const [outColor, setOutColor] = useState('');

  function task1() {
    console.log('task2')
  }
  function task2() {
    document.querySelector('.task-2').classList.add('active');
  }
  function task3(event) {
    console.log(event.target.value)
  }
  function task4(event) {
    console.log(count4 = event.target.value);
  }
  function task5(event) { 
    console.log(event)
    if (event.target.checked) 
       return document.querySelector('.out-5').innerHTML = event.target.value;
    
    else
       document.querySelector('.out-5').innerHTML = 0;
  }
  function task6(event) {
    outValue.current.innerHTML = selectValue.current.value;
    setValue(selectValue.current.value)

  }
  function task7() {
    let randomRgb = () => [
      getRandomInt(0, 255),
      getRandomInt(0, 255),
      getRandomInt(0, 255)
    ]

    const rgb = randomRgb()
    console.log(rgb)

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(colorValue.current.value)
    outColorValue.current.innerHTML = colorValue.current.value;
    setOutColor(colorValue.current.value);

  }
  
  function task8() {

  }
  function task9() {

  }
  let ar10 = [5, 6, 7];
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={selectValue} >
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
          <div className="out-6" ref={outValue}> {value}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={outColorValue}>{outColor}</div>
        <button className="task-7" onClick={task7} ref={colorValue}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div className="out-8" ></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
