import React from "react";
import { render } from "react-dom";
import AnonymousStyleResolution from "./components/AnonymousStyleResolution";
import NamedStyleResolution from "./components/NamedStyleResolution";
import RuntimeStyleResolution from "./components/RuntimeStyleResolution";
import PartialStyleResolution from "./components/PartialStyleResolution";

render(
  <div>
    <AnonymousStyleResolution />
    <NamedStyleResolution />
    <RuntimeStyleResolution />
    <PartialStyleResolution />
  </div>,
  document.getElementById("main")
);
