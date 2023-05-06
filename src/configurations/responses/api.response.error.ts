import ApiResponse from "./api.response";

export default class ApiResponseError extends ApiResponse {
  errorMsg: string;

  constructor(errorMsg: string, ok: boolean, status: number) {
    super();
    this.errorMsg = errorMsg;
    this.status = status;
    this.ok = ok;
  }

  public override GetFullLog(): string {
    return `the status is ${
      this.status
    }, the api responded ${this.OkPipeConverter()} and the error response is: ${
      this.errorMsg
    }
    )}`;
  }
}
