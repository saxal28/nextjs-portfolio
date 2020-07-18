import Head from 'next/head'
import { Grid, GridItem } from '../components/Grid'
import { Navbar } from "../components/Navbar"

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="home__container">

        <Grid>
          <GridItem lg={6} xl={6}>
            <div className="home__text-column">
              <div className="line-break" />
              <div className="home__subtitle">
                Software Engineer | Designer | Tech Lover
              </div>
              <div className="home__title">
                Howdy...<br/> I'm Alan Sax
              </div>
              <div className="home__body">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
              </div>
            </div>
          </GridItem>
          <GridItem lg={6} xl={6}>
            <div className="home__project-column">

              <div className="project-card">
                <div class="project-card__container">
                <div className="line-break" />
                <div className="project-card__subtitle">
                    Web Application
                  </div>
                  <div className="project-card__title">
                    Recipax
                  </div>
                </div>
              </div>
              
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
