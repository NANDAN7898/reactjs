import { Fragment, useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValidForm, setIsValidForm] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidForm(false);
      return;
    } else {
      props.onAddToCart(enteredAmountNumber);
    }
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: `amount_${props.id}`,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
      </form>
      {!isValidForm && <p>Please enter a valid amount (1-5)</p>}
    </Fragment>
  );
};

export default MealItemForm;
