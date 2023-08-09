import jsonwebtoken from "jsonwebtoken";

export interface Payload {
  id: string;
}

export class JWT {
  public createAccessToken(payload: Payload): string {
    return jsonwebtoken.sign({ id: payload.id }, "KHARIN_PORTFOLIO", {
      expiresIn: "30min"
    });
  }

  public verifyToken(token: string): Payload {
    const payload = jsonwebtoken.verify(token, "KHARIN_PORTFOLIO") as Payload;
    return { id: payload.id };
  }
}

export const jwt = new JWT();