"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading from "../../basic-components/Heading";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "@/app/data/data.json";

const QuesAccordion = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const { qAndA } = data;
  const { title, questionList } = qAndA;
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box data-aos="fade-up" id="Blog" className="flex flex-1 flex-col">
      <Heading title={title} />
      <Box className="flex flex-1 flex-col self-center border rounded-2xl p-8 w-full md:w-1/2">
        {questionList.map((item) => (
          <Accordion
            expanded={expanded === item.key}
            onChange={handleChange(item.key)}
            key={item.key}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id={item.key.toString()}
            >
              <Typography className="font-bold">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-textColor">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default QuesAccordion;
