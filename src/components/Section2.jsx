import Grid from "@mui/material/Grid2";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";

export default function Section2() {
  return (
    <Grid container width={"100vw"}>
      <Grid size={6}>
        <Card sx={{ minHeight: "90vh", width: "49vw", borderRadius: 0 }}>
          <CardCover>
            <img
              src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/Smart-Assistance/sa-00-teaser-square.jpg"
              alt=""
            />
          </CardCover>
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#fff">
              Yosemite National Park
            </Typography>
            <Typography level="title-lg" textColor="#fff">
              Yosemite National Park
            </Typography>
            <Button variant="outlined">Outlined</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={6}>
        <Card sx={{ minHeight: "90vh", width: "48vw", borderRadius: 0 }}>
          <CardCover>
            <img
              src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/over-the-air/ota-00-teaser-square.jpg"
              alt="picture"
            />
          </CardCover>
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#fff">
              Yosemite National Park
            </Typography>
            <Typography level="title-lg" textColor="#fff">
              Yosemite National Park
            </Typography>
            <Button variant="outlined">Outlined</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
