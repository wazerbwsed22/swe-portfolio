import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import payGreen from "../assets/img/Paygreen2.png";
import SaveGo from "../assets/img/plane.png";
import Carousel from 'react-multi-carousel';
import SpotifyClone from "../assets/img/spotifyIcon.png";
import StonyHub from "../assets/img/StonyHub.png";


export const Projects = () => {

    // const handleButtonClick = (PayGreen) => {
    //   console.log(`Button clicked for project: ${PayGreen}`);
    //   // Add your desired logic here
    // };

  const projects = [
    {
      title: "PayGreen [2023]",
      description: "An app to manage finances and provide sustainable choices",
      imgUrl: payGreen,
      extra: "Best design winner @TechTogether New York 2023 hackathon",
      link : 'https://devpost.com/software/pay-green',
      
   
    },
    {
      title: "Save & Go [2023]",
      description: "An app to simplify the travel experience with affordable flights and hotel accommodations.",
      imgUrl: SaveGo,
      extra: "",
      link: 'https://devpost.com/software/save-go',
    },
    {
      title: "Spotify Clone [2023]",
      description: "A functional clone of Spotify using Tailwind, PostgreSQL, React",
      imgUrl: SpotifyClone,
      extra: "[Code will be uploaded soon]"
    },
    {
      title: "StonyHub [2022]",
      description: "Inspired by GrubHub, this app allows food browsing for students to eat on or off campus",
      imgUrl: StonyHub,
      extra: "",
      link: 'https://devpost.com/software/stonyhub',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <h2 style={{ marginBottom: '60px' }}>Projects</h2>


          <Row className="row">
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
          </Row>

            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>} */}
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}