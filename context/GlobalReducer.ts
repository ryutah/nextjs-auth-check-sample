export type GlobalState = {
  isFirstVisit: boolean;
  isLoading: boolean;
};

export const globalInitialState: GlobalState = {
  isFirstVisit: true,
  isLoading: false,
};

export const GlobalActionType = {
  VISIT: "VISIT",
  LOAD_START: "LOAD_START",
  LOAD_FINISH: "LOAD_FINISH",
} as const;

export type GlobalAction =
  | {
      type: typeof GlobalActionType.VISIT;
    }
  | {
      type: typeof GlobalActionType.LOAD_START;
    }
  | {
      type: typeof GlobalActionType.LOAD_FINISH;
    };

export const globalReducer = (
  state: GlobalState,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case GlobalActionType.VISIT:
      return { ...state, isFirstVisit: false };
    case GlobalActionType.LOAD_START:
      return { ...state, isLoading: true };
    case GlobalActionType.LOAD_FINISH:
      return { ...state, isLoading: false, isFirstVisit: false };
    default:
      throw new TypeError();
  }
};
