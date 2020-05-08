import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route } from 'react-router-dom';
  
import Home from './Home';
import About from './About';

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
        </section>
        <section className="content">
          <div className="content--body"> 
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Router path="/about">
              <About />
            </Router>
          </Switch>        
          </div>        
        </section>
        <section className="links">
          <ul className={mnuLinksListClasses}>
            {
              isOpen && <li><Link to="/" onClick={()=>toggleOpen(!isOpen)}>&gt; главная</Link></li>
            }
            {
              isOpen && <li> <Link to="/about" onClick={()=>toggleOpen(!isOpen)}>&gt; обо мне</Link></li>
            }
          </ul>
        </section>
      </main>
    </Router>
  )
}
export default App;