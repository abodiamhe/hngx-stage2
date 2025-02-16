import classes from "./SubHeading.module.css"

export default function SubHeading() {
  return (
    <div className={classes.detail_heading}>
      <h2 className={classes.detail_subtitle}>Techember Fest 25</h2>
      <p className={classes.detail_desc}>
        Join us for an unforgettable experience <br />
        at [Event Name]! Secure your spot now.
      </p>
      <p className={classes.detail_loc}>
        [event location] || March 15, 2025 | 700:pm
      </p>
    </div>
  );
}
