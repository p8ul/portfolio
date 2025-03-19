"use client"
import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Box
} from '@mui/material';

// Example JSON data (could also be fetched from an API)
const featuresData = [
  {
    id: 1,
    title: 'Business directory & amazing deals',
    description: 'A short description or marketing text about the business directory and deals you offer.',
    image: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/a56610c64fd24a794aec5dc1ef4ec02d?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCuwzyZpNzGsNt49QO3ABdop2TgC0C%2BjlEB89NYv0CX6QIhAKsDPAdETUyl%2BpJ8Za/EgZz16TUyMI43fM7s58n9ZAy7KpAFCH8QABoMNzM5OTM5MTczODE5IgxQq76lOGy7tQnGTd4q7QQHDgicFPg8sOcRZ41feqjk6rY4Cmc%2BJmPT5UvdyP2gW2iLl4NK1m4SlHoFODNyBED2jGYJADBqjgpvrVj4FBfpZ%2Bkmj4kropqIk2Kqqwhcw5x0YZ7sdn0HYz1joTBaGIHpS/Z5qzFzBLFcwnq1ni8/ndpqpaA7wr636NRO9i0hH4MjLz3UFWBnrMZJnCKmIN1FgL86eliBDTkP%2BAd7rp5umyjEKiWJUgntof1xXk6h0EcI2gFspb4AAw%2BvJeOmbpFNWQOnT4aDfSovlfJqK84uxri0sQz7t2oqMsiTbvmESvT2gNMejZdCm3TfNdw2ktqFPoy5/%2BbuvWRqvabzGOGnjoVI3q8E4UmppdervBQ1p%2BfWNg0zA7c29bw6N5y85NHbrojtEJ/PpqQXAwmqgk5%2Bx77Bt6SbpYvQ9NWaV/HA8/myBOB6CQNPTJyqk1ufGXCfR8mwviJeyp3yi0kwt7DR639BkN5WV6jDnv1GiaIezsfutC9ZIvYny6GnVNNxvP572nUWEKB2e7Z2YxImSCaIZOdlGpRWk3XIF7dihnpdJvU4U6ZgZ5nAMRFE6q0XR/T8/BBLPGuJR%2BmWTgg2uSq/vTUw11UJ7bvvx87Si8EJcAKh4pw/5ZKGWKjGG49UzsXTtVh2eUXcq/iZP73Nx%2BQ9XPe2k2OPteUk3bmzw8lqYdb%2BfU7qF/uxI%2BbOE35K5H499R50%2B0p0U7vVhZUbu%2B769jYYWeJulELoSSIRZNf3AHYJBxQlxEFELzSyFDyhUBdJQuRxeqRBIQJxVjcjJM5yvcAAcvG4NXYEfPn%2BaQzRid2gfRmcljpnkqkoXcAwwf/svgY6mgG0Pe8vVp2Av0ZVCU1gg3iG86PmdIdX7U8/kzIYqZf6z%2B68vknsL0o/7/CIoKOWsKXTkuUf78z9X7%2BMoRZ4uK0Yi6M7wv31%2BrlEZ2yWBX0mCPpkjcpPVVL0%2BabZrQy4f5nI%2BgSmF5regWtYVrWRtgp%2BUN6ezWDvgNJQfrQUL9jIWJcxMo6L6HmjvbO4AycBcbLKZTMkiDKXi1%2BA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250319T223547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5645AVRJZ/20250319/us-west-2/s3/aws4_request&X-Amz-Signature=d1a20ef94843f37903d1c6896f457757766b6589ea009a0e53788e91dd4eea53', // Replace with actual paths
  },
  {
    id: 2,
    title: 'IoT devices analytics & interactive visualization',
    description: 'Briefly explain how your IoT analytics feature provides valuable insights, dashboards, etc.',
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/907836101749690368/profile/projects/files/94b949b0-ee5e-4974-be62-ac6d8b7230f4',
  },
  {
    id: 3,
    title: 'SaaS E-commerce system',
    description: 'Highlight your e-commerce capabilities: shopping carts, payment gateways, shipping, etc.',
    image: 'https://www.upwork.com/att/download/portfolio/persons/uid/907836101749690368/profile/projects/files/1330012493228544000',
  },
];

export default function ReusableFeatures() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  // When a card is clicked, store the feature in state and open the modal
  const handleCardClick = (feature) => {
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
        {featuresData.map((feature) => (
          <Grid item xs={12} md={4} key={feature.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer', // visually indicates it's clickable
              }}
              onClick={() => handleCardClick(feature)}
            >
              <CardMedia
                component="img"
                height="200"
                image={feature.image}
                alt={feature.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for selected feature details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: '80%',
            maxWidth: 600,
          }}
        >
          {selectedFeature && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedFeature.title}
              </Typography>
              <img
                src={selectedFeature.image}
                alt={selectedFeature.title}
                style={{ width: '100%', marginBottom: 16 }}
              />
              <Typography variant="body1">
                {selectedFeature.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}