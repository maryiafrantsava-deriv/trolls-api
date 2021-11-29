import { render } from "@testing-library/react";
import PlayGround from "pages/playground/index";
import React from "react";

describe("PlayGround", () => {
    it("PlayGround page is rendered", () => {
        const result = render(<PlayGround />);

        expect(result.container.querySelector("#content")).toHaveClass("playground-content dark");
        expect(result.container.querySelector("#content")).not.toHaveClass("playground-content light");
    });
});
