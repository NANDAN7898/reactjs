import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChar = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;
    const inputStreet = streetInputRef.current.value;
    const inputCity = cityInputRef.current.value;
    const inputPostalCode = postalInputRef.current.value;

    const isValidName = !isEmpty(inputName);
    const isStreetValid = !isEmpty(inputStreet);
    const isCityValid = !isEmpty(inputCity);
    const isPostalCodeValid = isSixChar(inputPostalCode);

    const isFormValid =
      isValidName && isStreetValid && isCityValid && isPostalCodeValid;

    setFormInputsValidity({
      name: isValidName,
      street: isStreetValid,
      city: isCityValid,
      postalCode: isPostalCodeValid,
    });

    if (!isFormValid) {
      return;
    }
    props.onConfirm({
      name: inputName,
      street: inputStreet,
      city: inputCity,
      postalCode: inputPostalCode,
    });
  };

  const nameClasses = `${classes.control} ${
    !formInputsValidity.name ? classes.invalid : ""
  }`;
  const streenClasses = `${classes.control} ${
    !formInputsValidity.street ? classes.invalid : ""
  }`;
  const postalCodeClasses = `${classes.control} ${
    !formInputsValidity.postalCode ? classes.invalid : ""
  }`;
  const cityClasses = `${classes.control} ${
    !formInputsValidity.city ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streenClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code!</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
