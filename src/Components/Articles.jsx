import { Link, useParams } from "react-router-dom";

// import { useEffect } from "react";

import { fetchArticleInfo, getData } from "../data/data";

import "./Articles.css";

function Articles() {
  
  const param = useParams();

  const data = fetchArticleInfo ( parseInt (param.authorId) );

  // declaring the filter globaly
  let filterArray;
  
  // fxn to return the rest of data excluding the one clicked 
  const arrayData = () => {

  const articles = getData();

   filterArray =  articles.filter( article => article.id !== data.id ) //the id isfor data id from the data.js file

    // console.log(filterArray);

  };

  arrayData();
  
  // useEffect(() => {


  //   console.log('arrayData')
  // })

  return (
    <>
      <section id="homebg">

        <div className="ArticlesSection">
          
              {/* this display the content of the url clicked  */}
          <div className="subCard">

            <div className="cards">

              <div id="cardImg">{data.image}</div>

              <div className="text">
                <h1> {data.title}</h1>
                <h4>{data.content}</h4>
                <p className="description">{data.description}</p>
              </div>

            </div>

            <div className="atag">

              <a href={data.url} target="_blank" rel="noreferrer">
                To read the full content click here
              </a>

            </div>

            <div className="author">

              <span>Published Date: {data.publishedDate}</span> |{" "}
              <span className="authspan">Author:{data.author}</span>

            </div>

            <a
              href={data.sourceInfo}
              target="_blank"
              rel="noreferrer"
              className="a"
            >
              {data.sourceInfo}
            </a>

          </div>

          {/* this section return the rest of the data to user  */}
          <section id="subcard2">

            <div className="subCard2">

              <h3>Lastest </h3>

              {
                filterArray.map((articles, Id) => {
                  
                  return (
                  
                    <Link to={`/article/${articles.id}`} key={Id}>
                      
                      <div className="card3">
                        
                        <div className="card4">
                          
                        <h3>Author: {articles.author}</h3>
                        <h2>{articles.title}</h2>
                          <p>{articles.content.slice(0, 30)}...</p>
                          
                        </div>
                        
                      </div>
                      
                    </Link>
                    
                  )
                  
                }
                  
                )}

            </div>
          </section>

        </div>
      </section>
    </>
  );
}

export default Articles;
