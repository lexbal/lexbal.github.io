import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from 'react-intl';
import messages_fr from "./translations/fr.json";
import messages_en from "./translations/en.json";
import './index.css';

import App from "./App";

const root         = createRoot(document.getElementById("root")!);
const language     = navigator.language.split(/[-_]/)[0];
const messages:any = {
  'fr': messages_fr,
  'en': messages_en
};

root.render(
  <StrictMode>
    <IntlProvider locale={language} defaultLocale="fr" messages={messages[language]}>
      <App />
    </IntlProvider>
  </StrictMode>
);