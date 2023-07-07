import React from "react"
import { Link } from "react-router-dom"

import { RiYoutubeFill, RiInstagramFill } from "react-icons/ri"

interface IMediaCard extends React.HTMLAttributes<HTMLDivElement> {
  link: string
  title: string
  text: string
  icon: string
}

export const MediaCard = ({
  link,
  title,
  text,
  icon,
  ...props
}: IMediaCard) => {
  const iconClassName = "h-[100px] w-[100px]"
  return (
    <Link
      className="group flex w-[200px] items-center flex-col bg-mainBlue rounded-xl 
      transition-all duration-300 hover:shadow-normal hover:scale-105 p-2"
      to={link}
    >
      {icon === "youtube" ? (
        <RiYoutubeFill className={iconClassName} />
      ) : (
        <RiInstagramFill className={iconClassName} />
      )}
      <div className={`mt-2 mb-4`}>
        <h3 className={`${props.className} md:text-2xl lg:text-3xl font-bold`}>
          {title}
        </h3>
        <p>{text}</p>
      </div>
    </Link>
  )
}
