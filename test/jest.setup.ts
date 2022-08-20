import "@testing-library/jest-dom/extend-expect";
import "@vanilla-extract/css/disableRuntimeStyles";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);
