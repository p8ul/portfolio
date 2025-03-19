import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  TextField,
  Grid2,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
export default function PromoSection() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem",
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            position: "relative",
            width: "40%",
            height: "600px",
            backgroundColor: "#f5f5f5",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: -50,
              width: "300px",
              height: "800px",
              backgroundColor: "#4a90e2",
              zIndex: -1,
            }}
          />
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="#4a90e2">
              FirstTime Featured
            </Typography>
            <img
              src="/path/to/your/image.jpg"
              alt="Clothing Store"
              style={{ width: "100%", marginTop: "1rem" }}
            />
            <Typography variant="h5" mt={2}>
              Northside Apparel
            </Typography>
            <Typography variant="body2" mt={1}>
              Fort Collins, Colorado
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography variant="body2">2.62mi | $$$</Typography>
              <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                20% off
              </Button>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Deals Near Me
            </Button>
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ width: "55%" }}>
          <Typography variant="h6" color="#ff6b6b" mb={1}>
            HOW IT WORKS
          </Typography>
          <Typography variant="h3" mb={2}>
            Get Great Deals to Try New Places
          </Typography>
          <Typography variant="body1" mb={2}>
            Can’t decide what to do tonight? Visiting a new city and looking for
            the best local spots? With FirstTime, you’ll find great deals to the
            best local restaurants, shops, experiences, and more – so go ahead,
            get out there and try something new!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
            <List>
              <ListItem>
                <ListItemAvatar>
                    <CheckCircleOutlineIcon color="primary" />
                </ListItemAvatar>
                <ListItemText primary="Find the best local spots" />
              </ListItem>
            </List>
          </Box>
          <Button variant="contained" color="error" sx={{ mr: 1 }}>
            Download The App
          </Button>
          <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
