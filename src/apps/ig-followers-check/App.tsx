import { HelloWorld } from "@components/HelloWorld";
import { Layout } from "@components/Layout";

export default function App() {
  return (
    <Layout>
      <HelloWorld
        title="IG Followers Check"
        description="See who doesn't follow you back using your Instagram data export, processed entirely in your browser."
      />
    </Layout>
  );
}
