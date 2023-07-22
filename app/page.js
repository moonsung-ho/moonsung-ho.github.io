"use client";

import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedOnScroll from "@/pages/api/scrollanimationComponent";
import { BsChevronCompactDown } from "react-icons/bs";
import WiAlae from "@/pages/api/downbuttonanimation";
import { isMobile } from "react-device-detect";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  const [footerMargin, setFooterMargin] = useState(0);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        scale: 1,
        y: -10,
        transition: { duration: 0.3 },
      });
    } else {
      control.start({
        opacity: 0,
        scale: 1,
        y: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [control, inView]);

  useEffect(() => {
    if (isMobile) {
      setFooterMargin(700);
    } else {
      setFooterMargin(0);
    }
  }, []);

  return (
    <main
      data-bs-spy="scroll"
      data-bs-target="#navbar"
      data-bs-smooth-scroll="true"
    >
      <section
        style={{
          width: "100vw",
          textAlign: "center",
          height: "100vh",
          backgroundImage: 'url("/background-main.jpg")',
          backgroundSize: (isMobile && "120% 120%") || "150%",
          backgroundPosition: "center",
          backgroundRepeat: "space",
          backgroundAttachment: "fixed",
        }}
        className="justify-content-center d-flex align-items-center"
      >
        <div>
          <AnimatedOnScroll duration={0.3}>
            <span
              style={{ alignSelf: "center", margin: 10, color: "white" }}
              className="fw-bolder fs-2 m-3"
            >
              문성호
            </span>
          </AnimatedOnScroll>
          <AnimatedOnScroll duration={0.6}>
            <p className="text-light fs-5 fw-semibold mb-5">
              일상에 도움을 주는 소프트웨어를 개발합니다.
            </p>
          </AnimatedOnScroll>
          <WiAlae duration={1}>
            <BsChevronCompactDown
              color="white"
              size={35}
              // style={{ position: "absolute", bottom: "100px" }}
            />
          </WiAlae>
        </div>
      </section>
      <section
        id="about"
        style={{ width: "100vw", marginTop: "12vh" }}
        className="p-0 d-flex flex-column align-items-center"
      >
        <h1 className="fw-semibold visually-hidden">About</h1>
        <p
          style={{ alignSelf: "center", alignContent: "center" }}
          className="fs-2 fw-bold m-5 text-center"
        >
          매일 수백 명이 사용하는 서비스를 만듭니다.
        </p>
        <AnimatedOnScroll duration={0.3}>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <p className="m-2 px-4 py-1 ms-0 ps-0 fs-3 fw-semibold d-flex flex-column align-items-center">
              <span className="text-muted fs-4">누적 다운로드</span>{" "}
              <strong className="fw-bolder" style={{ fontSize: 65 }}>
                1.5만+
              </strong>
            </p>
            <p className="m-2 p-2 px-4 fs-3 fw-semibold d-flex flex-column align-items-center">
              <span className="text-muted fs-4">일일 사용자</span>{" "}
              <strong className=" fw-bolder" style={{ fontSize: 65 }}>
                800+
              </strong>
            </p>
            <p className="m-2 p-2 px-4 fs-3 fw-semibold d-flex flex-column align-items-center">
              <span className="text-muted fs-4">출시 서비스</span>{" "}
              <strong className=" fw-bolder" style={{ fontSize: 65 }}>
                3+
              </strong>
            </p>
          </div>
        </AnimatedOnScroll>

        <div
          id="vision"
          className="d-flex flex-column align-items-center m-0 m-md-5"
          style={{
            marginTop: "20vh",
          }}
        >
          <div
            className=" d-flex flex-column align-items-center fw-semibold fs-3 bg-secondary bg-opacity-100 border rounded-5 text-white w-100 py-5 px-md-5"
            style={{
              boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)",
              backgroundImage: "url('/visionbackground.jpg')",
              backgroundSize: "100%",
              backgroundPositionY: 0,
              backgroundAttachment: "fixed",
            }}
          >
            {" "}
            <AnimatedOnScroll duration={0.2}>
              <h3 className="fw-bolder fs-2">Vision</h3>
            </AnimatedOnScroll>
            <AnimatedOnScroll duration={0.4}>
              <p className="m-0 mx-2 mx-md-5 text-center px-1 px-lg-5 text-break">
                항상 노력과 고민을 하고 있으며, 불편하고, 어렵고, 힘들던 부분을
                고쳐 나가고 있습니다.
              </p>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      <div>
        <section
          id="services"
          style={{ width: "100vw", height: "130vh" }}
          className="p-5 d-flex flex-column align-items-center mt-5"
        >
          <p className="fs-3 fw-bold">문성호가 만든 서비스</p>
          <div className="text-center w-100 d-flex flex-column flex-md-row">
            <div
              id="급식시간"
              style={{
                backgroundImage:
                  "url('https://geupsik.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F5ea823c7-5f9c-4d02-997a-af69528b5976%2Fimages%2Fb75dd08f-f224-4cbc-8698-2aa71211242f.png&w=3840&q=80')",
                backgroundSize: "100%",
                height: "300px",
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)",
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll duration={0.5}>
                <h1 className="fw-bolder">급식시간</h1>
                <Link
                  className="text-decoration-none fs-4 fw-semibold p-2 py-1 rounded rounded-pill bg-white"
                  href={"/services/mealtime"}
                >
                  더 알아보기
                </Link>
              </AnimatedOnScroll>
            </div>

            <div
              id="memorus"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1595981234969-8259b94fde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGFsYnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')",
                backgroundSize: "100%",
                backgroundPosition: "center",
                height: "300px",
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)",
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll duration={0.3}>
                <h1 className="fw-bolder text-light">Memorus</h1>
                <Link
                  className="text-decoration-none fs-4 fw-semibold p-2 py-1 rounded rounded-pill bg-white"
                  href={"https://memorus.sungho.xyz"}
                >
                  더 알아보기
                </Link>
              </AnimatedOnScroll>
            </div>
          </div>
          <div className="text-center w-100 d-flex flex-column flex-md-row mb-5 mb-md-0">
            <div
              id="esat"
              style={{
                backgroundImage:
                  "url('https://camo.githubusercontent.com/8076bfa218274fa7234275809cfa9773b776dc6a979115d14de1d45ac4c18f1b/68747470733a2f2f692e696d6775722e636f6d2f5a6b384f7a516b2e706e67')",
                backgroundSize: "300%",
                height: "300px",
                backgroundRepeat: "round",
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)",
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll duration={0.3}>
                <h1 className="fw-bolder text-light">esat</h1>
                <Link
                  className="text-decoration-none fs-4 fw-semibold p-2 py-1 rounded rounded-pill bg-white"
                  href={"https://github.com/project-eSAT"}
                >
                  더 알아보기
                </Link>
              </AnimatedOnScroll>
            </div>

            <div
              id="cemo"
              style={{
                backgroundImage: "url('https://i.ibb.co/LtkqDBn/image.png')",
                backgroundSize: "100%",
                height: "300px",
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)",
                backgroundPosition: "center",
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll duration={0.3}>
                <h1 className="fw-bolder text-dark rounded rounded-4 bg-white p-1 px-2">
                  cemo.site
                </h1>
                <Link
                  className="text-decoration-none fs-4 fw-semibold p-2 py-1 rounded rounded-pill bg-white"
                  href={"https://cemo.site"}
                >
                  더 알아보기
                </Link>
              </AnimatedOnScroll>
            </div>
          </div>
        </section>
      </div>
      <div
        className="d-flex flex-column align-items-center justify-content-center w-100 border-2 border-top rounded-5 p-5 pt-0"
        style={{ marginTop: footerMargin }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: 50 }}
        >
          <AnimatedOnScroll duration={0.3}>
            <SocialIcon url="https://github.com/moonsung-ho" className="mx-2" />
          </AnimatedOnScroll>
          <AnimatedOnScroll duration={0.4}>
            <SocialIcon
              url="https://twitter.com/Sungho__Moon"
              className="mx-2"
            />
          </AnimatedOnScroll>
          <AnimatedOnScroll duration={0.5}>
            <SocialIcon
              url="https://www.facebook.com/appmealtime"
              className="mx-2"
            />
          </AnimatedOnScroll>
          <AnimatedOnScroll duration={0.6}>
            <SocialIcon url="mailto:me@sungho.xyz" className="mx-2" />
          </AnimatedOnScroll>
        </div>
        <p className="mt-3">
          2023 <Link href="https://github.com/moonsung-ho">문성호</Link>
        </p>
      </div>
    </main>
  );
}
