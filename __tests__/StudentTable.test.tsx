import React from "react";
import "@testing-library/jest-dom";
import StudentTable from "@/component/StudentTable";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const renderComponent = () =>
   render(
      <QueryClientProvider client={queryClient}>
         <StudentTable />
      </QueryClientProvider>
   );
describe("StudentTable page", () => {
   it("renders without breaking my code", () => {
      renderComponent();
      expect(screen.getByText("Add a New Student")).toBeInTheDocument();
   });

   it("displays loading state correctly", () => {
      renderComponent();
      expect(screen.getByText("Loading ........")).toBeInTheDocument();
   });

   it("displays fetched student data correctly", async () => {
      renderComponent();

      await waitFor(() => {
         expect(screen.getByText("National ID")).toBeInTheDocument();
         expect(screen.getByText("Surname")).toBeInTheDocument();
      });
   });

   it("handles the modal opening and closing", () => {
      renderComponent();
      const addButton = screen.getByText("Add a New Student");
      fireEvent.click(addButton);
      expect(screen.getByRole("presentation")).toBeInTheDocument();

   });
});
