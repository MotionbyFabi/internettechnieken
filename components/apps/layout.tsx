import React from "react";
import Draggable from "react-draggable";

import { useAppMax, useAppStore } from "./createAppStore";
import { useAppOpen } from "./createAppStore";

interface Props {
  children: React.ReactNode;
  title: string;
}

const layout: React.FC<Props> = ({ children, title }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [appName, setAppName] = useAppStore((state) => [
    state.appName,
    state.setAppName,
  ]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setClose] = useAppOpen((state) => [state.open, state.setClose]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [max, setMax, setMin] = useAppMax((state) => [
    state.max,
    state.setMax,
    state.setMin,
  ]);
  console.log(open);
  const handleClickClose = () => {
    setAppName("Finder");
    setClose(true);
  };
  const handleClickMaximize = () => {
    if (max === true) {
      setMin(true);
    } else if (max === false) {
      setMax(true);
    }
  };
  console.log(max);

  const position = max === true ? { x: 0, y: 0 } : undefined;

  return (
    <div
      className={`w-screen h-screen ${
        max ? "pt-0" : "pt-10"
      } transition-all duration-300 ease-in-out origin-bottom ${
        open === false ? "scale-0" : "scale-100"
      }`}
    >
      <Draggable
        handle=".handle"
        grid={[2, 2]}
        position={position}
        bounds="parent"
      >
        <div className="inline-block">
          <nav
            className={`${
              max ? "" : "handle"
            } cursor-pointer h-5 flex  items-center  bg-gray-300 transition-all duration-300  ${
              max === true ? "w-screen " : "w-[854px]"
            } relative rounded-t-lg`}
          >
            <div className="p-1 h-full pl-2 space-x-1 place-content-center place-items-center absolute">
              <button
                onClick={() => handleClickClose()}
                className="float-left w-3 h-3 rounded-full bg-red-500 hover:opacity-75"
              ></button>
              <button className="float-left w-3 h-3 rounded-full bg-yellow-500 hover:opacity-75"></button>
              <button
                onClick={() => handleClickMaximize()}
                className="float-left w-3 h-3 rounded-full bg-green-500 hover:opacity-75"
              ></button>
            </div>
            <div className="flex justify-center w-full">
              <h1 className="text-black text-[14px] text-center">{title}</h1>
            </div>
          </nav>
          <div
            className={`text-white rounded-b-lg transition-all duration-300 ${
              max === true
                ? "w-screen h-[100vh] pb-[7.9em]"
                : "w-[854px] h-[480px] pb-[1.7em]"
            }`}
          >
            {children}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default layout;
