import { PageHeader } from "../components/PageHeader"
import React from "react"

interface IPageLayout extends React.HTMLAttributes<HTMLDivElement> {
  bgImage?: string
  type?: "PR" | "FO" | "TB"
}

export const PageLayout = ({ bgImage, type, ...props }: IPageLayout) => {
  return (
    <div className={`relative flex flex-col min-h-[100vh]`}>
      <div
        style={{
          backgroundImage: `url(${bgImage ? bgImage : ""})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: "0.8",
        }}
        className="absolute w-full h-full top-0 left-0 items-center justify-center z-0"
      ></div>
      <PageHeader />
      <div
        className={`${props.className}  relative grow flex flex-col items-center justify-start w-full h-full z-10`}
      >
        {props.children}
      </div>
    </div>
  )
}
