export interface IFetchError {
  status : number;
  message: string;
}

export class FetchError extends Error implements IFetchError {
  public status: number;

  constructor(error: IFetchError) {
    super(error.message);
    this.status = error.status;
  }
}

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const status   = response.status;
  const data     = await response.json();

  if (!response.ok) {
    throw new FetchError({ status, message: data.message });
  }

  return data;
};