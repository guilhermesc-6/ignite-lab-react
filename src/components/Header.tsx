import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  isModalActive: boolean;
  setIsModalActive: Function;
}

export const Header = (props: HeaderProps) => {
  const { isModalActive, setIsModalActive } = props;
  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <header className="w-full pl-6 py-5 flex items-center justify-between gap-2 lg:items-center lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />

      <span
        className={`pr-6 text-gray-100 flex items-center gap-2 cursor-pointer lg:hidden `}
        onClick={handleModal}
      >
        Aulas
        {isModalActive ? (
          <X color="#8ec2de" size={24} />
        ) : (
          <List color="#8ec2de" size={24} />
        )}
      </span>
    </header>
  );
};
