import useSettings from 'hooks/useSettings';
import { navigations } from 'navigations';
import { VerticalNav } from 'components/VerticalNav';
import { StyledBox, SidebarMobile } from 'styles/components/Sidebar';

const Sidebar = () => {
  const { settings, updateSettings } = useSettings();

  const updateSidebarMode = (sidebarSettings) => {
    let activeLayoutSettingsName = settings.activeLayout + 'Settings';
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  return (
    <>
      <StyledBox>
        <VerticalNav items={navigations} />
      </StyledBox>

      {/* Sidebar close */}
      <SidebarMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
    </>
  );
};

export default Sidebar;
