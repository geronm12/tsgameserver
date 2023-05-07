import Note from "../models/NoteScheme";
import {
  ApiNoteResponse,
  ApiNoteResponseArray,
} from "../configurations/responses/api.note.response";
import { Request, Response } from "express";

async function GetNoteById(
  req: Request,
  res: Response
): Promise<ApiNoteResponse> {
  //db call and try add new game
  return new ApiNoteResponse("", true, 200, new Note());
}

async function GetNotes(
  req: Request,
  res: Response
): Promise<ApiNoteResponseArray> {
  return new ApiNoteResponseArray("", true, 200, [new Note(), new Note()]);
}

async function AddNote(req: Request, res: Response): Promise<ApiNoteResponse> {
  return new ApiNoteResponse("", true, 200, new Note());
}

async function UpdateNote(
  req: Request,
  res: Response
): Promise<ApiNoteResponse> {
  return new ApiNoteResponse("", true, 200, new Note());
}

async function DeleteNote(
  req: Request,
  res: Response
): Promise<ApiNoteResponse> {
  return new ApiNoteResponse("", true, 200, new Note());
}

export { GetNoteById, GetNotes, AddNote, DeleteNote, UpdateNote };
