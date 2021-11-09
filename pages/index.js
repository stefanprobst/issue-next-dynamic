import dynamic from "next/dynamic";
import { Fragment } from "react";

const CMS = dynamic(
  async () => {
    const { default: CMS } = await import("netlify-cms-app");

    CMS.init();

    return () => null;
  },
  {
    ssr: false,
    loading: function Loading() {
      return <p>Loading</p>;
    },
  }
);

export default function HomePage() {
  return (
    <Fragment>
      <div id="nc-root" />
      <CMS />
    </Fragment>
  );
}
