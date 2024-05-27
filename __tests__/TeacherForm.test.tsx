import React from "react";
import "@testing-library/jest-dom";
import {
   render,
   screen,
   fireEvent,
   waitFor,
   act,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TeacherForm from "@/component/TeacherForm";

const queryClient = new QueryClient();

const mockFetch = jest.fn();

const renderComponent = () =>
   render(
      <QueryClientProvider client={queryClient}>
         <TeacherForm />
      </QueryClientProvider>
   );

describe("TeacherForm Page", () => {
   it("displays validation errors when submit button is clicked", async () => {
      await act(async () => {
         renderComponent();
      });

      await act(async () => {
         fireEvent.click(screen.getByText(/Submit/i));
      });

      await waitFor(() => {
         const errorMessages = screen.getAllByText(/^This field is required$/i);
         expect(errorMessages).toHaveLength(7);
      });
   });

   it("display instruction to fill the field", () => {
      renderComponent();
      expect(
         screen.getByText("Fill in your necessary Information.")
      ).toBeInTheDocument();
   });
});
