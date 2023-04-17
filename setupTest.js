import { expect, afterEach } from "vitest";
import { cleanup, configure } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { fetch } from "cross-fetch";

configure({ asyncUtilTimeout: 5000 });
// global.fetch = vi.fn();
global.fetch = fetch;

expect.extend(matchers);
afterEach(() => {
  cleanup();
});
