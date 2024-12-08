import React from "react";
import { javascript, react, redux, node, vsCode, figma } from "../../assets";

export default function Skills(props) {
  const { cvDataCopy } = props;
  const skillsData = cvDataCopy?.skills;

  return (
    <div className="w-[1440px] h-[430px] bg-[#FFFFFF] flex justify-center pl-[130px] gap-[60px]">
      <p className="w-[275px] mt-[25px] text-[48px] text-[#3730A3] font-medium">
        {skillsData?.skillsTitle}
      </p>
      <div className="w-[755px] h-[430px] flex gap-x-[80px] flex-wrap">
        <div className="flex items-center text-end gap-[40px]">
          <p className="w-[100px] text-[18px] text-[#3730A3] font-medium">
            {skillsData?.javascript}
          </p>
          <img
            className="w-[140px] h-[140px]"
            src={javascript}
            alt="javascript"
          />
        </div>
        <div className="flex items-center text-end gap-[40px]">
          <p className="w-[100px] text-[18px] text-[#3730A3] font-medium">
            {skillsData?.node}
          </p>
          <img className="w-[140px] h-[140px]" src={node} alt="node" />
        </div>
        <div className="flex items-center text-end gap-[40px]">
          <p className="w-[100px] text-[18px] text-[#3730A3] font-medium">
            {skillsData?.react}
          </p>
          <img className="w-[140px] h-[140px]" src={react} alt="react" />
        </div>
        <div className="flex items-center text-end gap-[40px]">
          <p className="w-[100px] text-[18px] text-[#3730A3] font-medium">
            {skillsData?.vsCode}
          </p>
          <img className="w-[140px] h-[140px]" src={vsCode} alt="vsCode" />
        </div>
        <div className="flex items-center text-end gap-[40px]">
          <p className="w-[100px] text-[18px] text-[#3730A3] font-medium">
            {skillsData?.redux}
          </p>
          <img className="w-[140px] h-[140px]" src={redux} alt="redux" />
        </div>

        <div className="flex items-center text-end gap-[40px]">
          <p className="w-[100px] text-[18px] text-[#3730A3] font-medium">
            {skillsData?.figma}
          </p>
          <img className="w-[140px] h-[140px]" src={figma} alt="figma" />
        </div>
      </div>
    </div>
  );
}
