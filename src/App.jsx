
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import UserCardList from './components/UserCardList/UserCardList';
import dataUsers from './data/users.json';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import { useState } from 'react';


const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  
  return (
      <div className={`app ${theme ? "dark" : "light"}`} >
      <Header theme={theme} setTheme={setTheme} className="t"/>
      <Banner className="t"/>
      <UserCardList usersList={dataUsers} className="t" >
        <Search  className="t"/>
      </UserCardList>
      <Footer className="t"/>
      </div>
  )
}

export default App;