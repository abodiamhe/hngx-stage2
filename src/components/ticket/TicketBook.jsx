import TicketButton from "./TicketButton";

import classes from "./TicketBook.module.css";

export default function TicketBook({
  onFile,
  enteredValues,
  pageNum,
  onReset, 
}) {
  return (
    <div className={classes.book_container}>
      <div>
        <h2>Your Ticket is Booked!</h2>
        <p>
          Check your email for a copy or you can <strong>download</strong>
        </p>
      </div>
      <div className={classes.book}>
        <div className={classes.card_container}>
          <div className={classes.card}>
            <div className={classes.card_ticket}>
              <div className={classes.card_ticket_header_container}>
                <h3 className={classes.card_ticket_header}>
                  Techember Fest ”25
                </h3>
                <p className={classes.card_ticket_loc}>
                  <span> 04 Rumens road, Ikoyi, Lagos</span>
                  <span>March 15, 2025 | 7:00 PM</span>
                </p>
              </div>
              {onFile && (
                <img
                  src={URL.createObjectURL(onFile)}
                  alt="user uploaded photo"
                  className={classes.photo_preload}
                />
              )}
              <div className={classes.card_ticket_detail}>
                <div className={classes.detail_row}>
                  <div className={classes.det_1}>
                    <p className={classes.det_title}>Enter your name</p>
                    <p className={classes.det_subTitle}>{enteredValues.name}</p>
                  </div>
                  <div className={classes.det_2}>
                    <p className={classes.det_title}>Enter your email *</p>
                    <p className={classes.det_subTitle}>
                      {enteredValues.email}
                    </p>
                  </div>
                </div>
                <div className={classes.detail_row}>
                  <div className={classes.det_1}>
                    <p className={classes.det_title}>Ticket Type:</p>
                    <p className={classes.det_subTitle}>
                      {enteredValues.ticket_type}
                    </p>
                  </div>
                  <div className={classes.det_2}>
                    <p className={classes.det_title}>Ticket for :</p>
                    <p className={classes.det_subTitle}>
                      {enteredValues.number}
                    </p>
                  </div>
                </div>
                <div className={classes.det_2}>
                  <p className={classes.det_title}>Special request?</p>
                  <p className={classes.det_special}>{enteredValues.request}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TicketButton pageNum={pageNum} onReset={onReset} />
      </div>
    </div>
  );
}
