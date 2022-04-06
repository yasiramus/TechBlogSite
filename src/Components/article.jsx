import { getData } from "../data/data";

import { Link, Outlet } from "react-router-dom";

import "./article.css";

function articlePage() {
  let articles = getData();

  return (
    <>
      <div id="homebg">
        <section className="articleSection">
          <h3>Available Articles</h3>
          <div className="navlink">
            {articles.map((article, id) => (
            
            <Link to={`/article/${article.id}`} key={id}>
              
              <div className="articleContainer">

                <div className="article">
                  <h3>{article.publishedDate}</h3>
                    <h2>{article.title}</h2>
                    <p className="artDescription">
                    {article.description.slice(0,50)} ...
                  </p>
                  
                </div>

                  <div className="articlImg">
                     {article.image} 
                </div>
              
              </div>
              <hr />
            </Link>
          ))}
          </div>
        </section>
        <Outlet />
      </div>
    </>
  );
}

export default articlePage;
