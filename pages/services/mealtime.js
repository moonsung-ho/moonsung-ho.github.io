import "../../app/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ position: "" }}>
      <iframe
        style={{ height: "100vh", width: "100vw", border: 0, margin: 0 }}
        src="https://geupsik.super.site"
      ></iframe>
      <button
        style={{
          position: "fixed",
          top: 20,
          display: "flex",
          left: 20
        }}
        class="btn btn-dark btn-lg"
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white"
          }}
          href="/"
        >
          {"<"}
        </Link>
      </button>
    </main>
  );
}
