import React, { useState, useEffect } from 'react';
import Repos from './Repos';

const About = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [me, setMe] = useState({});
  let mounted = true;
  useEffect(()=>{    
    setLoading(true);    
    fetch(`https://api.github.com/users/${props.username}`).then(response => {
      if(response.status === 200){
        return response.json();
      }
    }).then(response=>{
      if(mounted){
        setMe(response);
        setLoading(false);
      }
    })
    return () => mounted = false;
  }, []);

  const years = Math.trunc((Date.now() - new Date('1989-02-06'))/(1000*60*60*24*365));
    
  return (
    <>
      {isLoading 
        ? <p>Loading...</p>
        : <>
            <h2>Обо мне</h2>
            <p> 
              <img src={me.avatar_url} className="github--avatar" />
              Меня зовут Станислав, мне {years}.
              Еще в школе я начал увлекатся программированием.
              На старте был Basic. Это был 7-8класс школы.
              Поступил я в унивеситет на прикладную информатику в экономике,
              Получил диплом по специальности Информатик-Экономист.
              Во время обучения в институте, я занялся Web-программированием, 
              но до конца не вдохновился им. В институте нас обучали Delphi,
              дали немного основ assambler'а. Диплом я защищаю по проекту на FoxPro. 
              После вручения диплома, на работе, мне пришлось поверхностно 
              столкнутся с 1С 7.7, я там же вникаю в С++ и С#, последний язык захватывает меня.
              Смена места работы, я продолжаю кодить на C#, одновременно плотно
              погружаясь в 1С 8.х. Перед лицом становится задача, необходимо сделать 
              проект на Ruby on Rails, фронтенд был прикручен с помощью JQuery.
              1C не отпускает меня на работе, это становится основным видом программирования.
              Но меня тянет в web, и я изучаю JavaScript и React, вместе с ними получаю
              знания по webpack, express, nodejs, graphql короче пытаюсь постигнуть full stack. Делаю небольшие проекты
              для себя, для души. Окунаюсь в React Native. Все задачи которые я ставил
              перед собой, я решил. Мне становится мало. Перехожу на Vue. И вот мы
              подошли к текущему моменту моих приключений с языками. Сейчас у меня
              упал глаз на svelte, попробовать его в деле. Но на самом деле мне нехватает
              работы в команде и серьезных проектов, попробовать себя. Уверен, что
              моих знаний максимум на джуниора, потому что отсутствует опыт разработки 
              больших проектов.
            </p>
            <h3>Данные с Github</h3>
            <p>{me.name}</p>            
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