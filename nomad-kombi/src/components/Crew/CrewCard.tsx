import React from "react"

interface ICrewCard extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  title: string
  text: string
  img1: string
  img2: string
}

export const CrewCard = ({
  name,
  title,
  text,
  img1,
  img2,
  ...props
}: ICrewCard) => {
  const borderRadius = "h-full max-h-[300px]"

  const imgClassName = `h-full max-h-[300px] rounded-l-${borderRadius}`
  const img1ClassName = `${imgClassName} rounded-l-[60px]`
  const img2ClassName = `${imgClassName} rounded-r-[60px]`
  // const imgClassName = "h-full max-h-[300px] rounded-l-[30px]"
  return (
    <article
      className={`${props.className} rounded-full flex flex-col md:flex-row bg-mainBlueOp text-white text-justify`}
    >
      <img
        src={img1}
        alt={`${name}, the crew's ${title}`}
        className={img1ClassName}
      />
      <div>
        <h3 className={`md:text-2xl lg:text-3xl font-bold my-4`}>
          {name}, the <span>{title}</span>
        </h3>
        <p className="text-justify px-8">{text}</p>
      </div>
      <img
        src={img2}
        alt={`${name}, the crew's ${title}`}
        className={img2ClassName}
      />
    </article>
  )
}
