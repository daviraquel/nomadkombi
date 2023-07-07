import { useTranslation } from "react-i18next"

import indexBackground from "../assets/img/bg/bg-home.jpg"

import { PageLayout } from "../components/PageLayout"
import { PageTitle } from "../components/PageTitle"
import { MediaContentContainer } from "../components/Media/MediaContentContainer"

export const Media = () => {
  const { t } = useTranslation()
  return (
    <PageLayout bgImage={indexBackground} className="bg-center">
      <div className="flex items-center justify-center gap-8 mt-4">
        <PageTitle text={t("MediaTitle")} noBar />
      </div>
      <MediaContentContainer />
    </PageLayout>
  )
}
