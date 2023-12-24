import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";

import { Spinner } from "@/components/Spinner";
import { App } from "@/components/App";

import "@/scss/fonts.scss";
import "@/scss/min-reset.scss";
import "@/index.scss";

const container = document.getElementById("root")!;

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<Spinner />}>
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
