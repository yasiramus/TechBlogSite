// importation of css
import "./about.css";

// importation of images
import Team1 from "../Image/team1.jpg";

import Team2 from "../Image/team2.jpg";

import Team3 from "../Image/team3.jpg";

import Img1 from "../Image/windows.jpg";

function AboutPage() {

  return (
    <>
      <div id="homebg">

        <section className="aboutPage">

          <h3>Who We Are</h3>

          <div className="pcard">

            <div id="pcards">

              <p>
                TechWire is a fast-growing, national technology news site with
                strong roots in the Seattle region and a large audience of
                loyal, tech-savvy readers around the globe, who follow the site
                for breaking news, expert analysis and unique insights into the
                technology industry.
              </p>

              <p>
                Founded in 2011, TechWire is uniquely positioned to cover some
                of the most widely followed and innovative tech companies in the
                world, and one of the most vibrant startup markets in the
                country.
              </p>

              <p>
                Our signature events bring out thousands of people to connect,
                learn, recruit, do business and have fun with a broad
                cross-section of the tech community.
              </p>

            </div>

            <div className="abtimgcard">

              <img src={Img1} alt="windows laptop" className="aboutImg" />

            </div>

          </div>

          <div className="pcard3">

            <p>
              Our membership program includes some of the most respected figures
              in the technology community: top entrepreneurs, computer
              scientists and business leaders.
            </p>

            <p>
              In addition to news coverage, TechWire provides widely-used
              resources for the Pacific Northwest technology community,
              including the GeekWork job board, GeekWire 200 startup ranking,
              GeekWire Seattle engineering outpost list, the Startup List
              database, Service Provider Directory and TechWire Calendar.
              TechWire also produces popular audio podcasts and video shows.
            </p>

            <p>
              GeekWire was started and is owned by two longtime journalists,
              John Cook and Todd Bishop; with startup veteran and investor
              Jonathan Sposato, the company's chairman. Read about our core
              values and editorial focus. For more background on GeekWire, you
              can read this 2017 feature in NiemanLab or listen to this
              interview with Todd and John by Josh Kerns of KIRO Radio.
            </p>

          </div>

          <div className="row">

            <h4>Meet The Team</h4>

            <div className="column">

              <div className="colcard">

                <img src={Team1} alt="team2" />

                <div className="teamContainer">

                  <h2>Janet Asante</h2>

                  <p className="title">CEO &amp; Founder</p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam corporis omnis, ducimus amet perspiciatis iure, eum
                    et maxime aperiam ipsam cum. Laborum, veniam. Quibusdam
                    ullam modi dolorem quod ipsa autem?.
                  </p>

                  <p className="teamp">asante@hotmail.com</p>

                </div>

              </div>

            </div>

            <div className="column">

              <div className="colcard">

                <img src={Team2} alt="team2" />

                <div className="teamContainer">

                  <h2>Amina Adams</h2>

                  <p className="title">Art Director</p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus doloribus sapiente beatae quis amet ab quae
                    sint aspernatur excepturi natus iste omnis minima,
                    distinctio aliquam accusantium pariatur libero ducimus
                    praesentium.
                  </p>

                  <p className="teamp">aminaadamsh@gmail.com</p>

                </div>

              </div>

            </div>

            <div className="column">

              <div className="colcard">

                <img src={Team3} alt="team3" />

                <div className="teamContainer">

                  <h2>Elly Mensah</h2>

                  <p className="title">Designer</p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempora voluptate dolores blanditiis ullam nemo alias illo
                    exercitationem, eos maiores consectetur, nobis dignissimos
                    excepturi incidunt sequi amet sapiente numquam eius
                    reprehenderit..
                  </p>
                  
                  <p className="teamp">elly548@gmail.com</p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}

export default AboutPage;
