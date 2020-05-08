import React, { useState, useEffect } from 'react';

const Repos = ({username}) => {
  const [isLoading, setLoading] = useState(false); 
  const [repos, setRepos] = useState([]); 
  let mounted = true; 
  useEffect(()=>{    
    setLoading(true);      
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response=>{
        if(response.status === 200){
          return response.json();
        }
      })
      .then(response=>{
        if(mounted){
          setRepos(response);
          setLoading(false);
        }
      })      
    return () => mounted = false;
  }, []);

  return (
    <>
    {
      isLoading 
        ? <p> Загружается список репозиториев...</p>
        : <ul>
            {repos.map(repo=>{
              return <li key={repo.id}><a 
                href={repo.html_url} 
                className="light">
                  {repo.name} &lt;
              </a></li>
            })}
          </ul>
    }
    </>
  )
}

export default Repos;

