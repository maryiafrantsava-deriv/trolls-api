import { render } from "@testing-library/react";
import NotFound from "pages/404";
import React from "react";

describe("NotFound", () => {
    it("NotFound page is rendered", () => {
        const result = render(<NotFound />);

        expect(result.container.querySelector(".not_found-wrapper")).toBeInTheDocument();
        expect(result.getByText("404: Not Found")).toBeInTheDocument();
        expect(result.queryByText("API Playground")).not.toBeInTheDocument();
    });
});
