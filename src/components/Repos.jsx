import React, { useState, useEffect } from 'react';

const Repos = ({username}) => {
  const [isLoading, setLoading] = useState(false); 
  const [repos, setRepos] = useState([]);  

  useEffect(()=>{
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response=>{
        if(response.status === 200){
          return response.json();
        }
      })
      .then(response=>{
        setRepos(response);
        setLoading(false);
      })
  }, []);

  return (
    <>
    {
      isLoading 
        ? <p> Загружается список репозиториев...</p>
        : <ul>
            {repos.map(repo=>{
              return <li> {repo.full_name} </li>
            })}
          </ul>
    }
    </>
  )
}

export default Repos;

