import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { Tag } from '../../components/Tag'

const LANGUAGES = {
    JAVASCRIPT: "Javascript",
    SCSS: "SCSS",
    HTML: "HTML",
    GATSBYJS: "GatsbyJs"
}

const technologies = [
    LANGUAGES.HTML, LANGUAGES.SCSS, LANGUAGES.JAVASCRIPT,
    LANGUAGES.GATSBYJS,
]

export default function KcHall() {

    const getTags = (tags) => tags.map(tag => <Tag key={tag} label={tag} />)

    return (

        <div className="kchall-page">
            <PageTitle
                title="O'Fallon KC Hall"
                subtitle="Business Website"
                body="Feel free to give me a call, shoot me an email, or reach out on social media! I'm available for freelance work at an amazing rate!"
            >
                <div className="page__content">

                    <div className="page__content-title">Technologies Used</div>
                    <div className="page__content-body">
                        {getTags(technologies)}
                    </div>
                    <br/><br/>

                    <div className="page__content-title">Description of Project</div>
                    <div className="page__content-body">
                        The O'Fallon KC Hall reached out to me to create a simple, low-budget website to replace their current outdated webpage. 
                        I decided to experiment with GatsbyJS, which a React framework that includes code optimizations out of the box.  
                        <br/><br/>
                        Additionally, I did all of the design work, from prototyping to full sketch mockups.

                        <br/><br/><br/>
                        <a href="https://ofallonkchall.com" className="button" target="_blank">View Website</a>
                    </div>

                </div>

            </PageTitle>
        </div>


    )
}
