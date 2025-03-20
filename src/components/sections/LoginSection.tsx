"use client";
import React, { useEffect } from "react";
import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

const LoginSection: React.FC = () => {
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (auth.currentUser) {
      router.push('about')
    }
  }, [auth])

  const formik = useFormik({
    initialValues: {
      email: "pkinuthia10@gmail.com",
      password: "12345678",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        setError(null); // Clear any previous errors
        // Redirect or update state upon successful login
        console.log("User logged in successfully!");
        router.push('/about')
      } catch (err: any) {
        setError(err.message || "An error occurred while logging in.");
      }
    },
  });
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
            <Container maxWidth="sm">
              <Box
                sx={{
                  mt: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: 'white',
                  p: 3
                }}
              >
                <Typography variant="h4" color="blue" gutterBottom>
                  Login
                </Typography>
                {error && (
                  <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
                    {error}
                  </Alert>
                )}
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    margin="normal"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login
                  </Button>
                </form>
              </Box>
            </Container>
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

export default LoginSection;
