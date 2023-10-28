import {
  Box,
  Button,
  FormControl,
  Menu,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { categories } from "./RecoilState";
import { saveNote, useSaveNote } from "./hooks";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  padding: "20px",
  borderRadius: "10px",
  boxShadow: 24,
  background: "rgba(255,255,255,1)",
  pt: 2,
  px: 4,
  pb: 3,
};

const textStyle = {
  background: "#ffffffcc",
  display: "flex",
};
const textAreaContainerStyle = {
  width: "100%",
  position: "relative",
  minHeight: "40px",
  background: "#ffffffcc",
  border: "0px",
  padding: "20px",
};

export default function NoteEditor({
  onClose = (_) => {},
  note = {
    title: "",
    description: "",
    id: "",
    timestamp: "",
    category: categories[0],
    completed: false,
  },
}) {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [category, setCategory] = useState(note.category);
  const id = note.id != null && note.id != "" ? note.id : Math.random() * 1000;

  const noteSaver = useSaveNote();

  const handleSaveNote = () => {
    noteSaver({
      title,
      description,
      category,
      id,
      completed: false,
    });
    onClose();
  };

  return (
    <Modal
      open={true}
      onClose={(_) => onClose()}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={boxStyle}>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={category}
              onChange={(ev) => {
                setCategory(ev.target.value);
              }}
              autowidth
            >
              {categories.map((t) => (
                <MenuItem key={"menu-item-" + t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <div id="parent-modal-title" style={textStyle}>
          <textarea
            placeholder="Title here"
            style={textAreaContainerStyle}
            value={title}
            onChange={(ev) => {
              setTitle(ev.target.value);
            }}
          />
        </div>
        <div id="parent-modal-description" style={textStyle}>
          <textarea
            style={textAreaContainerStyle}
            placeholder="Add Description here"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>
        <Button
          variant="contained"
          sx={{ marginTop: "20px" }}
          onClick={handleSaveNote}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
}
