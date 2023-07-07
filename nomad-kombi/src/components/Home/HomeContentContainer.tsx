import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import crew from "../../assets/img/crew/crew1.jpeg"
// import leia1 from "../../assets/img/crew/leia1.jpeg"
// import leia2 from "../../assets/img/crew/leia2.jpeg"
// import marci1 from "../../assets/img/crew/marci1.jpeg"
// import marci2 from "../../assets/img/crew/marci2.jpeg"
// import mike1 from "../../assets/img/crew/mike1.jpeg"
// import mike2 from "../../assets/img/crew/mike2.jpeg"
// import carda1 from "../../assets/img/crew/carda1.jpeg"
// import carda2 from "../../assets/img/crew/carda2.jpeg"
import cameradog from "../../assets/img/crew/cameradog.jpeg"
import ad from "../../assets/img/partners/ad.png"

import { HomeCard } from "./HomeCard"

interface IHomeContentContainer extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeContentContainer = ({ ...props }: IHomeContentContainer) => {
  const partnerImgClassName = "max-h-[100px]"
  const { t } = useTranslation()
  return (
    <div className="w-full text-white">
      <article className="overflow-x-scroll md:overflow-hidden lg:w-[60%] mx-auto py-4 flex justify-start md:justify-center px-4 gap-10">
        <HomeCard
          link={"/crew"}
          img={crew}
          title={t("HomeCard1Title")}
          text={t("HomeCard1Text")}
        />
        <HomeCard
          link={"/partners"}
          img={ad}
          title={t("HomeCard3Title")}
          text={t("HomeCard3Text")}
        />
        <HomeCard
          link={"/media"}
          img={cameradog}
          title={t("HomeCard2Title")}
          text={t("HomeCard2Text")}
        />
      </article>
      <article className="w-[80%] mx-auto">
        <h2 className="font-bold text-xl">{t("Partners")}</h2>
        <div className="flex w-full mt-2 justify-between">
          <Link to={"/partners"}>
            <img
              src={ad}
              alt="you can place your ad here!"
              className={partnerImgClassName}
            />
          </Link>
          <Link to={"/partners"}>
            <img
              src={ad}
              alt="you can place your ad here!"
              className={partnerImgClassName}
            />
          </Link>
          <Link to={"/partners"}>
            <img
              src={ad}
              alt="you can place your ad here!"
              className={partnerImgClassName}
            />
          </Link>
          <Link to={"/partners"}>
            <img
              src={ad}
              alt="you can place your ad here!"
              className={partnerImgClassName}
            />
          </Link>
          <Link to={"/partners"}>
            <img
              src={ad}
              alt="you can place your ad here!"
              className={partnerImgClassName}
            />
          </Link>
        </div>
      </article>
    </div>
  )
}
