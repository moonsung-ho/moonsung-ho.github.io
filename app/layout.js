/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import localFont from "@next/font/local";

const Pretendard = localFont({ src: "../public/PretendardVariable.woff2" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={Pretendard.className}>
        <nav
          className="navbar navbar-dark navbar-expand-sm bg-black sticky-top"
          id="navbar"
          style={{ position: "sticky" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontWeight: 600 }}>
              세모
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvasSm"
              aria-controls="navbarOffcanvasSm"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end bg-dark"
              tabindex="-1"
              id="navbarOffcanvasSm"
              aria-labelledby="navbarOffcanvasLgLabel"
            >
              {" "}
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-white fw-bold"
                  id="offcanvasNavbarLabel"
                >
                  세모
                </h5>
                <button
                  type="button"
                  className="btn-close bg-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#services">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
