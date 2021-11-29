import { fireEvent, render } from "@testing-library/react";
import TokenInputField from "components/TokenInputField/TokenInputField";
import React from "react";

describe("TokenInputField", () => {
    let mock_on_click: () => void;
    beforeEach(() => {
        mock_on_click = jest.fn();
    });

    it("TokenInputField is rendered on Playground page", () => {
        const result = render(<TokenInputField sendTokenToJSON={mock_on_click} token="user_token_1" />);
        fireEvent.click(result.container.querySelector("#send-auth-manually-btn") as Element);

        expect(result.container.querySelector(".api-token-fieldset")).toBeInTheDocument();
        expect(result.container.querySelector(".helper-label")).not.toBeInTheDocument();
        expect(result.container.querySelector("#api-token")).toHaveValue("user_token_1");
    });

    it("TokenInputField is rendered on App Registration page", () => {
        const result = render(
            <TokenInputField
                isAppRegistration={true}
                label={"Api Token"}
                sendTokenToJSON={mock_on_click}
                token={"user_token_2"}
            />
        );

        expect(result.container.querySelector(".api-token-fieldset")).toBeInTheDocument();
        expect(result.container.querySelector(".helper-label")).toHaveTextContent("Api Token");
        expect(result.container.querySelector("#api-token")).toHaveValue("user_token_2");
    });
    it("Button in TokenInputField is enabled", () => {
        const result = render(<TokenInputField sendTokenToJSON={mock_on_click} token="user_token_3" />);
        const button = result.getByText("Authenticate");
        fireEvent.click(button);

        expect(result.container.querySelector(".api-token-fieldset")).toBeInTheDocument();
        expect(result.getByText("Authenticate")).toBeInTheDocument();
        expect(mock_on_click).toHaveBeenCalledTimes(1);
    });
});
