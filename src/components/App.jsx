import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route } from 'react-router-dom';
  
import Home from './Home';
import About from './About';
import HP from '../images/HP.png';

const App = (props) => {  
  const [isOpen, toggleOpen] = useState(false);  
  let mnuLinksListClasses = 'mobile-mnu-links';
  let mnuButtonClasses = 'mobile-mnu-button';
  let mnuText = '<<';
  if(isOpen){
    mnuLinksListClasses += ' open';
    mnuButtonClasses += ' open';
    mnuText = '>>';
  }
  const handleToggleOpen = evt => {
    evt.preventDefault();
    toggleOpen(!isOpen);
  }
  return(
    <Router>
      <main>
        <section className="header">
          <div className="header--logo">
            innei system
          </div>
        </section>
        <section className="mnu">
          <div className={mnuButtonClasses}>
            <div className="mnu--button">
              <a href="/#" onClick={handleToggleOpen}>
                {mnuText}
              </a>
            </div>          
          </div>
          <div className="desktop-command-line">
            C:\&gt;<span className="blink">_</span>
          </div>
        </section>
        <section className="content">
          <div className="content--body"> 
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Router path="/about">
              <About username="pomatsuev"/>
            </Router>
            <Route path="/feedback">
              <p>Тут должна была быть форма обратной звязи...
                Но это же визитка...
              </p>
              <p>
                Вы просто пишите мне на <a href="mailto:pomatsuev@gmail.com" className="light">
                  pomatsuev@gmail.com
                </a>
              </p>
            </Route>
            <Route path="/game">
              <h2>Моя игра</h2>
              <p>На коленочке сделал игру Монополию для телефонов, написанна на VUE, 
                с использованием технологии PWA (можете сохранить себе на телефон)</p>
              <p>Оцените пожалуйста. Картинка кликабельна</p>
              <a href="https://harry-monopoly.github.io"><img src={HP}/></a>              
            </Route>
          </Switch>        
          </div>        
        </section>
        <section className="links">  
          <ul className="desktop-menu-links">
            <li>
              <Link to="/" onClick={()=>toggleOpen(!isOpen)}>&gt; Главная</Link>
            </li>
            <li>
              <Link to="/about" onClick={()=>toggleOpen(!isOpen)}>&gt; Обо мне</Link>
            </li>
            <li>
              <Link to="/feedback" onClick={()=>toggleOpen(!isOpen)}>&gt; Связь</Link>
            </li>
            <li>
              <Link to="/game" onClick={()=>toggleOpen(!isOpen)}>&gt; Моя игра</Link>
            </li>
          </ul>                  
          <ul className={mnuLinksListClasses}>
            {
              isOpen && 
              <>
                <li>
                  <Link to="/" onClick={()=>toggleOpen(!isOpen)}>&gt; Главная</Link>
                  </li>
                <li>
                  <Link to="/about" onClick={()=>toggleOpen(!isOpen)}>&gt; Обо мне</Link>
                </li>
                <li>
                  <Link to="/feedback" onClick={()=>toggleOpen(!isOpen)}>&gt; Связь</Link>
                </li>
                <li>
                  <Link to="/game" onClick={()=>toggleOpen(!isOpen)}>&gt; Моя игра</Link>
                </li>
              </>
            }
          </ul>
        </section>
      </main>
    </Router>
  )
}
export default App;