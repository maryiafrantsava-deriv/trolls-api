import { render } from "@testing-library/react";
import { PlaygroundComponent } from "components/PlaygroundComponent/PlaygroundComponent";
import React from "react";

describe("PlaygroundComponent", () => {
    it("PlaygroundComponent is rendered", () => {
        const result = render(<PlaygroundComponent />);

        expect(result.container.querySelector(".playground-page-wrapper")).toBeInTheDocument();
        expect(result.container.querySelector(".registrationTitle")).not.toBeInTheDocument();
    });
    it("PlaygroundComponent contains select", () => {
        const result = render(<PlaygroundComponent />);

        expect(result.container.querySelector(".playground-page-wrapper")).toBeInTheDocument();
        expect(result.getByText("Contracts For Symbol")).toBeInTheDocument();
        expect(result.queryByText("Quick Start")).not.toBeInTheDocument();
    });
    it("PlaygroundComponent contains an input to insert a token", () => {
        const result = render(<PlaygroundComponent />);

        expect(result.container.querySelector(".playground-page-wrapper")).toBeInTheDocument();
        expect(result.container.querySelector(".api-token-input")).toBeInTheDocument();
        expect(result.getByText("Authenticate")).toBeInTheDocument();
        expect(result.container.querySelector(".helper-label")).not.toBeInTheDocument();
    });
    it("PlaygroundComponent contains Request JSON textarea", () => {
        const result = render(<PlaygroundComponent />);

        expect(result.container.querySelector(".playground-page-wrapper")).toBeInTheDocument();
        expect(result.getByText("Request JSON")).toBeInTheDocument();
        expect(result.container.querySelector("textarea")).toHaveClass("textarea-request playground-request");
        expect(result.container.querySelector("textarea")).not.toHaveClass("textarea-request registration-request");
    });
    it("PlaygroundComponent contains playground console", () => {
        const result = render(<PlaygroundComponent />);

        expect(result.container.querySelector(".playground-page-wrapper")).toBeInTheDocument();
        expect(result.container.querySelector(".playground-console")).toBeInTheDocument();
    });
    it("PlaygroundComponent contains api documentation section", () => {
        const result = render(<PlaygroundComponent />);

        expect(result.container.querySelector(".playground-page-wrapper")).toBeInTheDocument();
        expect(result.container.querySelector(".playground-api-docs")).toBeInTheDocument();
    });
});
