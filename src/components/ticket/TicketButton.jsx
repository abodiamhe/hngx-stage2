import classes from "./TicketButton.module.css";

export default function TicketButton({
  increase,
  onReset,
  decrease,
  pageNum,
  onFile,
  enteredValues,
}) {
  //Validating user input
  const formIsValid =
    enteredValues.ticket_type !== "" &&
    enteredValues.name !== "" &&
    enteredValues.email.includes("@") &&
    enteredValues.request !== "" &&
    enteredValues.number !== "" &&
    onFile !== null;
 

  return (
    <div className={classes.action_button}>
      {pageNum === 1 && (
        <button className={classes.cancel} onClick={onReset}>
          Cancel
        </button>
      )}
      {pageNum === 1 && (
        <button className={classes.next} onClick={increase}>
          Next
        </button>
      )}

      {pageNum === 2 && (
        <button className={classes.cancel} onClick={decrease}>
          Back
        </button>
      )}
      {pageNum === 2 && (
        <button
          className={classes.next}
          onClick={increase}
          disabled={formIsValid ? false : true}
        >
          Get My Free Ticket
        </button>
      )}

      {pageNum === 3 && (
        <button className={classes.cancel} onClick={onReset}>
          Book Another Ticket
        </button>
      )}
      {pageNum === 3 && (
        <button className={classes.next}>Download Ticket</button>
      )}
    </div>
  );
}

//cloud name: dz4mm7kiy
//api key: 745976363512233
//secret: 8HkM2LhmXFbilM74BpO9gnkAJds