import { LANGUAGES, ProjectLayout } from "../../components/projectLayout"

export default function Recipax() {

    const {
        REACT,
        SCSS,
        REDUX,
        REDUX_THUNK,
        NODEJS,
        NESTJS,
        TYPESCRIPT,
        MYSQL,
        DOCKER
    } = LANGUAGES;

    const props = {
        title: "Recipax",
        subtitle: "Web Application",
        websiteUrl: "https://recipax.herokuapp.com",
        technologies: [
            REACT,
            SCSS,
            REDUX,
            REDUX_THUNK,
            NODEJS,
            NESTJS,
            TYPESCRIPT,
            MYSQL,
            DOCKER
        ]
    }

    return (
        <div className="recipax-page">
            <ProjectLayout {...props}>
              Recipax is a nutrition / meal prep app that I am currently developing /architecting. I'm writing the front end with React with Typescript, using the Controller higher-order-component design pattern for scalabilty / code cleanliness. 
              For state management, I decided to roll with Redux & Redux-Thunk for handling asynchronous tasks.
              <br/><br/>
              The backend is running on Node with the NestJS framework (also written in Typescript). The database of choice is MySQL, with TypeORM as my ORM.
              <br/><br/>
              Recipax is a pinterest-inspired application that will let fitness folk find healthy meal-prep recipes. It will also allow them to eventually create meal plans and export shopping lists for the week.
            </ProjectLayout>
        </div>

    )
}