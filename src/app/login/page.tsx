import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LoginSection from "@/components/sections/LoginSection";

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
        <LoginSection />
      </Box>
    </Container>
  );
}
