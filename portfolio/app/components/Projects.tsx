import { ProjectDetails } from "./constants";
import { ProjectWrapper } from "./styled";
import ProjectCards from "./ProjectCards";

 const Projects = () => {
    return <ProjectWrapper>
        {ProjectDetails.map((cards) => {
            return <ProjectCards
                details={cards}
            />
        })}
  
    </ProjectWrapper>
}

export default Projects;