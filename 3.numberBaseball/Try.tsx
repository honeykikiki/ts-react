import * as React from "react";
import { FunctionComponent } from "react";
import { useState, useCallback, useRef } from "react";
import { Tryinfo } from "./types";

const Try: FunctionComponent<{ tryInfo: Tryinfo }> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;
