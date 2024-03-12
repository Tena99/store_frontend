import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

import styles from "./styles.module.css";

export default function QRCodeComponent({ value }) {
  return (
    <div>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
