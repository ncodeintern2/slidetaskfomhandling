import React from "react";
import NewMeetupForm from "./NewMeetupForm";

const NewData = (props) => {
    const NewMeetHander = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };
    return (
        <div>
            <NewMeetupForm NewMeetHander={NewMeetHander} />

        </div>
    )

}
export default NewData;