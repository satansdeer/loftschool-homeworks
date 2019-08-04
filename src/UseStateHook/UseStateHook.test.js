import React from "react";
import { Form } from "./UseStateHook";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("Form", () => {
  describe("on submit", () => {
    describe("with inputs filled in", () => {
      it("displays success message", () => {
        const { getByTestId } = render(<Form />);

        fireEvent.change(getByTestId("email-input"), {
          target: {
            value: "test@email.com"
          }
        });
        fireEvent.change(getByTestId("password-input"), {
          target: {
            value: "supersafepassword"
          }
        });

        fireEvent.click(getByTestId("submit"));

        expect(getByTestId("success-message").textContent).toBe("Вы вошли");
      });
    });
    describe("with empty inputs", () => {
      it("does nothing", () => {
        const { queryByTestId, getByTestId } = render(<Form />);

        fireEvent.click(getByTestId("submit"));

        expect(queryByTestId("success-message")).toBeFalsy();
      });
    });
  });
});
