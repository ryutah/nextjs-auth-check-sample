import { Dispatch } from "react";
import { SessionAction, SessionActionType } from "../context/SessionReducer";
import { GlobalAction, GlobalActionType } from "../context/GlobalReducer";

export interface Authenticator {
  verify(dispatcher: {
    session: Dispatch<SessionAction>;
    global: Dispatch<GlobalAction>;
  }): Promise<boolean>;
}

export class FakeAuthenticator implements Authenticator {
  async verify(dispatcher: {
    session: Dispatch<SessionAction>;
    global: Dispatch<GlobalAction>;
  }): Promise<boolean> {
    dispatcher.global({ type: GlobalActionType.LOAD_START });

    const result = await new Promise<boolean>((resolve, _) => {
      setTimeout(() => resolve(true), 2000);
    });

    dispatcher.global({ type: GlobalActionType.LOAD_FINISH });
    dispatcher.session({
      type: SessionActionType.VERIFY_SUCCESS,
      token: "sample_token",
    });
    return result;
  }
}
