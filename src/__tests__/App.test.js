import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("display a top-level heading with the text `Hi, I'm _____`", () => {
    //Arrange
    render(<App />);
    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    //Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("display the image of yourselt with an appropriate alt text", () => {
    //Arrange
    render(<App />);

    //Act
    const image = screen.getByAltText(/your image description/i);

    //Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "your-img-url.jpg");
});

test("display a second-level heading with thee text `About Me`", () => {
    //Arrange
    render(<App />);

    //Act
    const aboutHeading = screen.getByRole("heading", {
        name: /about me/i,
        level: 2,
    });

    //Assert
    expect(aboutHeading).toBeInTheDocument();
});

test("display a paragraph for the biography", () => {
    //Arrage
    render(<App />);

    //Act
    const biography = screen.getByText(/your biography text/i);

    //Assert
    expect(biography).toBeInTheDocument();
});

//GitHub And LinkedIn Links
test("displays a link to your GitHub page", () => {
    // Arrange
    render(<App />);

    // Act
    const githubLink = screen.getByRole("link", { name: /github/i });  // Corrected: use the actual string or regex

    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/your-username");  // Replace with your actual GitHub URL
});


test("display a link to your linkedIn page", () => {
    //Arrange
    render(<App />)

    //Act
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    //Assert
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "http://linkedin.com/in/your-username");
}
)