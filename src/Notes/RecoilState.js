import { atom } from "recoil";

export const notesState = atom({
  key: "notes",
  default: [],
});

export const tabs = ["all", "home", "business", "personal"];
export const categories = tabs.filter((t) => t !== "all");
export const emptyNote = {
  id: "",
  title: "",
  description: "",
  category: "home",
  completed: false,
};
export const tabState = atom({
  key: "notes-tab",
  default: "all",
});

export const showCompletedTasks = atom({
  key: "show-completed-tasks",
  default: false,
});
