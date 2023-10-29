import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        marginTop: "50px",

        width: "1050px",
        textAlign: "center",

        marginLeft: "235px",
      }}
    >
      <h1 className="accheading">FAQs</h1>
      <Accordion
        style={{
          marginBottom: "10px",
          border: " 1px white",
          borderRadius: "10px",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{ color: "#34C94B", height: "60px", width: "2em" }}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{
            backgroundColor: "black",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "white",
              textAlign: "left",
            }}
          >
            Is QTify free to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          border: " 1px white",
          borderRadius: "10px",
          // marginBottom: "20px",
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{ color: "#34C94B", height: "60px", width: "2em" }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={{
            backgroundColor: "black",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "white",
              textAlign: "left",
            }}
          >
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
