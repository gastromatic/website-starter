import React, { FunctionComponent } from "react";

export interface ButtonProps {}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  return <button {...props} />;
};
