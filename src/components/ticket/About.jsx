import classes from "./Ticket.module.css";

export default function About() {
  return (
    <div className="container">
      <section className={classes.ticket}>
        <p>
          Event Ticket Booking UI – Open Source Practice Project 🎟️ Overview
        </p>

        <p>
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.
        </p>

        <p>
          The project consists of a three-step ticket booking flow, and
          developers can extend it further by integrating payment solutions,
          user authentication (optional), and ticket validation systems.
        </p>
        <p>Flow & Features</p>
        <ul>
          <p> 1️⃣ Ticket Selection</p>
          <li>Users can browse available tickets (Free & Paid).</li>
          <li>Ticket options are displayed in a list or card view.</li>
          <li>
            For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
            details.
          </li>
          <li>
            For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
            payment modal.
          </li>
        </ul>
        <ul>
          <p> 2️⃣ Attendee Details Form</p>
          <li>Users input their Name, Email, and optional Phone Number.</li>
          <li>Profile picture upload option with preview functionality.</li>
          <li>
            Ticket summary is visible to ensure users review their details
            before submission.
          </li>
        </ul>
        <ul>
          <p> 3️⃣ Payment or Success Page</p>
          <li>
            If the ticket is free, the user is taken directly to the Ticket
            Confirmation Page.
          </li>
          <li>
            If the ticket is paid, developers can integrate Stripe, Paystack, or
            Flutterwave to process payments before showing the confirmation
            page.
          </li>
          <li>Upon successful booking, users should receive:</li>
          <li>A visual ticket preview with a unique QR Code.</li>
          <li>
            An option to download the ticket as PDF or save it to their device.
          </li>
          <li>
            An email confirmation containing ticket details. How to Build This
            🚀
          </li>
        </ul>
      </section>
    </div>
  );
}
