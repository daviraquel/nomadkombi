import { useTranslation } from "react-i18next"
import { PageLayout } from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle"
import { CrewCardsContainer } from "../components/Crew/CrewCardsContainer"

import indexBackground from "../assets/img/bg/bg-home.jpg"
import crew from "../assets/img/crew/crew1.jpeg"

export const Crew = () => {
  const { t } = useTranslation()
  return (
    <PageLayout bgImage={indexBackground} className="bg-center">
      <PageTitle text={t("CrewTitle")} noBar />
      <CrewCardsContainer />
    </PageLayout>
  )
}
