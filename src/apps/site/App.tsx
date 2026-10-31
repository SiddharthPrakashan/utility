import type { ComponentType } from "react";

import { Layout } from "@components/Layout";
import About from "@site/pages/About";
import Contact from "@site/pages/Contact";
import Credits from "@site/pages/Credits";
import Home from "@site/pages/Home";
import NotFound from "@site/pages/NotFound";
import PrivacyPolicy from "@site/pages/PrivacyPolicy";
import Terms from "@site/pages/Terms";

const pages: Record<string, ComponentType> = {
  home: Home,
  about: About,
  "privacy-policy": PrivacyPolicy,
  terms: Terms,
  contact: Contact,
  credits: Credits,
};

interface AppProps {
  page: string | undefined;
}

export default function App({ page }: AppProps) {
  const Page = (page && pages[page]) || NotFound;

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
