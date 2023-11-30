import React from "react";
import { render, screen } from "@testing-library/react";
import { faker } from '@faker-js/faker';
import "@testing-library/jest-dom";

import MenuItem from "./MenuItem";


describe("Menu Item rendering", () => {
    test("renders the Menu Item component", () => {
        render(<MenuItem />)
    });

    test("check if text exists", () => {
        let randomString = faker.string.alpha()
        console.log(`random string: ${randomString}`)
        const { getByText } = render(<MenuItem title={randomString} />)
        expect(getByText(randomString))
    })
});