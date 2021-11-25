import React from "react";
import { render, cleanup } from "@testing-library/react";
import CanvasMenu from "components/common/CanvasMenu/CanvasMenu";
import { mockNextUseRouter } from "../utils/mockNextUseRouter";

describe("CanvasMenu", () => {
    beforeEach(() => {
        mockNextUseRouter({
            route: "/test",
            pathname: "/test",
            query: "",
            asPath: "test",
        });
    });

    it("CanvasMenu component is rendered with hidden dropdown of Documentation links", () => {
        const result = render(<CanvasMenu is_canvas_menu_shown toggleCanvasMenu={() => {}} />);

        expect(result.container.querySelector("#canvas-menu")).toHaveClass("off-canvas-menu show-canvas");
        expect(result.container.querySelector("#doc-menu-header")).toBeInTheDocument();
    });
    it("CanvasMenu component is hidden", () => {
        const result = render(<CanvasMenu is_canvas_menu_shown={false} toggleCanvasMenu={() => {}} />);

        expect(result.container.querySelector("#canvas-menu")).not.toHaveClass("off-canvas-menu show-canvas");
        expect(result.container.querySelector(".menu-panel")).not.toHaveClass("menu-panel show-dropdown");
    });
});
