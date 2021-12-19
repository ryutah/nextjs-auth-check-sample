import { useReducer } from "react";

export type SessionState = {
  isAuthorized: boolean;
  token: string;
};

export const sessionInitialState = {
  isAuthorized: false,
};

export const SessionActionType = {
  SUCCESS_SIGN_IN: "SUCCESS_SIGN_IN",
  VERIFY_START: "VERIFY_START",
  VERIFY_FIELD: "VERIFY_FIELD",
  VERIFY_SUCCESS: "VERIFY_SUCCESS",
} as const;

export type SessionAction =
  | { type: typeof SessionActionType.SUCCESS_SIGN_IN }
  | { type: typeof SessionActionType.VERIFY_START }
  | { type: typeof SessionActionType.VERIFY_FIELD }
  | { type: typeof SessionActionType.VERIFY_SUCCESS; token: string };

export const sessionReducer = (
  state: SessionState,
  action: SessionAction
): SessionState => {
  useReducer;
  switch (action.type) {
    case SessionActionType.SUCCESS_SIGN_IN:
      return { ...state, isAuthorized: true };
    case SessionActionType.VERIFY_START:
      return { ...state };
    case SessionActionType.VERIFY_FIELD:
      return { ...state, isAuthorized: false };
    case SessionActionType.VERIFY_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        token: action.token,
      };
    default:
      throw new TypeError();
  }
};
