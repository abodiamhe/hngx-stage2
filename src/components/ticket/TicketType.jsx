import classes from "./TicketType.module.css"

export default function TicketType({onChange, enteredValues}) {
  return (
    <div className={classes.type}>
      <p>Select Ticket Type:</p>
      <div className={classes.type_detail}>
        <div className={classes.radio_group}>
          <input
            type="radio"
            className={classes.radio_input}
            id="regular"
            value="regular"
            name="ticket_type"
            checked={enteredValues.ticket_type === "regular"}
            onChange={(event) => onChange("ticket_type", event.target.value)}
          />
          <label htmlFor="regular" className={classes.radio_label}>
            <h4 className={classes.label_heading}>Free</h4>
            <d>
              <p className={classes.label_desc}>Regular Access</p>
              <p className={classes.label_seat}>20/52</p>
            </d>
          </label>
        </div>
        <div className={classes.radio_group}>
          <input
            type="radio"
            className={classes.radio_input}
            id="vip"
            value="vip"
            name="ticket_type"
            checked={enteredValues.ticket_type === "vip"}
            onChange={(event) => onChange("ticket_type", event.target.value)}
          />
          <label htmlFor="vip" className={classes.radio_label}>
            <h4 className={classes.label_heading}>$150</h4>
            <d>
              <p className={classes.label_desc}>Vip Access</p>
              <p className={classes.label_seat}>20/52</p>
            </d>
          </label>
        </div>
        <div className={classes.radio_group}>
          <input
            className={classes.radio_input}
            type="radio"
            id="vvip"
            value="vvip"
            name="ticket_type"
            checked={enteredValues.ticket_type === "vvip"}
            onChange={(event) => onChange("ticket_type", event.target.value)}
          />
          <label htmlFor="vvip" className={classes.radio_label}>
            <h4 className={classes.label_heading}>$150</h4>
            <d>
              <p className={classes.label_desc}>Vvip Access</p>
              <p className={classes.label_seat}>20/52</p>
            </d>
          </label>
        </div>
      </div>
    </div>
  );
}
