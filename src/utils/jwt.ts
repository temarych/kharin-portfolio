import jsonwebtoken from "jsonwebtoken";

export interface Payload {
  id: string;
}

export const AUTH_SECRET = process.env.AUTH_SECRET as string;

export class JWT {
  public createAccessToken(payload: Payload): string {
    return jsonwebtoken.sign({ id: payload.id }, AUTH_SECRET, {
      expiresIn: "30min"
    });
  }

  public verifyToken(token: string): Payload {
    const payload = jsonwebtoken.verify(token, AUTH_SECRET) as Payload;
    return { id: payload.id };
  }
}

export const jwt = new JWT();