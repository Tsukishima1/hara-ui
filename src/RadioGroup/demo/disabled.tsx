import React from "react";
import { RadioGroup, RadioGroupItem } from "hara-ui";

export default () => {
  return (
    <RadioGroup disabled>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <RadioGroupItem value="1" id="disabled:r1" />
        <label htmlFor="disabled:r1">选项1</label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <RadioGroupItem value="2" id="disabled:r2" />
        <label htmlFor="disabled:r2">选项2</label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <RadioGroupItem value="3" id="disabled:r3" />
        <label htmlFor="disabled:r3">选项3</label>
      </div>
    </RadioGroup>
  )
}
