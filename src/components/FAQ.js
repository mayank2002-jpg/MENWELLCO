import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl m-16">
      <h1 className="text-center text-4xl">Frequntly Asked Questions?</h1>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          What is your Refund policy?
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
