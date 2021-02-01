import { createContext, FC, useContext, useReducer } from "react";
import { Operator } from "./types";

const initialState = {
  operator: {
    username: "",
    photo: "",
    id: "",
  } as Operator,
  operators: [] as Operator[],
  userSendMail: false,
};

type StateType = typeof initialState;

const reducer = (state: StateType, action: any) => {
  switch (action.type) {
    case "CHANGE_OPERATOR":
      return {
        ...state,
        operator: action.payload,
      };
    case "SET_OPERATORS":
      return {
        ...state,
        operators: action.payload,
      };
    case "USER_SEND_MAIL":
      return {
        ...state,
        userSendMail: action.payload,
      };
  }

  return state;
};

const ChatContext = createContext<{
  state: StateType;
  setChatState: (action: { type: string; payload?: any }) => void;
}>({
  state: initialState,
  setChatState: () => void 0,
});

export const ChatContextProvider: FC = ({ children }) => {
  const [state, setChatState] = useReducer(reducer, initialState);

  return (
    <ChatContext.Provider value={{ state, setChatState }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
