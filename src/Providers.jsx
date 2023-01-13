import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { Provider } from "react-redux";
import { store } from "./app/store";
const Providers = ({ children }) => (
  <Provider store={store}>
    <RecoilRoot>{children} </RecoilRoot>
  </Provider>
);

export default Providers;
