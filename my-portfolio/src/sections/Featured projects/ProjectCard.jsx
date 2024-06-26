import githubSvg from "/icons/github.svg";
import liveDemoSvg from "/icons/live-demo.svg";
import PropTypes from "prop-types";

import { Button } from "../../components/FormElements/Button";
import { ImageComponent } from "../../components/ImageComponents/ImageComponent";
import { NormalText } from "../../components/TextElements/NormalText";
import { Subheading } from "../../components/TextElements/Subheading";
import { TagText } from "../../components/TextElements/TagText";

export const ProjectCard = ({ project }) => {
  // Define the function to render tags
  const renderTags = () =>
    /* Mapping through topics to display them next to each other */
    project.topics.map((topic, index) => (
      <TagText key={index} tagText={topic} />
    ));

  return (
    <article className="project-card">
      {/* Render the image */}
      <ImageComponent
        divClassName={"image"}
        elementClassName={"square-image"} // Set the class for the image element itself
        imagePath={project.imagePath} // Pass the image path from the project data
        imageAltText={`image of ${project.name} project`} // Set the alt text for the image
      />
      <div className="project-text-section">
        <Subheading className={"card-heading"} text={project.name} />
        {/* Retrieve the description from the API */}
        <NormalText text={project.description} />
        {/* Mapping through tags, to display them next to each other */}
        <div className="tags">{renderTags()}</div>
        <div className="buttons-section">
          {/* Render a button for the live demo with provided information */}
          <Button
            className={"demo-btn"}
            btnUrl={project.homepage}
            iconAlt={"Web icon"}
            iconUrl={liveDemoSvg}
            btnText={"Live demo"}
          />
          {/* Render a button for viewing the code with provided information */}
          <Button
            className={"github-btn"}
            btnUrl={project.htmlUrl}
            iconAlt={"Github icon"}
            iconUrl={githubSvg}
            btnText={"View the code"}
          />
        </div>
      </div>
    </article>
  );
};

// Prop type validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    homepage: PropTypes.string,
    htmlUrl: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};
