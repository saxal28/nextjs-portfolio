import Head from 'next/head'
import { Grid, GridItem } from '../components/Grid'
import { Navbar } from "../components/Navbar"

const projects = [
  { title: "KC HALL", subtitle: "Business Website", imgUrl: "/images/wedding.jpg" },
  { title: "Recipax", subtitle: "Web Application", imgUrl: "/images/strawberry.jpg" }
]

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="home__container">

        <Grid>
          <GridItem lg={5} xl={5}>
            <div className="home__text-column">
              <div className="line-break" />
              <div className="home__subtitle">
                Software Engineer | Designer | Tech Lover
              </div>
              <div className="home__title">
                Howdy...<br /> I'm Alan Sax
              </div>
              <div className="home__body">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              </div>
            </div>
          </GridItem>
          <GridItem lg={7} xl={7}>
            <div className="home__project-column">

              {projects.map((project, i) => <ProjectCard key={i} {...project} />)}

            </div>
          </GridItem>
        </Grid>
      </div>



      {/* <div className="container">
        <h1>container test</h1>
      </div> */}
    </div>

  )
}

const ProjectCard = ({ title, subtitle, imgUrl }) => (
  <div className="project-card" style={{background: `url(${imgUrl})`}}>
    <div class="project-card__container">
      <div className="line-break" />
      <div className="project-card__subtitle">
        {subtitle}
      </div>
      <div className="project-card__title">
        {title}
      </div>
    </div>
  </div>
)
