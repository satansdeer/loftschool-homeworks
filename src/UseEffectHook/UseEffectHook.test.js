import React from "react";
import { UseEffectHook } from "./UseEffectHook";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

describe("UseEffectHook", () => {
  it("загружает и показывает шутку о Чаке Норрисе", () => {
    const { getByTestId } = render(<UseEffectHook />);

    expect(getByTestId("joke")).toBeFalsy();
  });
});
