import React, { Suspense } from "react";

import HeaderComp from "../components/headerComponent";

// Lazy load the Things component
const Things = React.lazy(() => import("../components/ThingsComp"));

const things = () => {
  return (
    <div>
      <HeaderComp />
      <Suspense fallback={<div>Loading...</div>}>
        <Things />
      </Suspense>
    </div>
  );
};

export default things;
