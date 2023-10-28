import { Box, Checkbox, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showCompletedTasks, tabs, tabState } from "./RecoilState";

export default function TabsNavigation() {
  const [currentTab, setCurrentTab] = useRecoilState(tabState);
  const [showOnlyCompletedTasks, setShowOnlyCompletedTasks] =
    useRecoilState(showCompletedTasks);

  const handleTabChange = (_, tab) => {
    setCurrentTab(tab);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        sx={{ flexGrow: 1, marginBottom: "20px" }}
      >
        {tabs.map((t) => (
          <Tab key={t} value={t} label={t} />
        ))}
      </Tabs>
      <Checkbox
        checked={showOnlyCompletedTasks}
        onChange={(_) => setShowOnlyCompletedTasks(!showOnlyCompletedTasks)}
      />
      <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
        Show only completed Notes
      </Typography>
    </div>
  );
}
