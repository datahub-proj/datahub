import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

export default function ThemeRouters() {
  return useRoutes([MainRoutes]);
}
