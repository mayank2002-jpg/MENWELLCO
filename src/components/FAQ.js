import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl m-16">
      <h1 className="text-center text-4xl mb-10">Frequntly Asked Questions?</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
        >
          Who is MenWell Co for?
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          At Menwell, our mission is to empower men to thrive physically,
          mentally, and emotionally. We understand that well-being is a journey,
          and we're committed to being your trusted partner on that path.
          Through a range of carefully curated products and resources, we aim to
          enhance the overall quality of men's lives, fostering a sense of
          balance and confidence.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
        >
          Do I need a prescription to buy MenWell Co products?
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          No, you do not need a prescription at the beginning of the process.
          The licensed doctors on the MenWell platform will write a prescription
          if they conclude that it is safe and appropriate, after your online
          visit. If you already have a prescription, you can reach out to us on
          WhatsApp and we can deliver the medicines to you directly.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel3-header"
          sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
        >
          What is your cancellation policy?
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          You can cancel the order within 24 hours of confirming it. Once we
          ship the product, the order can only be cancelled by incurring a Rs.
          80 to-&-fro delivery expense.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel4-header"
          sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
        >
          What is your Refund policy?
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <span>
            At Menwell Co, we are committed to your satisfaction and stand
            behind the quality of our products. Our refund policy is designed to
            be fair and transparent, ensuring that you have confidence in every
            purchase you make with us. Please take a moment to review our refund
            policy:
          </span>
          <br />
          <span>
            <b> 30-Day Satisfaction Guarantee:</b> We offer a 30-day
            satisfaction guarantee on all our products. If you are not
            completely satisfied with your purchase, you may return it within 30
            days of the delivery date for a full refund or exchange. To be
            eligible for a return, the product must be in its original
            packaging, unused, and in the same condition as received.
          </span>
          <br />
          <span>
            <b>Easy Return Process: </b>To initiate a return, simply contact our
            customer support team at menwellco@gmail.com with your order number
            and the reason for return. Our team will guide you through the
            return process and provide you with a return shipping label.
          </span>
          <br />
          <span>
            <b> Refund Processing Time:</b> Once we receive your returned item,
            our team will inspect it to ensure it meets our return criteria.
            Upon approval, your refund will be processed, and a credit will
            automatically be applied to your original method of payment. Please
            allow 5-7 business days for the refund to reflect in your account.
          </span>
          <br />
          <span>
            <b> Damaged or Defective Items:</b> In the rare event that you
            receive a damaged or defective item, please contact us immediately
            with photos of the product and packaging. We will promptly send a
            replacement or issue a refund, whichever you prefer
          </span>
          <br />
          <span>
            <b>Contact Us:</b> If you have any questions or concerns regarding
            our refund policy, feel free to reach out to our customer support
            team at customer_support@menwellco.com. We are here to assist you
            and ensure your experience with Menwell Co exceeds your
            expectations.
          </span>
          <br />
          <p>
            Thank you for choosing Menwell Co for your sexual wellness needs.
            Your satisfaction is our priority.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel4-header"
          sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
        >
          What are your customer care hours?
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          We're available via call or Whatsapp between 9am-11pm everyday. We are
          available via email 24X7
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
