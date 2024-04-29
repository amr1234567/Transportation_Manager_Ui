export interface ILogInResponse {
   message?: string;
   statusCode?: number;
   body?: {
      token: string;
      tokenExpiration: Date;
   }
}