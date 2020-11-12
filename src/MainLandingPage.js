import React from "react";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import RestaurantLandingPage from "demos/RestaurantLandingPage";
/* Hero */
export default ({
  features = null,
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks
}) => {
  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `${noOfLandingPages} Landing Page Demos`,
    `${noOfInnerPages} Inner Pages`,
    `${noOfComponentBlocks} Components`,
    "Lifetime Updates",
    "Fully Responsive",
    "Fully Customizable"
  ];

  return (
    <AnimationRevealPage disabled>
      <RestaurantLandingPage></RestaurantLandingPage>
    </AnimationRevealPage>
  );
};

