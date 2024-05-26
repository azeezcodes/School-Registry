import "@testing-library/jest-dom";
import StudentTable from "@/component/StudentTable";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
   it("renders a heading", () => {
      render(<StudentTable />);
      const heading = screen.getByText("Add a New Student", { selector: "p" });
      expect(heading).toBeInTheDocument();
   });
});
