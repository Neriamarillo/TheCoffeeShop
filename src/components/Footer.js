import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark mt-auto py-3">
      <Row>
        <Col md={12} className="py-1">
          <div className="footerLinks">
            <a
              href="https://www.github.com/Neriamarillo"
              className="footerLinks me-md-5 me-3"
            >
              <FaLinkedin />{" "}
            </a>
            <a
              href="https://www.github.com/Neriamarillo"
              className="footerLinks"
            >
              <FaGithub />{" "}
            </a>
          </div>
        </Col>
      </Row>

      <div className="footer-copyright text-center pb-1 pt-3">
        © {currYear} Copyright: Jorge Nieves
      </div>
    </footer>
  );
};

export default Footer;
