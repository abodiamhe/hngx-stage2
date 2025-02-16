import classes from "./ProgressBar.module.css"

export default function ProgressBar({pageNum}) {
  return (
    <>
      <progress value={pageNum} max="3" className={classes.progress}/>
    </>
  );
}
