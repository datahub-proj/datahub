import { Box, ButtonBase, Icon } from '@mui/material';
import useSettings from 'hooks/useSettings';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import VerticalNavExpansionPanel from './VerticalNavExpansionPanel';
import {
  ListLabel,
  ExternalLink,
  StyledText,
  BadgeValue,
  InternalLink,
  BulletIcon
} from 'styles/components/VerticalNav';

export const VerticalNav = ({ items }) => {
  const { settings } = useSettings();
  const { mode } = settings.layoutSettings.leftSidebar;

  const renderLevels = (data) => {
    return data.map((item, index) => {
      if (item.type === 'label')
        return (
          <ListLabel key={index} mode={mode} className="sidenavHoverShow">
            {item.label}
          </ListLabel>
        );

      if (item.children) {
        return (
          <VerticalNavExpansionPanel mode={mode} item={item} key={index}>
            {renderLevels(item.children)}
          </VerticalNavExpansionPanel>
        );
      } else if (item.type === 'extLink') {
        return (
          <ExternalLink
            key={index}
            href={item.path}
            className={`${mode === 'compact' && 'compactNavItem'}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ButtonBase key={item.name} name="child" sx={{ width: '100%' }}>
              {(() => {
                if (item.icon) {
                  return <Icon className="icon">{item.icon}</Icon>;
                } else {
                  return <span className="item-icon icon-text">{item.iconText}</span>;
                }
              })()}
              <StyledText mode={mode} className="sidenavHoverShow">
                {item.name}
              </StyledText>
              <Box mx="auto"></Box>
              {item.badge && <BadgeValue>{item.badge.value}</BadgeValue>}
            </ButtonBase>
          </ExternalLink>
        );
      } else {
        return (
          <InternalLink key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `navItemActive ${mode === 'compact' && 'compactNavItem'}`
                  : `${mode === 'compact' && 'compactNavItem'}`
              }
            >
              <ButtonBase key={item.name} name="child" sx={{ width: '100%' }}>
                {item?.icon ? (
                  <Icon className="icon" sx={{ width: 36 }}>
                    {item.icon}
                  </Icon>
                ) : (
                  <Fragment>
                    <BulletIcon
                      className={`nav-bullet`}
                      sx={{ display: mode === 'compact' && 'none' }}
                    />
                    <Box
                      className="nav-bullet-text"
                      sx={{
                        ml: '20px',
                        fontSize: '11px',
                        display: mode !== 'compact' && 'none'
                      }}
                    >
                      {item.iconText}
                    </Box>
                  </Fragment>
                )}
                <StyledText mode={mode} className="sidenavHoverShow">
                  {item.name}
                </StyledText>

                <Box mx="auto" />

                {item.badge && (
                  <BadgeValue className="sidenavHoverShow">{item.badge.value}</BadgeValue>
                )}
              </ButtonBase>
            </NavLink>
          </InternalLink>
        );
      }
    });
  };

  return <div className="navigation">{renderLevels(items)}</div>;
};
