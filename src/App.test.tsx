import { render, screen } from '@testing-library/react';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

test('renders learn react link', () => {
  // @ts-ignore
  const {container} = render(<Provider store={store}><App /></Provider>);
  const box = container.getElementsByClassName('preloaderContainer');
  expect(box.length).toBe(1);
});
