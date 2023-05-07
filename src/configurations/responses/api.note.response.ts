import ApiResponseSucces from "./api.response.success";
import { INote } from "../../types/note";

class ApiNoteResponse extends ApiResponseSucces<INote> {}
class ApiNoteResponseArray extends ApiResponseSucces<INote[]> {}

export { ApiNoteResponse, ApiNoteResponseArray };
