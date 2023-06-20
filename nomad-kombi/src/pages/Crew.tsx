import { useTranslation } from "react-i18next"
import { PageLayout } from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle"
import { CrewCardsContainer } from "../components/Crew/CrewCardsContainer"

import crew from "../assets/img/crew/crew1.jpeg"

export const Crew = () => {
  const { t } = useTranslation()
  return (
    <PageLayout className="bg-center">
      <div className="flex items-center justify-center gap-8 mt-4">
        <img
          className="min-h-[150px] w-[30%] rounded-[100px]"
          src={crew}
          alt=""
        />
        <PageTitle text={t("CrewTitle")} noBar />
        <div className="min-h-[20px] w-[30%]"></div>
      </div>
      <CrewCardsContainer />
    </PageLayout>
  )
}
