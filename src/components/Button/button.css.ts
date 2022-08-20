import { style, styleVariants } from "@vanilla-extract/css";

export const background = styleVariants({
  primary: { background: "#645FC6" },
  secondary: { background: "#21212D" },
});

export const container = style({
  padding: "0.7rem 1.5rem",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
});
