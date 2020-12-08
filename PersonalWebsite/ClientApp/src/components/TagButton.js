import React from "react";
import { Button } from "react-bootstrap";
import ThemedButton from "./ThemedComponents/ThemedButton";

export default function TagButton(props) {
  return (
    <a>
      <ThemedButton className="pt-0 pb-0 pl-1 pr-1 mr-1 mb-1">
        <p className="m-0">
          {props.tagName}
        </p>
      </ThemedButton>
    </a>
  );
}