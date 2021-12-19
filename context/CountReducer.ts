export type CountState = {
  count: number;
};

export const countInitialState: CountState = {
  count: 0,
};

export const CountActionName = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
} as const;

export type CountAction =
  | {
      type: typeof CountActionName.INCREMENT;
    }
  | {
      type: typeof CountActionName.DECREMENT;
    };

export const countReducer = (
  state: CountState,
  action: CountAction
): CountState => {
  switch (action.type) {
    case CountActionName.INCREMENT:
      return {
        count: state.count + 1,
      };
    case CountActionName.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      throw new TypeError();
  }
};
