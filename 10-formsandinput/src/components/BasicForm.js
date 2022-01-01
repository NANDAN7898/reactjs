import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmailValid = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailId,
    isValid: emailIdIsValid,
    hasError: emailIdInputHasError,
    valueChangeHandler: emailIdChangeHandler,
    inputBlurHandler: emailIdBlurHandler,
    reset: resetEmailId,
  } = useInput(isEmailValid);

  let isValidForm = false;

  if (firstNameIsValid && lastNameIsValid && emailIdIsValid) {
    isValidForm = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isValidForm) {
      return;
    }
    console.log(firstName);
    console.log(lastName);
    console.log(emailId);
    resetEmailId();
    resetFirstName();
    resetLastName();
  };
  const firstNameClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailIdInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="emailid">E-Mail Address</label>
        <input
          type="email"
          id="emailid"
          value={emailId}
          onChange={emailIdChangeHandler}
          onBlur={emailIdBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
