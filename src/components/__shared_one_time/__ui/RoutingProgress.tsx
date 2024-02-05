import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RoutingProgress() {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#ff6348"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
