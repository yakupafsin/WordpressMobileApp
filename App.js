import { Provider } from 'react-redux';
import store from './src/services/storage/store';
import App from './src';
export default function MainApp() {
  return (
    <Provider store={store}>
    <App />
    </Provider>
  );
}
