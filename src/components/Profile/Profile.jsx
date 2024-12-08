import React from "react";
import { profile } from "../../assets";

export default function Profile(props) {
  const { cvDataCopy } = props;
  const profileData = cvDataCopy?.profile;
  const basicInformationData = profileData?.basicInformation;
  const aboutMeData = profileData?.aboutMe;

  console.log(aboutMeData?.aboutMeTitle);
  return (
    <div className="w-[1440px] h-[460px] bg-[#4731D3] flex flex-col items-center">
      <p className="text-[48px] text-[#CBF281] pl-[230px] mt-[25px] self-start">
        {profileData?.profileTitle}
      </p>
      <div className="w-[975px] flex gap-[10px] items-center">
        <div className="w-[300px] h-[300px] flex flex-col gap-[10px] text-[14px] text-[#FFFFFF]">
          <p className="text-[25px]">
            {basicInformationData?.basicInformationTitle}
          </p>
          <div className="flex gap-[10px]">
            <p>{basicInformationData?.dateOfBirth?.dateOfBirthTitle}</p>
            <p>{basicInformationData?.dateOfBirth?.dateOfBirth}</p>
          </div>

          <div className="flex gap-[10px]">
            <p>{basicInformationData?.cityOfResidence?.cityOfResidenceTitle}</p>
            <p>{basicInformationData?.cityOfResidence?.cityOfResidence}</p>
          </div>

          <div className="flex gap-[10px]">
            <p>{basicInformationData?.educationStatus?.educationStatusTitle}</p>
            <p>{basicInformationData?.educationStatus?.educationStatus}</p>
          </div>

          <div className="flex gap-[10px]">
            <p>{basicInformationData?.preferredRole?.preferredRoleTitle}</p>
            <p>{basicInformationData?.preferredRole?.preferredRole}</p>
          </div>
        </div>
        <img className="w-[450px] h-[400px]" src={profile} alt="profile" />
        <div className="w-[400px] h-[300px] flex flex-col gap-[10px] text-[14px] text-[#FFFFFF]">
          <p className="text-[25px]">{aboutMeData?.aboutMeTitle}</p>
          <p>{aboutMeData?.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}
