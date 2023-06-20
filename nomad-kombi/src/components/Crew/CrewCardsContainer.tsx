import React from "react"
import { useTranslation } from "react-i18next"

import leia1 from "../../assets/img/crew/leia1.jpeg"
import leia2 from "../../assets/img/crew/leia2.jpeg"
import marci1 from "../../assets/img/crew/marci1.jpeg"
import marci2 from "../../assets/img/crew/marci2.jpeg"
import mike1 from "../../assets/img/crew/mike1.jpeg"
// import mike2 from "../../assets/img/crew/mike2.jpeg"
import carda1 from "../../assets/img/crew/carda1.jpeg"
import carda2 from "../../assets/img/crew/carda2.jpeg"

import { CrewCard } from "./CrewCard"

interface IHomeCardContainer extends React.HTMLAttributes<HTMLDivElement> {}

export const CrewCardsContainer = ({ ...props }: IHomeCardContainer) => {
  const { t } = useTranslation()
  return (
    <section className="px-12 flex flex-col gap-8 py-4">
      <CrewCard
        name={t("Crew1Name")}
        title={t("Crew1Title")}
        text={t("Crew1Text")}
        img1={leia1}
        img2={leia2}
      />
      <CrewCard
        name={t("Crew2Name")}
        title={t("Crew2Title")}
        text={t("Crew2Text")}
        img1={marci1}
        img2={marci2}
      />
      <CrewCard
        name={t("Crew3Name")}
        title={t("Crew3Title")}
        text={t("Crew3Text")}
        img1={mike1}
        img2={mike1}
      />
      <CrewCard
        name={t("Crew4Name")}
        title={t("Crew4Title")}
        text={t("Crew4Text")}
        img1={carda1}
        img2={carda2}
      />
    </section>
  )
}
