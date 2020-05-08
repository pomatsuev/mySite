import React, { useState, useEffect } from 'react';
import Repos from './Repos';

const About = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [me, setMe] = useState({});

  useEffect(()=>{
    setLoading(true);
    fetch('https://api.github.com/users/pomatsuev').then(response => {
      if(response.status === 200){
        return response.json();
      }
    }).then(response=>{
      setMe(response);
      setLoading(false);
    })
  }, []);
  
  return (
    <>
      {isLoading 
        ? <p>Loading...</p>
        : <>
            <h2>Обо мне</h2>
            <p>{me.name}</p>
            <img src={me.avatar_url} className="github--avatar" />
            <p>{me.location}</p>
            <p><a href={me.html_url} className="light"> GitHub</a></p>
            <p>Репозиториев: {me.public_repos}</p>
            <Repos username={me.login}/>
          </>
      }
    </>
  );
}

export default About;