import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleTheme = () => {
    return (
        <div className="cursor-pointer">
            <MoonIcon className="h-8 text-gray-100 dark:hidden" />
            <SunIcon className="h-8 text-gray-100 dark:block" />
        </div>
      );
}
 
export default ToggleTheme;