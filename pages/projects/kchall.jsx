import { LANGUAGES, ProjectLayout } from '../../components/projectLayout'


export default function KcHall() {

    const props = {
        title: "O'Fallon \n KC Hall",
        subtitle: "Business Website",
        websiteUrl: "https://ofallonkchall.com",
        technologies: [
            LANGUAGES.REACT, LANGUAGES.SCSS, LANGUAGES.JAVASCRIPT,
            LANGUAGES.GATSBYJS,
        ]
    }

    return (
        <div className="kchall-page">
            <ProjectLayout {...props}>
                The O'Fallon KC Hall reached out to me to create a simple, low-budget website to replace their current outdated webpage.
                I decided to experiment with GatsbyJS, which a React framework that includes code optimizations out of the box.
                <br /><br />
                Additionally, I did all of the design work, from prototyping to full sketch mockups.
            </ProjectLayout>
        </div>

    )
}
