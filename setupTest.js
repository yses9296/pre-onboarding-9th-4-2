import { expect, afterEach } from "vitest";
import { cleanup, configure } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";

configure({ asyncUtilTimeout: 5000 });
global.fetch = vi.fn();

expect.extend(matchers);
afterEach(() => {
  cleanup();
});
