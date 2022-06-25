import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="w-full pl-6 py-5 flex items-start justify-start lg:items-center lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
};
