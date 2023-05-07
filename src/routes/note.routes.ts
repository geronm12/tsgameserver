import express, { Router } from "express";
import {
  AddNote,
  DeleteNote,
  GetNoteById,
  GetNotes,
  UpdateNote,
} from "../controllers/note.controller";

const router: Router = express.Router();

router.get("/notes", GetNotes);
router.get("/notes/:id", GetNoteById);
router.post("/notes", AddNote);
router.put("/notes/:id", UpdateNote);
router.delete("/notes/:id", DeleteNote);

export { router };
