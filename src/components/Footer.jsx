import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-white">About Us</h6>
            <p className="small">
              This is a user and profile management system built to streamline
              the process of managing user accounts and profiles with robust
              security features.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="text-white">Follow Us</h6>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/LoordhuJeyakumar"
                className="mx-1 "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="GitHub"
                data-bs-original-title="GitHub"
                aria-describedby="tooltip"
                data-bs-trigger="hover"
                tabIndex="0"
                style={{ color: "white" }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/loordhujeyakumar/"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="LinkedIn"
                data-bs-original-title="LinkedIn"
                aria-describedby="tooltip"
                data-bs-trigger="hover"
                tabIndex="0"
                style={{ color: "white" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://loordhujeyakumar.netlify.app/"
                className="mx-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Portfolio"
                data-bs-original-title="Portfolio"
                aria-describedby="tooltip"
                data-bs-trigger="hover"
                tabIndex="0"
                style={{ color: "white" }}
              >
                <i class="bi bi-globe"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-white">Contact Us</h6>
            <div className="d-flex flex-column gap-2">
              <span className="small">
                Email:{" "}
                <a
                  href="mailto:loordhujeyakumar@gmail.com"
                  className="text-white "
                >
                  loordhujeyakumar@gmail.com
                </a>
              </span>
              <span className="small">
                Phone:{" "}
                <a href="tel:+919600693684" className="text-white ">
                  +91 96006 93684
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
            <a
              href="https://github.com/LoordhuJeyakumar"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              aria-hidden="true"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="GitHub"
              data-bs-original-title="GitHub"
              aria-describedby="tooltip"
              data-bs-trigger="hover"
              tabIndex="0"
            >
              Loordhu Jeyakumar &nbsp;
              <i className="bi bi-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
