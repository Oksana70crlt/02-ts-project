// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
import "./global.css";

// ReactDOM.createRoot(document.getElementById("root")!).render( //повертає елемент, який має тип HTMLElement або null, але ми впевнені, що він не буде null, тому використовуємо оператор "!" для вказівки TypeScript, що цей елемент існує.
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// Альтернативний спосіб з перевіркою на null
const root = document.getElementById("root");
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
