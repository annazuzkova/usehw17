import React from "react";

export function Filter({ value, onChange }) {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
}
