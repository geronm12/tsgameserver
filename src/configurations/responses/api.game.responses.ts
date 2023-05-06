import ApiResponseSucces from "./api.response.success";
import { IGame } from "../../types/game";

class ApiGameResponse extends ApiResponseSucces<IGame> {}
class ApiGameResponseArray extends ApiResponseSucces<IGame[]> {}

export { ApiGameResponse, ApiGameResponseArray };
