import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let selectValue = React.createRef();
  let outValue = React.createRef();
  const [value, setValue] = useState('');
  
  let out7 = React.createRef()
  const [out7_2, setOut7_2] = useState([]);

  let i_8 = React.createRef();
  const [out_8, setOut_8] = useState([]);

  let range = React.createRef();
  const [out_9, setOut_9] = useState([]);

  let i_10 = React.createRef();

  
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
    if (event.target.checked) 
       return document.querySelector('.out-5').innerHTML = event.target.value;
    
    else
       document.querySelector('.out-5').innerHTML = 0;
  }
  function task6() {
    outValue.current.innerHTML = selectValue.current.value;
    setValue(selectValue.current.value)

  }

      function getRandomInt(min=0, max=255) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  function task7() {
    let color = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    // out7.current.style.backgroundColor = color;
    // out7.current.textContent = color;
    setOut7_2(out7.current.style.backgroundColor = color)  // добавил через стейт. Спасибо за логику!
    
    // let randomRgb = () => [
    //   getRandomInt(0, 255),
    //   getRandomInt(0, 255),
    //   getRandomInt(0, 255)
    // ]
    // const rgb = randomRgb();
    
    // document.querySelector('.block-7').style.backgroundColor = 'rgb(' + rgb.map(item => item );
  }
  
  function task8(event) {
    console.log(out_8)
    let n = event.key;
    if (isNaN(+n)) return setOut_8(0);   // Выводит один раз 0 и 1, 0 перезаписует 1, единица повторно не выводиться. Не знаю как реализовать перезапись
    return setOut_8(1);                 // Так же выводит на один символ позже, в чем может быть причина? В count та же история.
  }
  function task9() {
    setOut_9(range.current.value);

  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(i_10.current.value);
    console.log(ar10);

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
        <div className="block-7" ref={out7}>{out7_2}</div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ></input>
        <div className="out-8" >{out_8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={range}></input>
        <div className="out-9">{out_9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"  ref={i_10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
