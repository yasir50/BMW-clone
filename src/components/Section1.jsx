import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";

export default function Section1() {
  return (
    <Box
      component="ul"
      sx={{
        // display: "flex",
        // gap: 2,
        // flexWrap: "wrap",
        p: 0,
        m: 0,
      }}
    >
      <Card
        component="li"
        sx={{ width: "100vw", flexGrow: 1, minHeight: "70vh", borderRadius: 0 }}
      >
        <CardCover>
          <video
            autoPlay
            loop
            muted
            // poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/i-drive/id-00-teaser-hd.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            textColor="#fff"
            sx={{ fontWeight: "lg", mt: { xs: 12, sm: 80 } }}
          >
            Video
          </Typography>
          <Typography
            level="body-lg"
            textColor="#fff"
            // sx={{ fontWeight: "lg", mt: { xs: 12, sm: 60 } }}
          >
            Video
          </Typography>
          <Button variant="outlined">Outlined</Button>
        </CardContent>
      </Card>
    </Box>
  );
}
