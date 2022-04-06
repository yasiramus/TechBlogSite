// home css importation
import "./home.css";

// importation of Animation
import 'animate.css';

// importation of homepage images
import Clock from "../Image/clock.png";
import Ad from "../Image/ad.png";
import News from "../Image/news-icon.png";

function HomePage() {
  return (
    <>
          <div id="homebg">
              
        <main id="home">
          <div className="bg">
            <h3 className="h3 animate__animated animate__zoomIn ">We value your what you read</h3>
            <p>Reading content takes time, making it profitable shouldn't</p>
            <button>Get Started</button>
          </div>
              </main>
              
        <section id="ImgContainer">
          <h3 className="animate__animated animate__fadeInUp">
            Over two(2) million people have chosen The Tech Blog, here's why
          </h3>
          <div className="imagesCard">
            <figure>
              <img src={Clock} alt="clock" className="image" loading="lazy"/>
              <figcaption>
                <h4>Save time</h4>
              <p>  Reading made easier with the tech blog, tech blog will automatically
                show the current content saving you time making
                from scrolling.</p>
              </figcaption>
            </figure>
            <figure>
              <img src={Ad} alt="Ad" className="image" loading="lazy"/>
              <figcaption>
                <h4> Ads oh4timized for mobile</h4>
                <p>Tech Blog can optimize the size of your ad units to automatically
                fit desktop or mobile, meaning there's more chance they'll be
                seen and clicked.</p>
              </figcaption>
            </figure>
            <figure>
              <img src={News} alt="news" className="image" loading="lazy" />
              <figcaption>
                <h4>Lastest content</h4>
               <p> Get the lastest content to read daily on the tech blog, in order
                to help broaden your knowledge and to know the happenings in the
                tech industry.</p>
              </figcaption>
            </figure>
          </div>
              </section>
              <section className="containerTwo">
                  <div className="quoteImg">
                      <div className="h6">
                      <h6>“</h6>
                      </div>
                      <p>The biggest problem is that Facebook and Google are these giant feedback loops that give people
                          what they want to hear. And when you use them in a world where your
                          biases are being constantly confirmed, you become susceptible to fake news, propaganda, demagoguery.
                      </p>
                      <p className="writer">By: Franklin Foer</p>
                  </div>
              </section>  
      </div>
    </>
  );
}

export default HomePage;
