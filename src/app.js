import React, { useEffect, useState } from "react";
import ScaleBox from "./components/scaleAnim";
import HomeScreen from "./Notes/HomeScreen";
import { RecoilRoot } from "recoil";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <HomeScreen />
      </StyledEngineProvider>
    </RecoilRoot>
  );
}

export default App;
