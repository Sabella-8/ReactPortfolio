import data from "./pic";
import "./project.css";

function Project() {
  return (
    <div className="project-div">
      {data.map((det, index) => (
        <div key={index} className="div-card">
          <h2>{det.name}</h2>
          <a href={det.Link}>
            <img src={det.img} alt={det.name} className="Project-img" />
          </a>
          <p>{det.Description}</p>
        </div>
      ))}
    </div>
  );
}

export default Project;
