import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Checkbox, Chip, Grid } from "@mui/material";
import EditIcon from "./edit_icon.png";
import DeleteIcon from "./delete_icon.png";
import NoteEditor from "./NoteEditor";
import { useNoteDeleter, useSaveNote } from "./hooks";

const imageStyle = {
  height: "24px",
  width: "24px",
  marginLeft: "4px",
  background: "#ffffff",
  cursor: "pointer",
  padding: "2px",
};

export default function NoteCard({ note }) {
  const [openNoteEditor, setOpenNoteEditor] = useState(false);
  const noteDeleter = useNoteDeleter();
  const noteSaver = useSaveNote();
  const handleNoteEdit = () => {
    setOpenNoteEditor(true);
  };
  const handleNoteDelete = () => {
    noteDeleter(note);
  };
  const handleCompletionClick = () => {
    noteSaver({ ...note, completed: !note.completed });
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 340,
          borderRadius: "15px",
          marginTop: "10px",
        }}
      >
        <CardContent>
          <Grid container sx={{ marginBottom: "20px" }}>
            <Grid xs={6} item={true}>
              <Chip
                label={note.category}
                sx={{ background: "#ff00ff80", alignSelf: "center" }}
              />
            </Grid>
            <Grid
              xs={6}
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row-reverse",
              }}
              item={true}
            >
              <Checkbox
                checked={note.completed}
                onChange={handleCompletionClick}
              />
              <img src={EditIcon} style={imageStyle} onClick={handleNoteEdit} />
              <img
                src={DeleteIcon}
                style={imageStyle}
                onClick={handleNoteDelete}
              />
            </Grid>
          </Grid>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#1f1c1d",
            }}
            color="text.secondary"
            gutterBottom
          >
            {note.title}
          </Typography>
          <Typography variant="body2">{note.description}</Typography>
          <Typography
            sx={{
              fontSize: "12px",
              textAlign: "right",
              marginTop: "20px",
              color: "#00000080",
            }}
          >
            {note.timestamp}
          </Typography>
        </CardContent>
      </Card>
      {openNoteEditor ? (
        <NoteEditor onClose={(_) => setOpenNoteEditor(false)} note={note} />
      ) : (
        <></>
      )}
    </>
  );
}
