/* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import "./App.css"
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   // const [count, setCount] = useState(0);
//   // const [count2, setCount2] = useState(0);

//   // useEffect(() => {
//   //   console.log(count);
//   // }, [count, count2])

//   const[post, setPost] = useState([]);

//   useEffect(() => {
//     const apiURL = "https://jsonplaceholder.typicode.com/posts";

//   //   fetch(apiURL).then((res) => {
//   //     if(!res.ok){
//   //       throw new Error("network was not ok");
//   //     }
//   //     return res.json();
//   //   })
//   //   .then((post) => {
//   //     console.log(post)
//   //     setPost(post);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   })

//   const fetchDta = async() => {
//     const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log(data);
//     setPost(data.data);
//   };

//   fetchDta();
//   },[]);



//   return (
//     <>
//       {/* <button onClick={() => setCount(count+1)}>
//       count+1
//       </button>

//       <button onClick={() => setCount2(count2+1)}>
//       count2+1
//       </button>
//       <p>count: {count}</p>
//       <p>count2: {count2}</p> */}

//       {/* {post.map((item) => (
//         <div key={item.id}>{item.id} - {item.title}</div>
//       ))} */}

//       {post?.map((item) => {
//         return <div className="item">
//           <p><b>{item.userId}</b></p>
//           <p>{item.title}</p>
//           <p>{item.body}</p>
//         </div>
//       })}
//     </>
//   )
// }

// export default App;



import React from 'react'
import Layout from './Component/Layout/Layout';

const App = () => {
  return (
    <Layout/>
  )
}

export default App;