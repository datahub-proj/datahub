import { createContext, useState } from "react";
import { merge } from "lodash";
import { AppLayoutSettings } from "components/AppLayout/settings";

const SettingsContext = createContext({
  settings: AppLayoutSettings,
  updateSettings: () => {},
});

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || AppLayoutSettings
  );

  console.log(currentSettings);

  const handleUpdateSettings = (update = {}) => {
    const marged = merge({}, currentSettings, update);
    setCurrentSettings(marged);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        updateSettings: handleUpdateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
