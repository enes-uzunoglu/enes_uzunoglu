import React from "react";
import { hero, github, linkedin } from "../../assets"; // dosya yolu çalışmalısın
import "./Hero.css";

export default function Hero(props) {
  const { cvDataCopy } = props;
  // console.log(cvDataCopy);
  const heroData = cvDataCopy?.hero;
  // console.log(heroData?.whoAmI);
  return (
    <div className="w-full max-w-[1440px] h-auto aspect-[1440/671] bg-[#4731D3] flex justify-center relative">
      <div className="w-full max-w-[955px] h-auto aspect-[955/375] flex flex-col m-[75px] absolute z-10 gap-[25px]">
        <div className="flex">
          <p className="text-[32px] font-medium text-[#CBF281]">
            {heroData?.name} {heroData?.surname}
          </p>
        </div>
        <div className="flex items-end">
          <div className="flex flex-col gap-[25px]">
            <p className="text-[55px] font-medium text-[#CBF281] leading-[60px]">
              {heroData?.whoAmI}
            </p>
            <p className="text-[25px] font-medium text-[#FFFFFF] leading-[30px]">
              {heroData?.whatIdo}
            </p>
            <div className="flex gap-[10px]">
              <a
                className="w-[127px] h-[52px] rounded-[6px] bg-[#FFFFFF] text-[#3730A3] border-[1px] border-solid border-[#3730A3] text-[18px] font-medium flex justify-center items-center gap-[10px] "
                href={heroData?.githubLink}
              >
                <img className="w-[26px] h-[26px]" src={github} alt="github" />
                {heroData?.github}
              </a>
              <a
                className="w-[127px] h-[52px] rounded-[6px] bg-[#FFFFFF] text-[#3730A3] border-[1px] border-solid border-[#3730A3] text-[18px] font-medium flex justify-center items-center gap-[10px] "
                href={heroData?.linkedinLink}
              >
                <img
                  className="w-[26px] h-[26px]"
                  src={linkedin}
                  alt="linkedin"
                />
                {heroData?.linkedin}
              </a>
            </div>
          </div>
          <img
            className="w-[350px] h-[375px] rounded-[18px]"
            src={hero}
            alt="hero"
          />
        </div>
      </div>
      <div className="w-full max-w-[432px] h-auto aspect-[432/671] bg-[#CBF281] ml-auto"></div>
    </div>
  );
}

{
  /**ml-auto, bir öğenin sol tarafına olabildiğince boşluk (margin-left) ekler.
Bu sayede, öğeyi yatay eksende (genellikle Flexbox düzeninde) sağa yaslar.*/
}
