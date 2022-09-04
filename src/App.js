import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budget</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard name="Entertainment" gray amount={1100} max={1000}></BudgetCard>
        <BudgetCard name="Food" gray amount={200} max={1000}></BudgetCard>
        <BudgetCard name="Car" gray amount={500} max={1000}></BudgetCard>
        <BudgetCard name="Misc" gray amount={900} max={1000}></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
