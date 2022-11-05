import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses"; // import expenses
import Invoices from "./routes/invoices"; // import invoices
import Invoice from "./routes/invoice"; // import invoice
import Expense from "./routes/expense"; // import expense

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      {/* nest route */}
      <Route path="/" element={<App />} >
        {/* add expenses component */}
        <Route path="expenses" element={<Expenses />} >
        <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an expense</p>
              </main>
            }
          />
          <Route path=":expenseId" element={<Expense />} />
          </Route>
        {/* add invoices component */}
        <Route path="invoices" element={<Invoices />} >
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        {/* catch all other routes */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page not available!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
