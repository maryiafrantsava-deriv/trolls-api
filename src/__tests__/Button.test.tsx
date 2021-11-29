import { render, screen } from "@testing-library/react";
import Button from "components/common/Button/Button";
import React from "react";

describe("Button", () => {
    let mock_on_click: () => void;
    beforeEach(() => {
        mock_on_click = jest.fn();
    });

    it("'Reset Connection' Button is rendered with correct text", () => {
        const result = render(
            <Button id="reset" text="Reset Connection" className="reset-btn" clickHandler={mock_on_click} />
        );

        expect(screen.getByText("Reset Connection")).toBeInTheDocument();
        expect(result.container.querySelector("#reset")).toHaveClass("reset-btn");
        expect(screen.queryByText("Send Request")).not.toBeInTheDocument();
    });
    it("'Send Request' Button is rendered with correct text", () => {
        const result = render(
            <Button id="playground-send-btn" className="btn-submit" text="Send Request" clickHandler={mock_on_click} />
        );

        expect(screen.getByText("Send Request")).toBeInTheDocument();
        expect(result.container.querySelector("#playground-send-btn")).toHaveClass("btn-submit");
        expect(screen.queryByText("Reset Connection")).not.toBeInTheDocument();
    });
    it("'Authenticate' Button is rendered with correct text", () => {
        const result = render(
            <Button
                id="send-auth-manually-btn"
                className="btn-authenticate"
                text="Authenticate"
                clickHandler={mock_on_click}
            />
        );

        expect(screen.getByText("Authenticate")).toBeInTheDocument();
        expect(result.container.querySelector("#send-auth-manually-btn")).toHaveClass("btn-authenticate");
        expect(screen.queryByText("Send Request")).not.toBeInTheDocument();
    });
});
