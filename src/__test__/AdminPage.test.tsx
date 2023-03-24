import { render, screen, waitFor } from "@testing-library/react";
import { ProvidersWrapper } from "./test.wrapper";
import AdminPage from "../pages/AdminPage";

describe("Admin", () => {
  it("should render Admin Page", async () => {
    render(
      <ProvidersWrapper route="/admin">
        <AdminPage />
      </ProvidersWrapper>
    );
    const loading = screen.getByText("Loading...");

    expect(loading).toBeInTheDocument();
    waitFor(() =>
      expect(screen.findByLabelText("admin-page")).toBeInTheDocument()
    );

    screen.debug(await screen.findByLabelText("admin-page"));
  }, 100000);
});
