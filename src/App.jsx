import React, { useEffect } from "react";

import "./App.css";
import "./index.css";
import { Hero, Footer, Profile, Projects, Skills } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getData, saveData } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []); // buton bagımlılıgı gelebılır
  // buraya bi if gelebilir
  const data = useSelector((state) => state.dataApiReducer.data); // useEffect içine yazılmaz - loop oluşturur.
  // console.log(navigator.language); // bu kontrol ile koşulu net öğren
  const languagesSwitch = navigator.language; // ÇOK HAVALI
  useEffect(() => {
    const CvDataTr = data[0]?.tr;
    const CvDataEn = data[0]?.en;
    languagesSwitch === "tr" // ÇOK HAVALI
      ? dispatch(saveData(CvDataTr))
      : dispatch(saveData(CvDataEn));
  }, [data]);

  const cvData = useSelector((state) => state.appReducer.cvData);

  useEffect(() => {
    console.log(cvData);
  }, [cvData]);

  return (
    <div className="flex justify-center">
      {cvData ? (
        <>
          <button onClick={switchLanguage}>
            {language === "tr" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
          </button>
          <Hero cvData={cvData} />
          <Skills cvData={cvData} />
          <Profile cvData={cvData} />
          <Projects cvData={cvData} />
          <Footer cvData={cvData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
