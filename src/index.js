import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import {IntlProvider} from 'react-intl';
import * as serviceWorker from './serviceWorker';
import {currentStrings, currentLanguage} from "./services/translation_service";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root")

ReactDOM.render(
  <React.StrictMode>
      <IntlProvider locale={currentLanguage()} messages={currentStrings()}>
    <App />
      </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
