import React from "react";
import Layout from "./layout";
import { useAppMax, useAppStore } from "./createAppStore";
import BeeldGeluid from "./beeldengeluid";
import Grafische from "./grafischevormgeving";
import InternetTech from "./internettechnieken";
import Script from "./scripten";
import Vrij from "./vrijwerk";
import Animation from "./animatie";

const Animatie = () => {
  const appName = useAppStore((state) => state.appName);

  return (
    <Layout title={appName}>
      <div className={`rounded-b-lg h-full bg-white overflow-scroll`}>
        {appName === "Finder" ? null : appName === "Animatie" ? (
          <Animation />
        ) : appName === "Beeld en Geluid" ? (
          <BeeldGeluid />
        ) : appName === "Grafische Vormgeving" ? (
          <Grafische />
        ) : appName === "Internet Technieken" ? (
          <InternetTech />
        ) : appName === "Scripten" ? (
          <Script />
        ) : appName === "Vrij Werk" ? (
          <Vrij />
        ) : null}
      </div>
    </Layout>
  );
};

export default Animatie;
