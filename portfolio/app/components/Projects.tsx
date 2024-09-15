import { projectDetails } from "./constants";
import { ProjectWrapper } from "./styled";
import ProjectCards from "./ProjectCards";

 const Projects = () => {
    return <ProjectWrapper>
        {projectDetails.map((cards) => {
            return <ProjectCards
                details={cards}
            />
        })}
  
    </ProjectWrapper>
}

export default Projects;