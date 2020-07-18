import { Grid, GridItem } from '../components/Grid'
import { Navbar } from "../components/Navbar"
import { ProjectSlider } from '../components/ProjectSlider'

const projects = [
  { title: "KC HALL", subtitle: "Business Website", imgUrl: "/images/wedding.jpg" },
  { title: "Recipax", subtitle: "Web Application", imgUrl: "/images/strawberry.jpg" },
  { title: "Your next project?", subtitle: "Freelance Work", imgUrl: "/images/sparkler.jpeg" },

]

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="home__container">

        <Grid>
          <GridItem lg={12} xl={5}>
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
          <GridItem lg={12} xl={7}>
            <div className="home__project-column">

              {/* {projects.map((project, i) => <ProjectCard key={i} {...project} />)} */}
              <ProjectSlider/>

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
