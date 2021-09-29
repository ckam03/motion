import SettingsMenu from "./SettingsMenu";
import Notifications from "./Notifications";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className={`${toggleTheme && "dark"}`}>

    <div className="w-full shadow-lg h-12 flex items-center justify-between px-8 dark:bg-gray-800">
      <h1 className="text-xl font-semibold dark:text-gray-200">Motion</h1>
      <div className="flex items-center justify-center space-x-3">
      <Notifications />
      <SettingsMenu />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
