import SelectInput from "./TicketSelect";
import TicketType from "./TicketType";

import TicketButton from "./TicketButton";
import TicketSubHeading from "./TicketSubHeading";
import Line from "./Line";

import classes from "./TicketDetail.module.css";
import TicketInput from "./TicketInput";

export default function TicketDetail({
  pageNum,
  onFileUpload,
  onFile,
  onDrop,
  onDrag,
  onChange,
  onReset,
  enteredValues,
  increase,
  decrease,
  onBlur,
  isTouch,
}) {
  return (
    <div className={classes.ticket_detail}>
      <TicketSubHeading
        pageNum={pageNum}
        onFileUpload={onFileUpload}
        onFile={onFile}
        onDrop={onDrop}
        onDrag={onDrag}
      />
      <Line />
      {pageNum === 1 && (
        <TicketType onChange={onChange} enteredValues={enteredValues} />
      )}
      {pageNum === 1 && (
        <SelectInput onChange={onChange} enteredValues={enteredValues} />
      )}
      {pageNum === 2 && (
        <TicketInput
          onChange={onChange}
          onBlur={onBlur}
          isTouch={isTouch}
          enteredValues={enteredValues}
        />
      )}
      <TicketButton
        onReset={onReset}
        increase={increase}
        decrease={decrease}
        pageNum={pageNum}
        onFile={onFile}
        enteredValues={enteredValues}
      />
    </div>
  );
}
