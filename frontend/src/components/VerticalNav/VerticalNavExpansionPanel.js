import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import {
  NavExpandRoot,
  BaseButton,
  BulletIcon,
  ItemText,
  BadgeValue
} from 'styles/components/VerticalNavExpansionPanel';

const VerticalNavExpansionPanel = ({ item, children, mode }) => {
  const [collapsed, setCollapsed] = useState(true);
  const elementRef = useRef(null);
  const componentHeight = useRef(0);
  const { pathname } = useLocation();
  const { name, icon, iconText, badge } = item;

  const handleClick = () => {
    componentHeight.current = 0;
    calcaulateHeight(elementRef.current);
    setCollapsed(!collapsed);
  };

  const calcaulateHeight = useCallback((node) => {
    if (node.name !== 'child') {
      for (let child of node.children) {
        calcaulateHeight(child);
      }
    }

    if (node.name === 'child') componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44; //here 44 is node height
    return;
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    calcaulateHeight(elementRef.current);

    // OPEN DROPDOWN IF CHILD IS ACTIVE
    for (let child of elementRef.current.children) {
      if (child.getAttribute('href') === pathname) {
        setCollapsed(false);
      }
    }
  }, [pathname, calcaulateHeight]);

  return (
    <NavExpandRoot>
      <BaseButton
        className={clsx({
          'has-submenu compactNavItem': true,
          compactNavItem: mode === 'compact',
          open: !collapsed
        })}
        onClick={handleClick}
      >
        <Box display="flex" alignItems="center">
          {icon && <Icon className="icon">{icon}</Icon>}
          {iconText && <BulletIcon />}
          <ItemText className="sidenavHoverShow">{name}</ItemText>
        </Box>

        {badge && <BadgeValue className="sidenavHoverShow itemIcon">{badge.value}</BadgeValue>}

        <div
          className={clsx({
            sidenavHoverShow: true,
            collapseIcon: collapsed,
            expandIcon: !collapsed
          })}
        >
          <Icon fontSize="small" sx={{ verticalAlign: 'middle' }}>
            chevron_right
          </Icon>
        </div>
      </BaseButton>

      <div
        ref={elementRef}
        className="expansion-panel submenu"
        style={collapsed ? { maxHeight: '0px' } : { maxHeight: componentHeight.current + 'px' }}
      >
        {children}
      </div>
    </NavExpandRoot>
  );
};

export default VerticalNavExpansionPanel;
