import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ProvidersWrapper } from "./test.wrapper";
import AdminPage from "../pages/AdminPage";
import { fetchOrderData } from "../apis/fetchOrderData";
import mockData from "./data/mockData.json";

const VITE_DATA_URL =
  "https://file.notion.so/f/s/8c82d2f4-c58e-4329-a41e-972dfcc7e976/mock_data.json?id=a7efc5d9-b10c-4be6-a9b3-5b872438c547&table=block&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&expirationTimestamp=1680789756626&signature=8AWjVrxkPwe5OS1AlYq6Vy5Tvs6vHZfAzgpuAjLJ6fc&downloadName=mock_data.json";

describe("OrderTableBoard", () => {
  //FETCH ORDER
  it("should has fatched order data", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const data = await fetchOrderData();

    expect(data).toEqual(mockData);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(VITE_DATA_URL);
  });

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
    const statusTrue = await screen.findAllByLabelText("status-true");
    const statusFalse = await screen.findAllByLabelText("status-false");
    const optionTrue = screen.getByRole("option", { name: "status-true" });

    // ACT
    fireEvent.click(optionTrue);

    // EXPECT
    expect(option).toHaveLength(3);

    await waitFor(() => {
      // expect(tableBody).toContain(statusTrue);
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
