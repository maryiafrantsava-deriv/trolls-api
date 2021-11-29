import { render } from "@testing-library/react";
import { ResetSendButtonsBlock } from "components/ResetSendButtonsBlock/ResetSendButtonsBlock";
import React from "react";

describe("ResetSendButtonsBlock", () => {
    let mock_on_click: () => void;
    beforeEach(() => {
        mock_on_click = jest.fn();
    });

    it("ResetSendButtonsBlock component is rendered on API Playground page", () => {
        const result = render(
            <ResetSendButtonsBlock
                isAppRegistration={false}
                sendRequest={mock_on_click}
                resetMessagesInConsole={mock_on_click}
                current_api={null}
            />
        );

        expect(result.container.querySelector(".json-btn-wrapper")).toBeInTheDocument();
        expect(result.container.querySelector("#playground-reset-btn")).toHaveClass("btn-reset btn-reset-playground");
        expect(result.container.querySelector("#playground-reset-btn")).not.toHaveClass("btn-reset gray-btn-submit");
    });
    it("ResetSendButtonsBlock component is rendered on App Registration page", () => {
        const result = render(
            <ResetSendButtonsBlock
                isAppRegistration
                sendRequest={mock_on_click}
                resetMessagesInConsole={mock_on_click}
                current_api={null}
            />
        );

        expect(result.container.querySelector(".json-btn-wrapper")).toBeInTheDocument();
        expect(result.container.querySelector("#playground-reset-btn")).toHaveClass("btn-reset gray-btn-submit");
        expect(result.container.querySelector("#playground-reset-btn")).not.toHaveClass(
            "btn-reset btn-reset-playground"
        );
    });
});
