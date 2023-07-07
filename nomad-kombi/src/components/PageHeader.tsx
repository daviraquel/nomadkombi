import logo from "../assets/img/logos/main-logo.png"
import { HeaderLink } from "./HeaderLink"
import { LanguageSelector } from "./LanguageSelector"

export const PageHeader = () => {
  let bgColor = "bg-mainBlue"

  const changeIcon = () => {
    const topDiv = document.getElementById("hamburguer-item-top")
    const midDiv = document.getElementById("hamburguer-item-mid")
    const lowDiv = document.getElementById("hamburguer-item-low")

    if (midDiv && topDiv && lowDiv) {
      if (midDiv.style.display !== "none") {
        midDiv.style.display = "none"
        topDiv.className += " rotate-45 absolute"
        lowDiv.className += " -rotate-45"
        return
      }
      midDiv.style.display = "block"
      topDiv.className = hamburguerItemClassName
      lowDiv.className = hamburguerItemClassName
    }
  }

  const hamburguerAction = () => {
    changeIcon()
    const menu = document.getElementById("links-menu")

    if (menu) {
      menu.classList.add(bgColor)
      menu.style.display === "none"
        ? (menu.style.display = "block")
        : (menu.style.display = "none")
    }
  }

  const hamburguerItemClassName = "w-[32px] h-[6px] rounded-[3px] bg-white"

  const navClassName = `fixed top-[60px] left-0 lg:block lg:relative lg:top-0 w-full bg-mainBlueOp`

  return (
    <header className={`${bgColor} w-full h-[60px] relative z-50`}>
      <div className="max-w-[1100px] h-full mx-auto flex items-center justify-between lg:justify-center">
        <img className="max-h-[60px] py-2" src={logo} alt="One Source" />
        <div
          id="hamburguer-container"
          className="lg:hidden min-w-[40px] max-w-[30%] flex flex-col items-center gap-[4px]"
          onClick={() => hamburguerAction()}
        >
          <div
            className={hamburguerItemClassName}
            id="hamburguer-item-top"
          ></div>
          <div
            className={hamburguerItemClassName}
            id="hamburguer-item-mid"
          ></div>
          <div
            className={hamburguerItemClassName}
            id="hamburguer-item-low"
          ></div>
        </div>
        <nav
          id="links-menu"
          style={{ display: "none" }}
          className={navClassName}
        >
          <ul className="lg:flex lg:pl-4 lg:gap-4 ">
            <HeaderLink to="/" label="Home" />
            <HeaderLink to="/crew" label="Crew" />
            <HeaderLink to="/partners" label="Partners" />
            <HeaderLink to="/media" label="Media" />
            <LanguageSelector />
          </ul>
        </nav>
      </div>
    </header>
  )
}
