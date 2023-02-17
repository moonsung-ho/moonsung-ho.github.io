"use client";

import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedOnScroll from "@/pages/api/scrollanimationComponent";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const [fantasticWord, setFantasticWord] = useState("만들");
  useEffect(() => {
    const fantasticWords = ["만들", "그리", "쓰", "덮"];
    setFantasticWord(fantasticWords[Math.floor(Math.random() * 3)]);
  }, []);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        scale: 1,
        y: -10,
        transition: { duration: 0.3 }
      });
    } else {
      control.start({
        opacity: 0,
        scale: 1,
        y: 0,
        transition: { duration: 0.3 }
      });
    }
  }, [control, inView]);

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
          height: "30vh",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1676236285859-a2907b80f927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80")',
          backgroundSize: "100vw",
          backgroundPosition: "center"
        }}
        className="justify-content-center d-flex align-items-center"
      >
        <div>
          <span
            style={{ alignSelf: "center", margin: 10, color: "white" }}
            className="fw-bolder fs-3 m-3"
          >
            세모, 세상을 {fantasticWord}다.
          </span>
          <p className="text-light fs-6 fw-semibold">
            일상에 도움을 주는 소프트웨어를 개발합니다.
          </p>
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
          className="fs-3 fw-bold m-5 text-center"
        >
          세모는 매일 수백 명이 사용하는 서비스를 만듭니다.
        </p>
        <AnimatedOnScroll>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <p className="m-2 px-4 py-1 ms-0 ps-0 fs-3 fw-semibold d-flex flex-column align-items-center">
              <span className="text-muted fs-4">누적 다운로드</span>{" "}
              <strong className="fw-bolder" style={{ fontSize: 65 }}>
                1만+
              </strong>
            </p>
            <p className="m-2 p-2 px-4 fs-3 fw-semibold d-flex flex-column align-items-center">
              <span className="text-muted fs-4">일일 사용자</span>{" "}
              <strong className=" fw-bolder" style={{ fontSize: 65 }}>
                600+
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
        <AnimatedOnScroll>
          <div
            id="vision"
            className="d-flex flex-column align-items-center w-100 "
            style={{ marginTop: "20vh" }}
          >
            <div
              className=" text-break d-flex flex-column align-items-center fw-semibold fs-3 bg-secondary bg-opacity-100 border rounded-5 text-white w-100 p-5"
              style={{ boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)" }}
            >
              <h3 className="fw-bolder fs-2">Vision</h3>
              <p className="m-0 mx-5 text-center px-5">
                우리는 세상을 바꾸고 싶고, 바꿀 수 있습니다. 우리는 항상 노력과
                고민을 하고 있으며, 불편하고, 어렵고, 힘들던 부분을 고쳐 나가고
                있습니다.
              </p>
            </div>
          </div>
        </AnimatedOnScroll>
      </section>
      <div>
        <section
          id="services"
          style={{ width: "100vw", height: "130vh" }}
          className="p-5 d-flex flex-column align-items-center mt-5"
        >
          <p className="fs-3 fw-bold">세모가 바꿀 세상</p>
          <div className="text-center w-100 d-flex flex-column flex-md-row">
            <div
              id="급식시간"
              style={{
                backgroundImage:
                  "url('https://geupsik.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F5ea823c7-5f9c-4d02-997a-af69528b5976%2Fimages%2Fb75dd08f-f224-4cbc-8698-2aa71211242f.png&w=3840&q=80')",
                backgroundSize: "100%",
                height: "300px",
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)"
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll>
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
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)"
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll>
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
          <div className="text-center w-100 d-flex flex-column flex-md-row">
            <div
              id="fakeupdate"
              style={{
                backgroundImage:
                  "url('https://camo.githubusercontent.com/8076bfa218274fa7234275809cfa9773b776dc6a979115d14de1d45ac4c18f1b/68747470733a2f2f692e696d6775722e636f6d2f5a6b384f7a516b2e706e67')",
                backgroundSize: "100%",
                height: "300px",
                backgroundRepeat: "round",
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)"
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll>
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
              id="esat"
              style={{
                backgroundImage:
                  "url('https://github.com/sungho0205/fakeupdate/blob/master/SCR-20230218-k5.png?raw=true')",
                backgroundSize: "100%",
                height: "300px",
                backgroundRepeat: "no-repeat",
                boxShadow: "0px 9px 40px -9px rgba(0,0,0,0.59)"
              }}
              className="m-3 ms-0 d-flex flex-column align-items-center justify-content-start border border-2 rounded px-5 pb-5 pt-4 w-100"
            >
              <AnimatedOnScroll>
                <h1 className="fw-bolder text-light">Fakeupdate</h1>
                <Link
                  className="text-decoration-none fs-4 fw-semibold p-2 py-1 rounded rounded-pill bg-white"
                  href={"https://sungho0205.github.io/fakeupdate/"}
                >
                  더 알아보기
                </Link>
              </AnimatedOnScroll>
            </div>
          </div>
        </section>
      </div>
      <div>
        <footer
          className="d-flex flex-column align-items-center justify-content-center w-100 border-2 border-top rounded-5 p-5 pt-0"
          style={{ marginTop: 500 }}
        >
          <AnimatedOnScroll>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ marginTop: 50 }}
            >
              <SocialIcon
                url="https://github.com/sungho0205"
                className="mx-2"
              />
              <SocialIcon
                url="https://twitter.com/Sungho__Moon"
                className="mx-2"
              />
              <SocialIcon
                url="https://www.facebook.com/appmealtime"
                className="mx-2"
              />
              <SocialIcon url="mailto:me@sungho.xyz" className="mx-2" />
            </div>
          </AnimatedOnScroll>
          <p className="mt-3">©2023 문성호, All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
