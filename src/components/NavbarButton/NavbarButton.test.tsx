import React from "react";
import { render } from "@testing-library/react";
import { faker } from '@faker-js/faker';
import "@testing-library/jest-dom";

import NavbarButton from "./NavbarButton";


describe("Navbar Button rendering", () => {
    test("renders the Navbar Button component", () => {
        render(<NavbarButton />)
    });

    test("check if text exists", () => {
        let randomString = faker.string.alpha()
        console.log(`random string: ${randomString}`)
        const { getByText } = render(<NavbarButton>{randomString}</NavbarButton>)
        expect(getByText(randomString))
    })
});