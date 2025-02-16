import imageIcon from "../../assets/envelope.svg";

import classes from "./TicketInput.module.css";

export default function TicketInput({
  onChange,
  onBlur,
  isTouch,
  enteredValues,
}) {
  const nameIsValid = enteredValues.name !== "";
  const requestIsValid = enteredValues.request !== "";
  const emailIsValid = enteredValues.email.includes("@");

  const nameHasError = !nameIsValid && isTouch.name;
  const emailHasError = !emailIsValid && isTouch.email;
  const requestHasError = !requestIsValid && isTouch.request;

  const nameClass = nameHasError
    ? `${classes.input_container} invalid`
    : classes.input_container;
  const emailClass = emailHasError ? "invalid" : "";
  const requestClass = requestHasError
    ? `${classes.input_container} invalidRequest`
    : classes.input_container;

  return (
    <div className={classes.form_container}>
      <div className={nameClass}>
        <label htmlFor="name">Enter your name</label>
        <input
          aria-required="true"
          aria-labelledby="name"
          type="text"
          name="name"
          id="name"
          value={enteredValues.name}
          onChange={(event) => onChange("name", event.target.value)}
          onBlur={() => onBlur("name", true)}
        />
        {nameHasError && (
          <p className="error-text" id="name" role="alert">
            Name must not be empty
          </p>
        )}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">
          Enter your email <i aria-hidden="true">*</i>
        </label>
        <p className={classes.email}>
          <img src={imageIcon} alt="email icon" />
          <input
            aria-required="true"
            type="email"
            name="email"
            id="email"
            value={enteredValues.email}
            onChange={(event) => onChange("email", event.target.value)}
            onBlur={() => onBlur("email", true)}
          />
        </p>
        {emailHasError && (
          <p className="error-text" aria-labelledby="email">
            Provide a valid email
          </p>
        )}
      </div>
      <div className={requestClass}>
        <label htmlFor="request">Special request?</label>
        <textarea
          aria-required="true"
          name="request"
          id="request"
          rows="5"
          value={enteredValues.request}
          onChange={(event) => onChange("request", event.target.value)}
          onBlur={() => onBlur("request", true)}
        ></textarea>
        {requestHasError && (
          <p className="error-text" aria-labelledby="request">
            Request must not be empty
          </p>
        )}
      </div>
    </div>
  );
}
