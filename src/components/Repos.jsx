import React from 'react';
import {LoadData} from './LoadData';
 
const Repos = ({username}) => {
  return (
    <LoadData url={`https://api.github.com/users/${username}/repos`}>
      {
        (isLoading, err, data) => {
          return <>
            {
              isLoading
                ? <p> Загружается список репозиториев...</p>
                : <ul>
                    {data && data.map(repo=>{
                      return <li key={repo.id}><a 
                        href={repo.html_url} 
                        className="light">
                          {repo.name} &lt;
                      </a></li>
                    })}
                  </ul>
            }
            {
              err && <p>Ошибка загрузки репозиториев: {err.message}</p>
            }
          </>
        }
      }
    </LoadData>   
  )
}

export default Repos;

