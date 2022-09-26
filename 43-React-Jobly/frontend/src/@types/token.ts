// export interface IToken {
//   name: "jobly-token";
//   token: string;
// }

export type TokenType = {
  token: string;
  setToken: (token_value: string | null) => void;
};
