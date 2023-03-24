import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ProvidersWrapper } from "./test.wrapper";
import AdminPage from "../pages/AdminPage";

describe("OrderTableBoard", () => {
  //STATUS TEST
  it("should filter status true when true option selected", async () => {
    render(
      <ProvidersWrapper route="/admin">
        <AdminPage />
      </ProvidersWrapper>
    );

    // ARRANGE
    const option = screen.getAllByRole("option");

    const tableBody = screen.getByLabelText("table-body");
    const statusFalse = await screen.findAllByLabelText("status-false");
    const optionTrue = screen.getByRole("option", { name: "status-true" });

    // ACT
    fireEvent.click(optionTrue);

    // EXPECT
    expect(option).toHaveLength(3);

    await waitFor(() => {
      expect(tableBody).not.toContain(statusFalse);
    });
  }, 20000);

  // SEARCH TEST
  it("should filter by searched username keyword", async () => {
    render(
      <ProvidersWrapper route="/admin">
        <AdminPage />
      </ProvidersWrapper>
    );

    //ARRANGE
    const searchbar = screen.getByLabelText("search-input");
    const TESTING_KEYWORD = "te";

    // ACT
    fireEvent.change(searchbar, { target: { value: TESTING_KEYWORD } });
    const input = screen.getByDisplayValue(TESTING_KEYWORD) as HTMLInputElement;

    const searchBtn = screen.getByLabelText("search-button");
    fireEvent.click(searchBtn);

    // EXPECT
    expect(input.value).toEqual(TESTING_KEYWORD);
  });
});
