import ApiResponse from "./api.response";

export default class ApiResponseSucces<T> extends ApiResponse {
  msg: string;
  objectResponse: T;
  constructor(msg: string, ok: boolean, status: number, objectResponse: T) {
    super();
    this.msg = msg;
    this.status = status;
    this.ok = ok;
    this.objectResponse = objectResponse;
  }

  public override GetFullLog(): string {
    return `the status is ${
      this.status
    }, the api responded ${this.OkPipeConverter()} and the object response is: ${JSON.stringify(
      this.objectResponse
    )}`;
  }
}
