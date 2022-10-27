import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import MenuBar from "./menubar";
import Dock from "./dock";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="referrer" content="origin" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Fabio Di Nota" />
        <meta
          name="keywords"
          content="Portfolio, Fabio Di Nota, MacOS, School, Werk, Website, React, React Portfolio, Fabio Di Nota Portfolio, React Portfolio Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio site in MacOS Style" />
        <meta content="#01A678" data-react-helmet="true" name="theme-color" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MacOS Portfolio Kunstkaai" />
        <meta property="og:description" content="MacOS Portfolio" />
        <meta property="og:image" content="" />
      </Head>
      <header className="h-full">
        <MenuBar />
      </header>
      <main
        className="background-image h-screen pb-[26px]"
        key={router.pathname}
      >
        {children}
      </main>
      <footer>
        <Dock />
      </footer>
    </>
  );
};

export default Layout;
