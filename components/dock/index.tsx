import React, { useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useAppStore } from "../apps/createAppStore";
import { useAppOpen } from "../apps/createAppStore";

const Index = () => {
  const router = useRouter();
  const DockItems = [
    "Animatie",
    "Beeld en Geluid",
    "Grafische Vormgeving",
    "Internet Technieken",
    "Scripten",
    "Vrij Werk",
  ];

  const [appName, setAppName] = useAppStore((state) => [
    state.appName,
    state.setAppName,
  ]);
  const setOpen = useAppOpen((state) => state.setOpen);
  const handleClick = (DockItem: string) => {
    setAppName(DockItem);
    setOpen(true);
  };

  return (
    <>
      <footer className="fixed bottom-2 w-full flex justify-center ">
        <nav className=" glass-background flex justify-center items-center flex-row space-x-4 px-5 py-1 ">
          <ul className=" flex flex-row space-x-4">
            {DockItems.map((DockItem) => (
              <li
                className="cursor-pointer"
                onClick={() => handleClick(DockItem)}
                key={DockItem}
              >
                <Tooltip
                  className="glass-background-tooltip   text-black text-[16px] px-[8px] py-[2px]"
                  animate={{
                    mount: { opacity: 1 },
                    unmount: { opacity: 0 },
                  }}
                  content={DockItem}
                  offset={10}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#FFA000"
                      d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"
                    />
                    <path
                      fill="#FFCA28"
                      d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"
                    />
                  </svg>
                </Tooltip>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Index;
