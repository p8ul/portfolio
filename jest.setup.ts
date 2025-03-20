import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";

// Extend the global interface to include createRoot
declare global {
  // This tells TypeScript that a global variable named `createRoot` exists
  // with the same type as the imported createRoot function.
  // @ts-ignore
  var createRoot: typeof createRoot;
}

// Now, assign to global.createRoot with an explicit type for container.
global.createRoot = (container: Element) => createRoot(container);