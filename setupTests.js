import { expect, afterEach } from "vitest";
import { cleanup, configure } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
// import { fetch } from "cross-fetch";
import fetch from "node-fetch";

configure({ asyncUtilTimeout: 5000 });

global.fetch = fetch;

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
