import classes from "./TicketSelect.module.css";

export default function SelectInput({ onChange, enteredValues }) {
  return (
    <div className={classes.select}>
      <p>Number of Tickets</p>
      <div>
        <select
          value={enteredValues.number}
          onChange={(event) => onChange("number", event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
}
