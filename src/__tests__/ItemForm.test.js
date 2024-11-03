import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";
import App from "../components/App";

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.getByText(/Add Item/i));

  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const dessertCount = screen.queryAllByText(/Dessert/i).length;

  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.getByText(/Add Item/i));

  expect(screen.getByText(/Ice Cream/i)).toBeInTheDocument();
  expect(screen.queryAllByText(/Dessert/i).length).toBe(dessertCount + 1);
});