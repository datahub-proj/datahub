import Layout from "./Layout/Layout";
import useSettings from "hooks/useSettings";

const AppLayout = () => {
  const { settings } = useSettings();
  console.log(settings);
  return <Layout />;
};

export default AppLayout;
