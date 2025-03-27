import ContactButton from "./ContactButton";
import ReactSvg from "./_icons/ReactSvg";
import TailwindSvg from "./_icons/TailwindSvg";
import LinkButton from "./LinkButton";
import GitHubSvg from "./_icons/GitHubSvg";
import LinkedinSvg from "./_icons/LinkedinSvg";
import GmailSvg from "./_icons/GmailSvg";
import { useEffect, useState } from "react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-around lg:justify-around text-neutral-300 items-center min-w-full lg:fixed lg:left-0 lg:backdrop-blur-sm lg:z-50">
      <h4 className="font-bold text-lg select-none hover:scale-105 transition-all duration-300 flex gap-2 max-sm:hidden">
        Portfolio{" "}
        <ReactSvg
          width={"28px"}
          style={{ animation: "spin 5s linear infinite" }}
        />
        · <TailwindSvg width={"28px"} />
      </h4>
      <div className="flex justify-between items-center gap-4 w-full sm:w-auto">
        {/* Les boutons à gauche */}
        <div className="flex gap-4">
          <LinkButton link="https://github.com/bastiancrv/Projects">
            <GitHubSvg className={"invert"} width={"22px"} />
          </LinkButton>
          <LinkButton link="mailto:bastian.cruvellier@epitech.eu">
            <GmailSvg width={"22px"} />
          </LinkButton>
          <LinkButton link="https://www.linkedin.com/in/bastian-cruvellier-%F0%9F%9A%80-152712303/">
            <LinkedinSvg width={"22px"} />
          </LinkButton>
        </div>

        {/* Le bouton "Me contacter" aligné à droite */}
        <div className="ml-auto">
          <ContactButton title={"Me contacter"} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
