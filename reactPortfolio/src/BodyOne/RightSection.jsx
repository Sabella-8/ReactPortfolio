import Sab from "../sab.jpg";
import Insta from "../imagesO.png";
import Git from "../github.png";
import Face from "../images.png";
import Link from "../download.png";

function RightSection() {
  return (
    <section className="right-part">
      <div className="inside-right">
        <img src={Sab} className="sabimg" />
        <h1>Sabella Fisseha</h1>
        <nav className="navpartone">
          <a href="https://www.linkedin.com/in/sabella-fisseha/">
            <img src={Link} />
          </a>
          <a href="https://github.com/Sabella-8">
            <img src={Git} />
          </a>
          <a>
            <img src={Face} />
          </a>
          <a>
            <img src={Insta} />
          </a>
        </nav>
      </div>
    </section>
  );
}
export default RightSection;
