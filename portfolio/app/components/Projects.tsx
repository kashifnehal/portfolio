import { ProjectDetails } from "./constants";
import { ProjectWrapper } from "./styled";
import ProjectCards from "./ProjectCards";

 const Projects = () => {
    return <ProjectWrapper>
        {ProjectDetails.map((details) => {
            return <ProjectCards
                details ={details}
            />
        })}
  
    </ProjectWrapper>
}

export default Projects;