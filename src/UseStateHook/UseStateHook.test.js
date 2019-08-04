import React from "react";
import { Form } from "./UseStateHook";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("Form", () => {
  describe("при нажатии на кнопку", () => {
    describe("с заполненными инпутами", () => {
      it("показывает сообщение об ошибке", () => {
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

    describe("с пустыми инпутами", () => {
      it("не показывает сообщение", () => {
        const { queryByTestId, getByTestId } = render(<Form />);

        fireEvent.click(getByTestId("submit"));

        expect(queryByTestId("success-message")).toBeFalsy();
      });
    });
  });
});
