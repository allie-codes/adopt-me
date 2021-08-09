import { createContext } from "react";

// only stating that this will be a function for typescript
const ThemeContext = createContext(["green", function () {}]);

export default ThemeContext;
