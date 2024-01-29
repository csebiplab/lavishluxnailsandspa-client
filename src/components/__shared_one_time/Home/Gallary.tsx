import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
} from "@material-ui/core";

const Gallery = () => {
  return (
    <Box className="MuiBox-root css-79elbk">
      <div>
        <Typography variant="h1" className="MuiTypography-root MuiTypography-h1 css-69zjj8">
          Heroes in top companies
        </Typography>
      </div>
      <Typography variant="body1" className="MuiTypography-root MuiTypography-body1 css-3tr5u7">
        We cannot guarantee you a job/intern. However, 70-80% of the students
        who finish our main course and SCIC on time get a job or an internship
        within 3-6 months of their completion.
      </Typography>
      <Container maxWidth="lg" className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="MuiBox-root css-r85jl2">
              <div className="swiper swiper-initialized swiper-horizontal">
                <div
                  className="swiper-wrapper"
                  style={{
                    transitionDuration: "7000ms",
                    transform: "translate3d(-2238px, 0px, 0px)",
                  }}
                >
                  <Grid item>
                    <Card
                      style={{
                        height: "540px",
                        width: "144.857px",
                        marginRight: "15px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt="hero"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 20vw"
                        srcSet="/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fheros-in-top-company%2FDS%20Legends%20Pte.%20Ltd%2FIMG_20220208_130640.jpg&amp;w=3840&amp;q=75"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <img
                        alt="hero"
                        loading="lazy"
                        width="89"
                        height="30"
                        decoding="async"
                        data-nimg="1"
                        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 20vw"
                        srcSet="/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fheros-in-top-company%2FDS%20Legends%20Pte.%20Ltd%2Flogo192-transformed.png&amp;w=3840&amp;q=75"
                        style={{
                          maxHeight: "30px",
                          maxWidth: "100%",
                          position: "absolute",
                          left: "2px",
                          bottom: "2px",
                          zIndex: "2",
                        }}
                      />
                    </Card>
                  </Grid>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
