import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DataProfile } from "./DataProfile";

export default function Profile() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/edit-profile");
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="h1"> Profile </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: "-70px" }}
          >
            <img
              src="/assets/logo2.png"
              style={{ width: "69px", height: "69px" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box sx={{ display: "flex" }}>
            <img
              style={{ width: "130%", height: "60%", marginTop: "20px" }}
              src="/assets/logo3.png"
            />
            <Button
              sx={{
                backgroundColor: "primary.main",
                height: "20%",
                color: "white",
                ml: "-100px",
                mt: "30px",
              }}
            >
              EDIT
            </Button>
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Avatar
              sx={{ width: "80px", height: "80px", ml: "30px", mt: "-10px" }}
              src="/assets/logo2.png"
            />
            <Typography variant="h1" sx={{ fontSize: "30px", ml: "20px" }}>
              NAB Innovation Center
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box sx={{ mt: "20px" }}>
            <Typography variant="h4"> About company </Typography>
            <Typography sx={{ mt: "10px" }}>
              A career at NAB demands a strong work ethic, a sense of humor and
              an unrelenting ambition to deliver mind blowing work NAB in
              collaboration with Positive Thinking Company have launched a
              dedicated technology Centre for NAB in Ho Chi Minh City, Vietnam.
              This is a state-of-the-art center dedicated to High Tech and Agile
              Development. Since it is inception in 2019, the NAB Centre in
              Vietnam strives to create not only a great place to work, but also
              the best technology center for local tech engineers to thrive. By
              joining the NAB Vietnam Centre, local software engineers will have
              a great opportunity to work closely with Australian development
              team, taking advantage of the latest tools and techniques used by
              leading global technology companies. NAB is a powerful combination
              of financial services, coupled with technologies, software
              engineers, cloud experts and quality engineers. NAB provides a
              full range of services across personal banking, business banking,
              private banking, commercial and institution banking. CLOUD FIRST
              NAB is undergoing an exciting "Cloud First" technology
              transformation by taking advantage of the latest tools and
              techniques used by leading technology and digital companies
              globally. But it’s not just about the Tech, we are also investing
              heavily in our people, so if you have an appetite to learn, grow
              and elevate others around you, this is the place for you! IT'S
              MORE THAN MONEY! We believe in people with ideas and dreams, and
              we want you to achieve your aspirations. We'll work together to
              deliver exceptional products and outcomes that push the limits of
              our own aspirations. Our passion for creating value and exceeding
              our customers' expectations means we're constantly striving to
              redefine our standards of excellence. You'll have our backing to
              develop and our encouragement to explore, realize and reach your
              full potential. --- About Positive Thinking Company Positive
              Thinking Company is a global independent tech consultancy group
              with a team of more than 3,000 talented tech specialists in over
              35 cities across Europe, the USA, Asia, Australia, and Africa. Our
              services draw on a wide array of expertise, including apps &
              platforms, security, cloud, data & analytics, hyperautomation, and
              digital workplace. In Vietnam and the APAC region, we specialize
              in developing mobile, web, and enterprise apps with our Apps &
              Platforms service and bootstrapping software development centers
              in Vietnam with our unique B.O.T Model (Build Operate Transfer).{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex" }}>
            <Divider
              orientation="vertical"
              sx={{
                color: "black",
                height: "550px",
              }}
            />
            <Box sx={{ mt: "30px" }}>
              <Accordion sx={{ height: "30px" }}>
                <AccordionSummary>
                  <Typography>Detail Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  
                  <Typography>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}