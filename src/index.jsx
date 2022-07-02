// Imports
import React, { Suspense } from "react";
import ReactDom from "react-dom";
// Lazily load modules
const App = React.lazy(() => import("./App.jsx"));
// Component declaration
function Index() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <div>index</div>
      <App />
    </Suspense>
  );
}

// Render to dom
ReactDom.render(<Index />, document.getElementById("root"));
