import { useState } from 'react'

import './App.css'
import Counter from './Counter/Counter';
import Profield from './Profiled/Profield';
import Cart from './Cart/Cart';

function App() {

  const arrayList = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4'
  ]
  return (
    <>
      {/* <Counter/>

      

      <Cart image="https://tse3.mm.bing.net/th?id=OIP.Cf7rjqmndtEU5_-yOFejBAHaD4&pid=Api&P=0&h=220"
            name= "hoa qua dam">
              hoa qua dam tuoi mat, thom ngon
              <Profield image="https://tse3.mm.bing.net/th?id=OIP.26wdoqgRcnACts79EHAsYwHaFL&pid=Api&P=0&h=220"
                name="kk">
              </Profield>
            </Cart> */}

            <div>
              <ul>
                {arrayList?.map((item, index) => {
                  return (
                    <>
                    <li key={index}>{item}</li>
                    <Profield 
                    name="kk">
                    </Profield>
              </>
                  )
                })}
              </ul>
            </div>
    </>
  )
}

export default App;
