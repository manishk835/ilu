import React, { useState } from 'react';

// projectImages
import image1 from './construction-img/project_1.jpg';
import image2 from './construction-img/project_2.jpg';
import image3 from './construction-img/project_3.jpg';
import image4 from './construction-img/project_4.jpg';
import image5 from './construction-img/project_5.jpg';
import image6 from './construction-img/project_6.jpg';



const teamMembers = [
  {
    name: "Semual Umtiti",
    role: "Rong Mesetory",
    memberbgimg: require("./construction-img/member-bg-2.jpg"),
    memberimg: require("./construction-img/member-1.jpg"),
  },
  {
    name: "Evan Rakitic",
    role: "Rong Mesetory",
    memberbgimg: require("./construction-img/member-bg-2.jpg"),
    memberimg: require("./construction-img/member-2.jpg"),
  },
  {
    name: "Semual Umtiti",
    role: "Rong Mesetory",
    memberbgimg: require("./construction-img/member-bg-3.jpg"),
    memberimg: require("./construction-img/member-3.jpg"),
  },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projectImages = {
    All: [image1,image2,image3,image4,image5,image6],
    Apartment: [image2,image4,image6],
    Corporate: [image1,image3,image5],
    Restaurant: [image6,image4,image2]
  };

  return (
    <div>
      <section>
        <div className="section-1">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              {/* slider-1 */}
              <div className="carousel-item active">
                <img src={require("./construction-img/slide_1.jpg")} alt="slide1"/>
                <div className="carousel-part d-none d-md-block">
                  <h1 className="animate__animated animate__fadeInUp carousel-heading">Best <span className="heading-highlight">Service</span> Available Here</h1>
                  <p className="animate__animated animate__fadeInUp carousel-text">We Make Your Dream Home</p>
                  <img src={require("./construction-img/slider_layer_2.png")} alt="slide2" className="animate__animated animate__fadeInUp slider-layer1"/>
                </div>
              </div>

              {/* slider-2 */}
              <div className="carousel-item">
                <img src={require("./construction-img/slide_2.jpg")} alt="slide2"/>
                <div className="carousel-part d-none d-md-block">
                  <h1 className="animate__animated animate__fadeInUp carousel-heading">We Make <span className="heading-highlight">Your</span> Dream True</h1>
                  <p className="animate__animated animate__fadeInUp carousel-text">100% secure and trusted planning</p>
                  <img src={require("./construction-img/slider_layer_1.png")} alt="slide1" className="animate__animated animate__fadeInUp slider-layer2"/>
                </div>
              </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="section-2">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="section-2part">
                  <img src={require('./construction-img/worker.png')} alt="" />
                  <h3>Professional Builders</h3>
                  <p>Lorem ipsum dolor sit amet ingine seda do eiusmod incididunt ut labore dolore magna dolor aliqua.</p>
                </div>
              </div>
              <div className="col-3">
              <div className="section-2part">
                  <img src={require('./construction-img/wrench.png')} alt="" />
                  <h3>Passionate with Work</h3>
                  <p>Lorem ipsum dolor sit amet ingine seda do eiusmod incididunt ut labore dolore magna dolor aliqua.</p>
                </div>
              </div>
              <div className="col-3">
              <div className="section-2part">
                  <img src={require('./construction-img/medal-.png')} alt="" />
                  <h3>High Quality</h3>
                  <p>Lorem ipsum dolor sit amet ingine seda do eiusmod incididunt ut labore dolore magna dolor aliqua.</p>
                </div>
              </div>
              <div className="col-3">
              <div className="section-2part">
                  <img src={require('./construction-img/live-chat.png')} alt="" />
                  <h3>Great Support Team</h3>
                  <p>Lorem ipsum dolor sit amet ingine seda do eiusmod incididunt ut labore dolore magna dolor aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-3 container">
          <div className="row">
            <div className="col-6">
              <div className="about-img">
                <div className="about-img-1">
                  <img src={require('./construction-img/about-bottom-layer.jpg')} alt="" />
                </div>
                <div className="about-img-2">
                  <img src={require('./construction-img/about-top-layer.jpg')} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <h2>About Build.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad optai inim veniam, quis nostrud dolore magna aliqua exercitation. </p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.</p>
              <button type='button'>Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-4">
          <div className="container">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur donec venenatis consectetur ipsum<br/> sit amet risus vestibulum cursus. Nam</p>

            <div className="row">
              <div className="col-4">
                <div className="service-container">
                  <img src={require('./construction-img/solve.png')} alt="" />
                  <h3>Construction Build</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna.</p>
                  <button type='button'>Read More</button>
                </div>
              </div>
              <div className="col-4">
                <div className="service-container">
                <img src={require('./construction-img/brick.png')} alt="" />
                  <h3>Fresh Bricks</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna.</p>
                  <button type='button'>Read More</button>
                </div>
              </div>
              <div className="col-4">
                <div className="service-container">
                <img src={require('./construction-img/industry.png')} alt="" />
                  <h3>Commercial Building</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna.</p>
                  <button type='button'>Read More</button>
                </div>
              </div>
              <div className="col-4">
                <div className="service-container">
                <img src={require('./construction-img/wrecking-ball-crane.png')} alt="" />
                  <h3>Modern Technology</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna.</p>
                  <button type='button'>Read More</button>
                </div>
              </div>
              <div className="col-4">
                <div className="service-container">
                <img src={require('./construction-img/electrical-energy.png')} alt="" />
                  <h3>Electrical Work</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna.</p>
                  <button type='button'>Read More</button>
                </div>
              </div>
              <div className="col-4">
                <div className="service-container">
                <img src={require('./construction-img/paint-roller.png')} alt="" />
                  <h3>Roof Printing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna.</p>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="section-5 container">
        <h2>Recent Project</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="project-categories">
          {['All', 'Apartment', 'Corporate', 'Restaurant'].map(category => (
            <button 
              key={category} 
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row project-images">
          {projectImages[selectedCategory].map((image, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <img src={image} alt={selectedCategory} className="img-fluid rounded shadow-sm" />
            </div>
          ))}
        </div>
      </div>
      </section>

      <section>
        <div className="section-6">
          <h2>What our Client Says</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.</p>

          <div className="row">
              <div className="col-6">
                <div className="section-6-container">
                <h3>Lucky Manus</h3>
                <p>CEO & Developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
              </div>
              <div className="member-image">
                <img src={require('./construction-img/client_1.png')} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="section-6-container">
                <h3>David Gondar</h3>
                <p>CEO & Founder</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
              </div>
              <div className="member-image">
                <img src={require('./construction-img/client_2.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-7">
          <div className="container">
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur donec venenatis consectetur<br/>ipsum sit amet risus vestibulum cursus.
            </p>
          </div>

          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-4" key={index}>
                <div className="team-member">
                  <div className="overlay">
                    <img src={member.memberbgimg} alt={member.name} className="memberbgimg" />
                    <div className="orange-overlay"></div>
                  </div>
                  <div className="info">
                    <img src={member.memberimg} alt={member.name} className="memberimg" />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-8 container">
          <h2>Our Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur donec venenatis consectetur ipsum<br/>sit amet risus vestibulum cursus. Nam</p>
          <div className="row">
            <div className="col-4">
              <div className="blog-img">
                <img src={require('./construction-img/blog-1.jpg')} alt="" />
              </div>
              <div className="blog-detail">
              <h3>Constracta Blog Post Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ultai labore et dolore eiusmod tempor magna aliqua.</p>
              </div>
              <button type='button'>Read More</button>
            </div>
            <div className="col-4">
              <div className="blog-img">
                <img src={require('./construction-img/blog-2.jpg')} alt="" />
              </div>
              <div className="blog-detail">
                <h3>Constracta Blog Post Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ultai labore et dolore eiusmod tempor magna aliqua.</p>
              </div>
              <button type='button'>Read More</button>
            </div>
            <div className="col-4">
              <div className="blog-img">
                <img src={require('./construction-img/blog-3.jpg')} alt="" />
              </div>
              <div className="blog-detail">
              <h3>Constracta Blog Post Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ultai labore et dolore eiusmod tempor magna aliqua.</p>
              </div>
              <button type='button'>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
