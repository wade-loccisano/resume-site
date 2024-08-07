import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import "@testing-library/jest-dom";

it("should have text", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const myElem = screen.getByText("Skills");

    // ASSERT
    expect(myElem).toBeInTheDocument();
});