import type { NextPage } from "next";
import Layout from "../components/layout";
import ActiveApp from "../components/apps/activeApp";

const Home: NextPage = () => {
  return (
    <Layout title="Fabio Di Nota Portfolio">
      <ActiveApp />
    </Layout>
  );
};

export default Home;
