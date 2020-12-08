import React from "react";
import { ListContainerProps } from "./types";
import { NonIdealState } from "../non-ideal-state";
import { List } from "../list";

export default function ListContainer({
  data,
  error,
  loading,
}: ListContainerProps) {
  if (loading) {
    return <span>loader skeleton here </span>;
  }

  if (error) {
    return (
      <NonIdealState
        image={<span style={{ fontSize: 70 }}>🤬</span>}
        message="Something went wrong"
        subtext={error.message}
      />
    );
  }

  if (data === undefined) {
    return null;
  }

  if (data.length === 0) {
    return (
      <NonIdealState
        image={<span style={{ fontSize: 70 }}>🤔</span>}
        message="You haven't added any items yet"
        subtext="Maybe try adding something?"
      />
    );
  }

  return <List data={data} />;
}
