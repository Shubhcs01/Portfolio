import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import moviego from '../../Assets/moviego.png'
import reelify from '../../Assets/reelify-1.png'
import nameit from '../../Assets/nameit.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={moviego}
                isBlog={false}
                title="MovieGo"
                description="Movie Recommendation Web App built using ReactJS and TMDB API. It recommends trending movies
                fetching from The Movie Database (TMDB) which is a popular, community-built database for movies and TV shows. The App has features like Pagination, Add to Favorite,
                filter, and local storage."
                ghLink="https://github.com/Shubhcs01/MovieGo"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nameit}
                isBlog={false}
                title="Name It"
                description="Name-It is a Web application that generates more than 100
                awesome names for your next startup or project based on the given
                keyword and also tells the user whether the domain name is available
                or not. If the domain name is available it re-directs you to namecheap.com
                website on one-click. HTML, CSS, and ReactJS used to build this app."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={reelify}
                isBlog={false}
                title="Reelify"
                description="Reelify is a Social media web application where users
                can share their posts with other users, watch reels and connect with
                others. It Includes features like Real-time posts, likes, comments, shares, reels,
                loginand signUp. It was built with ReactJS, NodeJS, and Firebase."
                ghLink="https://github.com/Shubhcs01/Reelify"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist