interface actionTypes {
  [name: string]: string;
}

interface actionInterface {
  type: string;
  payload?: any;
}

export type ActionCreatorType = Readonly<actionInterface>;
export type ActionType = Readonly<actionTypes>;
