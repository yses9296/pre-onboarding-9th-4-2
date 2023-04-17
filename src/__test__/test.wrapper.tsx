import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

export const ProvidersWrapper = ({
  children,
  route,
}: {
  children: ReactNode;
  route: string;
}) => {
  const queryClient = new QueryClient();

  return (
    <MemoryRouter initialEntries={[route]}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
};
