import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative", // Ensures content is layered properly
        backgroundColor: "#0094ff", // Solid background color
        backgroundImage: "url(/images/banner.png)", // Background image
        backgroundPosition: "bottom right", // Position the image
        backgroundRepeat: "no-repeat", // Prevent repeating
        backgroundSize: "48vw auto",
        overflow: "hidden", // Prevents content overflow
      }}
    >
      {/* Background SVG Layer */}
      <Box
        sx={{
          backgroundImage: "url(/images/bg.svg)", // Background SVG
          backgroundRepeat: "no-repeat", // Prevent repeating
          opacity: 0.7, // Adjust transparency to avoid obstruction
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s", // Smooth transitions
          backgroundSize: "64vw auto", // Scale to fit the area
          backgroundPosition: "center", // Center the SVG
          position: "absolute", // Place it behind other content
          top: "-7vh",
          left: "-38vw",
          right: 0,
          bottom: 0,
          zIndex: 1, // Ensure it's behind the text content
        }}
      ></Box>

      {/* Content Layer */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative", // Content is above the background
              zIndex: 2, // Ensure content is above the SVG background
              color: "#fff",
              padding: 4,
            }}
          >
            <Box sx={{ maxWidth: 500, textAlign: "left", p: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
               Paul K. Your next hire
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                There’s a FirstTime for everything, so go ahead, try something
                new!
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#1e90ff",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "10px 20px",
                  }}
                >
                  Download The App
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "10px 20px",
                  }}
                >
                  Learn More →
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {" "}
          <Box
            component="img"
            sx={{
              width: "100%", // Adjust width responsively
              maxWidth: "1509px", // Maximum width of the image
              height: "auto", // Maintain aspect ratio
              position: "relative", // Content is above the background
              zIndex: 2, // Ensure content is above the SVG background
              color: "#fff",
              padding: 4,
            }}
            fetchpriority="high"
            decoding="async"
            src="https://images.nappy.co/photo/u0z76TwVK_PzDS5D1EXv8.jpg?h=720&w=1280&cs=tinysrgb"
            alt="mobile"
            sizes="(max-width: 1509px) 100vw, 1509px"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
