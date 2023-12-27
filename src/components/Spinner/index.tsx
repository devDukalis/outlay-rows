import { Fragment } from "react";

import Clock from "../../assets/icons/clock.svg?react";

import "@/components/Spinner/style.scss";

export function Spinner() {
  return (
    <Fragment>
      <Clock className="loading" />
    </Fragment>
  );
}
