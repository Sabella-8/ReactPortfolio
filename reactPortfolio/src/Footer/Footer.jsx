import "./footer.css";

function Footer({ Insta, Twits, Face, Link, Git }) {
  return (
    <footer className="footer">
      <nav className="navfooter">
        <a href="https://github.com/Sabella-8">
          <img src={Git} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/sabella-fisseha/">
          <img src={Link} alt="LinkedIn" />
        </a>
        <a href="#">
          <img src={Insta} alt="Instagram" />
        </a>
        <a href="#">
          <img src={Face} alt="Facebook" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
