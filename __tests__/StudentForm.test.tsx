import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StudentForm from "@/component/StudentForm";

const queryClient = new QueryClient();

const mockFetch = jest.fn();



const renderComponent = () =>
   render(
      <QueryClientProvider client={queryClient}>
         <StudentForm />
      </QueryClientProvider>
   );

describe("StudentForm Page", () => {
   it("displays validation errors", async () => {
      await act(async () => {
         renderComponent();
      });

      await act(async () => {
         fireEvent.click(screen.getByText(/Submit/i));
      });

      await waitFor(() => {
         expect(screen.getAllByText(/This field is required/i)).toHaveLength(5);
      });
   });
});