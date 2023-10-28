import React, { useEffect } from "react";
import NoteCard from "./NoteCard";
import TabsNavigation from "./Tabs";
import { notesState, showCompletedTasks, tabState } from "./RecoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import Navbar from "./Navbar";
import { Container, Grid, Typography } from "@mui/material";
import NoteEditor from "./NoteEditor";

export default function HomeScreen() {
  const [notes, setNotes] = useRecoilState(notesState);
  const currentTab = useRecoilValue(tabState);
  const showOnlyCompletedTasks = useRecoilValue(showCompletedTasks);
  useEffect(() => {
    if (localStorage.getItem("notes") != null) {
      console.log(JSON.parse(localStorage.getItem("notes")));
      setNotes(JSON.parse(localStorage.getItem("notes")));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const visibleNotes = notes.filter(
    (n) =>
      (n.category == currentTab || currentTab == "all") &&
      (showOnlyCompletedTasks ? n.completed : true)
  );
  return (
    <div
      style={{ width: "100%", height: "100%", padding: "0px", margin: "0px" }}
    >
      <Navbar />
      <Container>
        <Typography
          variant="h5"
          sx={{
            color: "#000000cc",
            marginTop: "40px",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          Your Notes
        </Typography>
        <TabsNavigation />
        <Grid item={true}>
          {visibleNotes.length > 0 ? (
            visibleNotes.map((n) => <NoteCard key={n} note={n}></NoteCard>)
          ) : (
            <p
              style={{
                color: "#00000080",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              No notes found for this category
            </p>
          )}
        </Grid>
      </Container>
    </div>
  );
}
