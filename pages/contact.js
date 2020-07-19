import { Grid, GridItem } from '../components/Grid'
import { Navbar } from "../components/Navbar"
import { ProjectSlider } from '../components/ProjectSlider'

export default function Contact() {
  return (
    <div className="home">
      <Navbar />

      <div className="home__container">

        <Grid>
          <GridItem lg={12} xl={5}>
            <div className="home__text-column">
              <div className="line-break" />
              <div className="home__subtitle">
                Contact Info
              </div>
              <div className="home__title">
                Hey there...<br /> Reach Out!
              </div>
              <div className="home__body">
                Feel free to give me a call, shoot me an email, or reach out on social media! I'm available for freelance work at an amazing rate!
              </div>
            </div>
          </GridItem>
          <GridItem lg={12} xl={7}>
            <div className="home__project-column">
              {/* <ProjectSlider/> */}
              <div className="contact-section">
              <div className="home__subtitle">
                Phone
              </div>
              <div className="home__subtitle">
                Email
              </div>
              </div>
            </div>
          </GridItem>
        </Grid>
      </div>

    </div>

  )
}
