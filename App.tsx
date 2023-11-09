import { Provider } from "react-redux";

import App from "./src";
import store from "./src/services/storage/store";
export default function MainApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
