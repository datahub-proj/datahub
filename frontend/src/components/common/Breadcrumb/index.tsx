import { Link } from 'react-router-dom';

type RouteItem = {
  name: string;
  path?: string;
};

type BreadcrumbProps = {
  pageTitle: string;
  routeSegments: RouteItem[];
};

const Breadcrumb = ({ pageTitle, routeSegments }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageTitle}
      </h2>

      <nav>
        <ul className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/">
              Home /
            </Link>
          </li>
          {routeSegments
            ? routeSegments.map((route, index) => {
                return index !== routeSegments.length - 1 ? (
                  <li key={index}>
                    <Link className="font-medium" to={`/${route.path}`}>
                      {route.name} /
                    </Link>
                  </li>
                ) : (
                  <li key={index} className="text-primary">
                    {route.name}
                  </li>
                );
              })
            : null}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
