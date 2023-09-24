import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const content = useRoutes(routes);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  });
  return loading ? <p>loading...</p> : <>{content}</>;
}

export default App;
