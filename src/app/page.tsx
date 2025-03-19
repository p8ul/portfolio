import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import HeroSection from "@/components/sections/HeroSection";
import PromoSection from "@/components/sections/PromoSection";
import ReusableFeatures from "@/components/ReusableFeatures";

export default function Home() {
  return (
    <Container
      maxWidth={false} // Allows the container to span the full width of the screen
      disableGutters // Removes default left and right padding
      sx={{
        margin: 0, // Removes any default margin
        padding: 0, // Removes any default padding
      }}
    >
      <Box
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <HeroSection />
        <ReusableFeatures />
      </Box>
    </Container>
  );
}
