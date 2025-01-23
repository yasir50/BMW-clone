import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import Slider from "react-slick";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section4() {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    speed: 100,
  };

  return (
    <div className="sec4-main">
      <Grid container spacing={1}>
        <Grid size={2}>
          <div className="portion-left">
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "white" }}
              >
                The BMW Podcast: Changing Lanes
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                Changing Lanes is the official podcast from BMW. In these audio
                series, we take you with us on new journeys through the BMW
                universe. Find out more about sustainability, innovation,
                technology, mobility and the latest trends. You can find and
                subscribe to Changing Lanes on all major podcast platforms, so
                tune in!
              </Typography>

              <Button variant="outlined" sx={{ marginTop: 2 }}>
                Listen Now
              </Button>
            </CardContent>
          </div>
        </Grid>
        <Grid size={10}>
          <div className="portion-right">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/gamechanger/gm-00-teaser-high.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/electric-future/emyths/em-00-teaser-high.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/superhero/sup-00-teaser-high.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/fat/fat-00-teaser-high.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/dee/dee-00-teaser-high.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/fwd-00-teaser-high.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/hypnopolis-podcast/bmw-podcast-hypnopolis-00-teaser-high-00.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/podcasts/changing_lanes/en/cl-00-teaser-high.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/hypnopolis2-podcast/cover_season_teaser_high_1350_1800.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
