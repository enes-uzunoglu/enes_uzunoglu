import React, { useEffect } from "react";

import "./App.css";
import "./index.css";
import { Hero, Footer, Profile, Projects, Skills } from "./components";
import { useLanguage } from "./contextApi/contextLanguage";
import { useTheme } from "./contextApi/ContextTheme";
import { useDispatch, useSelector } from "react-redux";
import { getData, saveData } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const dataCopy = useSelector((state) => state.dataApiReducer.data);
  // console.log(data[0]?.tr);

  const { theme, toggleTheme } = useTheme();
  const { language, switchLanguage } = useLanguage();

  useEffect(() => {
    const CvDataTr = dataCopy[0]?.tr;
    const CvDataEn = dataCopy[0]?.en;
    language === "tr"
      ? dispatch(saveData(CvDataTr))
      : dispatch(saveData(CvDataEn));
  }, [dataCopy, language]); // dataCopy eklemek fayda etti.

  const cvDataCopy = useSelector((state) => state.appReducer.cvData);
  const appData = cvDataCopy?.app;
  console.log(theme);
  return (
    <div
      className={`flex flex-col items-center relative ${
        theme === "dark" ? "bg-[#3730A3] text-white" : "bg-white text-gray-800"
      }`}
    >
      {" "}
      {/**samalamaya dikkat */}
      {cvDataCopy ? (
        <>
          {" "}
          {/**samalamaya dikkat */}
          <div className="w-[955px] text-[12px] text-end font-medium text-[#FFFFFF] flex justify-end mr-[235px] absolute z-20 top-[95px] gap-[12px]">
            <button onClick={() => switchLanguage()}>
              {language === "tr"
                ? appData?.switchLanguage
                : appData?.switchLanguage}
            </button>
            <button onClick={() => toggleTheme()}>
              {theme === "light" ? appData?.darkMode : appData?.lightMode}
            </button>
          </div>
          <Hero cvDataCopy={cvDataCopy} />
          <Skills cvDataCopy={cvDataCopy} />
          <Profile cvDataCopy={cvDataCopy} />
          <Projects cvDataCopy={cvDataCopy} />
          <Footer cvDataCopy={cvDataCopy} />{" "}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
