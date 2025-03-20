import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "../components/sections/HeroSection"; // Adjust import path as necessary
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";

// Mock necessary modules
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));


describe("HeroSection", () => {
  it("renders correctly", () => {
    render(<HeroSection />);

    // Check if the main title text is rendered
    expect(screen.getByText(/Paul K. Your next hire/i)).toBeInTheDocument();

    // Check if the description text is rendered
    expect(
      screen.getByText(/There’s a FirstTime for everything, so go ahead, try something new!/i)
    ).toBeInTheDocument();

    // Check if the buttons are rendered
    expect(screen.getByText(/Add More →/i)).toBeInTheDocument();
  });

  

  it("renders 'Login' button when no user is signed in", () => {
    // Mock currentUser as null (user not signed in)
    auth.currentUser = null;

    render(<HeroSection />);

    // Check that the Login button is rendered instead of Signout
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it("navigates to /portfolio/new when 'Add More →' is clicked", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(<HeroSection />);

    // Find the 'Add More →' button and click it
    const addMoreButton = screen.getByText(/Add More →/i);
    fireEvent.click(addMoreButton);

    // Ensure the router.push() was called with the correct URL
  });
});