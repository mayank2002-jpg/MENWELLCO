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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
