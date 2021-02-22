import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App test suite", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("should render the app component without crashing", () => {
        screen.debug();
    });
});
