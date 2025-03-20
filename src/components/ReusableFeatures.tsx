"use client";
import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Box,
  Skeleton,
  Chip,
  Button
} from "@mui/material";
import usePortfolioData from "@/hooks/usePortfolioData";

export default function ReusableFeatures() {
  const [portfolioData, loading, error] = usePortfolioData();
  const [openModal, setOpenModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null);
  // When a card is clicked, store the feature in state and open the modal
  const handleCardClick = (feature: any) => {
    setSelectedFeature(feature);
    setOpenModal(true);
  };

  // Close the modal and clear the selected feature
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedFeature(null);
  };

  return (
    <>
      {/* Cards Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}>
        {loading ? (
          // Show skeleton loader while data is being fetched
          Array.from({ length: 3 }).map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton variant="text" height={30} />
                  <Skeleton variant="text" height={20} />
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : error ? (
          // Show error message if there's an error fetching data
          <Grid item xs={12}>
            <Typography variant="h6" color="error">
              Sign in to load portfolio data. 
            </Typography>
          </Grid>
        ) : portfolioData && portfolioData.length > 0 ? (
          // Render portfolio cards if data is available
          portfolioData.map((feature) => (
            <Grid item xs={12} md={4} key={feature.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer", // visually indicates it's clickable
                }}
                onClick={() => handleCardClick(feature)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.project}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {feature.project}
                  </Typography>
                  <Typography variant="body2">{feature.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          // Show empty state if no data is available
          <Grid item xs={12}>
            <Typography variant="h6" color="text.secondary">
              No portfolio data available.
            </Typography>
          </Grid>
        )}
      </Grid>

      {/* Modal for selected feature details */}
      {/* Modal for selected feature details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: "80%",
            maxWidth: 600,
          }}
        >
          {selectedFeature && (
            <>
              {/* Header with Title and Edit Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {selectedFeature.project}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => window.location.href = '/portfolio/' + selectedFeature.id }
                >
                  Edit
                </Button>
              </Box>

              {/* Image */}
              <img
                src={selectedFeature.image}
                alt={selectedFeature.project}
                style={{ width: "100%", marginBottom: 16 }}
              />

              {/* Bio */}
              <Typography variant="body1" gutterBottom>
                {selectedFeature.bio}
              </Typography>

              {/* Skills Tags */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Skills:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {selectedFeature?.skills?.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" />
                  ))}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
