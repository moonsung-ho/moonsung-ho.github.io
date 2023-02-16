import Link from "next/link";
import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>세모</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="cemo" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        as="style"
        crossorigin
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
      />
    </>
  );
}
