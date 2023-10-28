import { useState } from "react";
import { useRecoilState } from "recoil";
import { notesState } from "./RecoilState";
import { stepConnectorClasses } from "@mui/material";

export const useSaveNote = () => {
  const [notes, setNotes] = useRecoilState(notesState);
  return (currentNote) => {
    setNotes([...notes.filter((n) => n.id != currentNote.id), currentNote]);
  };
};

export const useNoteDeleter = () => {
  const [notes, setNotes] = useRecoilState(notesState);
  return (note) => {
    setNotes([...notes.filter((n) => n.id != note.id)]);
  };
};
