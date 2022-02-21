import { ReactElement } from "react";
import { ReactComponent as Logo } from "../logo.svg";

type HeaderProps = { title?: number } & typeof defaultProps;

const defaultProps = {
  title: "Rick and Morty Profile",
};

function Header({ title }: HeaderProps): ReactElement {
  return (
    <header className="flex items-center space-x-3">
      <Logo />
      <span className="text-3xl sm:hidden md:block font-semibold">{title}</span>
    </header>
  );
}

Header.defaultProps = defaultProps;

export default Header;
