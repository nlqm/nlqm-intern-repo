import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import DataFetcher from "./DataFetcher";

jest.mock("axios");

test("fetches and displays data from API", async () => {
    //Mock API response
    axios.get.mockResolvedValue({
        data: { title: "Mocked API Response" },
    });

    render(<DataFetcher />);

    // Check if loading "Loading..."
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for API call to complete and check if correct data appears
    await waitFor(() => expect(screen.getByText(/mocked api response/i)).toBeInTheDocument());
});