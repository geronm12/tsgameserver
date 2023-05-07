import ApiResponse from "./api.response";

class ApiResponseError extends ApiResponse {
  errorMsg: string = "";

  constructor() {
    super();
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

interface IApiResponseErrorCreator {
  factory: () => ApiResponse;
  setValues: (errorMsg: string, newStatus?: number) => void;
}

export default class ApiResponseErrorCreator
  implements IApiResponseErrorCreator
{
  factory: () => ApiResponse = () => {
    return new ApiResponseError();
  };

  setValues: (errorMsg: string, newStatus?: number) => void = (
    errorMsg: string,
    newStatus?: number
  ) => {
    const apiResponse = this.factory() as ApiResponseError;
    apiResponse.ok = false;
    apiResponse.status = newStatus || 400;
    apiResponse.errorMsg = errorMsg;
    return apiResponse;
  };
}
