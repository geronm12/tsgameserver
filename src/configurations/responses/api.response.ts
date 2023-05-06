interface IApiResponse {
  ok: boolean;
  status: number;
  GetFullLog: () => string;
  OkPipeConverter: () => string;
}

export default abstract class ApiResponse implements IApiResponse {
  ok: boolean = false;
  status: number = 0;

  public GetFullLog(): string {
    return `this api response has`;
  }

  public OkPipeConverter(): string {
    return this.ok ? "Si" : "No";
  }
}
