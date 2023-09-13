import { Breadcrumbs, Hidden, Icon } from '@mui/material';
import {
  BreadcrumbRoot,
  BreadcrumbName,
  Separator,
  StyledBreadcrumb
} from 'styles/components/BreadCrumb';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ routeSegments }) => {
  const navigate = useNavigate();

  return (
    <BreadcrumbRoot>
      {routeSegments ? (
        <Hidden xsDown>
          <BreadcrumbName>{routeSegments[routeSegments.length - 1]['name']}</BreadcrumbName>
          <Separator>|</Separator>
        </Hidden>
      ) : null}

      <Breadcrumbs>
        <StyledBreadcrumb label="Home" icon={<Icon>home</Icon>} onClick={() => navigate(`/`)} />
        {routeSegments
          ? routeSegments.map((route, index) => {
              return index !== routeSegments.length - 1 ? (
                <StyledBreadcrumb
                  key={index}
                  label={route.name}
                  onClick={() => navigate(`/${route.path}`)}
                />
              ) : (
                <StyledBreadcrumb key={index} label={route.name} />
              );
            })
          : null}
      </Breadcrumbs>
    </BreadcrumbRoot>
  );
};

export default Breadcrumb;
