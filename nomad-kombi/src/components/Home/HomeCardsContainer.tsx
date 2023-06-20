import React from "react"
import { useTranslation } from "react-i18next"

import { HomeCard } from "./HomeCard"

interface IHomeCardContainer extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeCardsContainer = ({ ...props }: IHomeCardContainer) => {
  const { t } = useTranslation()
  return (
    <div>
      <HomeCard
        link={"/crew"}
        img=""
        title={t("HomeCard1Title")}
        text="CONHECA A TRIPULAÇÂO"
      />
    </div>
  )
}
