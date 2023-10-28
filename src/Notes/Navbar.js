import styled from "@emotion/styled";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "./search.png";
import NoteEditor from "./NoteEditor";
import { emptyNote } from "./RecoilState";

const Search = () => {
  return (
    <div
      style={{
        position: "relative",
        background: "#ffffff",
        padding: "10px",
        borderRadius: "5px",
        minWidth: "300px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={SearchIcon}
        style={{
          width: "24px",
          height: "24px ",
          marginLeft: "5px",
          marginRight: "10px",
        }}
      />
      <input
        type="text"
        style={{
          border: "0px",
          height: "24px",
          width: "100%",
          outline: "none",
        }}
      />
    </div>
  );
};
export default function Navbar() {
  const [openNoteEditor, setOpenNoteEditor] = useState(false);
  console.log(openNoteEditor);
  return (
    <>
      <AppBar
        position="static"
        sx={{
          minHeight: "80px",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <Toolbar>
          <Search />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={(_) => setOpenNoteEditor(!openNoteEditor)}
            sx={{
              background: "#ffffff80",
              display: { xs: "none", sm: "block" },
            }}
            variant="contained"
          >
            Add Note
          </Button>
        </Toolbar>
      </AppBar>
      {openNoteEditor ? (
        <NoteEditor
          onClose={(_) => setOpenNoteEditor(false)}
          note={emptyNote}
        />
      ) : (
        <></>
      )}
    </>
  );
}
