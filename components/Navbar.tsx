import SettingsMenu from "./SettingsMenu";
import Notifications from "./Notifications";
const Navbar = () => {
  return (
    <div className="w-full shadow-md h-10 flex items-center justify-between px-8">
      <h1 className="text-xl font-semibold">Motion</h1>
      <div className="flex items-center justify-center space-x-3">
      <Notifications />
      <SettingsMenu />
      </div>
    </div>
  );
};

export default Navbar;
