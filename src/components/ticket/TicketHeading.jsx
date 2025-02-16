import ProgressBar from "./ProgreeBar";

import classes from "./TicketHeading.module.css";

export default function TicketHeading({ pageNum }) {
  return (
    <div className={classes.ticket_heading}>
      <div className={classes.ticket_subtitle}>
        {pageNum === 1 && (
          <span className={classes.ticket_selection}>Ticket Selection</span>
        )}
        {pageNum === 2 && (
          <span className={classes.ticket_selection}>Attendee Details</span>
        )}
        {pageNum === 3 && (
          <span className={classes.ticket_selection}>Ready</span>
        )}
        <span className={classes.ticket_step}>Step {pageNum}/3</span>
      </div>
      <ProgressBar pageNum={pageNum} />
    </div>
  );
}
