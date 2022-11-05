import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getExpenses } from "../expenseData";

export default function Expenses() {
    let expenses = getExpenses(); 
    return (
        <div style={{ display: "flex" }}>
        <nav>
  {/* iterate through all expenses */}
          {expenses.map((expense) => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/expenses/${expense.number}`} 
              key={expense.number}
            >
              {expense.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    );
  }
