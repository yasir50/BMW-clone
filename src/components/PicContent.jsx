import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function PicContent({ img }) {
  return (
    <Card
      sx={{
        minHeight: "100%",
        width: "100%",
        borderRadius: 0,
      }}
    >
      <CardCover>
        <img src={img} alt="" />
      </CardCover>
      <CardContent sx={{ justifyContent: "flex-end", paddingBottom: 5 }}>
        <Typography level="title-lg" textColor="#fff">
          Yosemite National Park
        </Typography>
        <Typography textColor="neutral.300">California, USA</Typography>
      </CardContent>
    </Card>
  );
}
