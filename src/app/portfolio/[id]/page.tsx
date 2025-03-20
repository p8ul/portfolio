"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

// Formik & Yup
import { useFormik, FormikProvider, FieldArray } from "formik";
import * as Yup from "yup";

// Material UI
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { db } from "@/lib/firebaseConfig";

interface PortfolioFormValues {
  project: string;
  bio: string;
  image: string;
  skills: string[];
}

type Params = { slug: string; id: string };
type SearchParams = { [key: string]: string | string[] | undefined };

const PortfolioEditor = ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) => {
  const router = useRouter();
  const id = window.location.pathname.split("/").pop();

  // Initialize Formik
  const formik = useFormik<PortfolioFormValues>({
    initialValues: {
      project: "",
      bio: "",
      image: "",
      skills: [""],
    },
    validationSchema: Yup.object({
      project: Yup.string().required("Project is required"),
      bio: Yup.string().required("Bio is required"),
      image: Yup.string()
        .url("Must be a valid URL")
        .required("Image URL is required"),
      skills: Yup.array().of(Yup.string().required("Skill cannot be empty")),
    }),
    onSubmit: async (values) => {
      try {
        if (id === "new") {
          // CREATE new doc with auto-generated ID
          await addDoc(collection(db, "portfolio"), values);
        } else {
          // UPDATE existing doc with ID = id
          const docRef = doc(db, "portfolio", id);
          await setDoc(docRef, values, { merge: true });
        }

        alert("Portfolio document saved!");
        // Redirect or do anything else you want here
        router.push("/");
      } catch (error) {
        console.error("Error saving document:", error);
      }
    },
  });
  const [loading, setLoading] = useState(true)

  // Fetch existing document if an id is provided (and not "new")
  useEffect(() => {
    if (id && id !== "new") {
      const fetchData = async () => {
        const docRef = doc(db, "portfolio", id.toString());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          formik.setValues({
            project: data.project || "",
            bio: data.bio || "",
            image: data.image || "",
            skills: data.skills || [""],
          });
          
        }
        setLoading(false)
      };
      fetchData();
    }
  }, []); // only run when id changes

  // Deconstruct Formik helpers for easy access
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

 
  if (loading && id != 'new') {
    return <div>loading</div>
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" mb={2}>
            {id && id !== "new"
              ? "Edit Portfolio Document"
              : "Create New Portfolio Document"}
          </Typography>

          <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
              {/* PROJECT FIELD */}
              <TextField
                label="Project"
                name="project"
                fullWidth
                margin="normal"
                value={values.project}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.project && Boolean(errors.project)}
                helperText={touched.project && errors.project}
              />

              {/* BIO FIELD */}
              <TextField
                label="Bio"
                name="bio"
                multiline
                rows={3}
                fullWidth
                margin="normal"
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.bio && Boolean(errors.bio)}
                helperText={touched.bio && errors.bio}
              />

              {/* IMAGE FIELD */}
              <TextField
                label="Image URL"
                name="image"
                fullWidth
                margin="normal"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.image && Boolean(errors.image)}
                helperText={touched.image && errors.image}
              />

              {/* SKILLS FIELD (ARRAY) */}
              <Typography variant="body1" sx={{ mt: 3, mb: 1 }}>
                Skills
              </Typography>
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <Box>
                    {values.skills.map((skill, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        <TextField
                          name={`skills[${index}]`}
                          value={skill}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.skills &&
                            touched.skills[index] &&
                            Boolean(errors.skills && errors.skills[index])
                          }
                          helperText={
                            touched.skills &&
                            touched.skills[index] &&
                            errors.skills &&
                            (errors.skills[index] as string)
                          }
                          label={`Skill ${index + 1}`}
                          fullWidth
                          margin="normal"
                        />
                        <IconButton
                          color="error"
                          onClick={() => remove(index)}
                          sx={{ ml: 1 }}
                        >
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      </Box>
                    ))}
                    <Button
                      variant="outlined"
                      startIcon={<AddCircleOutlineIcon />}
                      onClick={() => push("")}
                      sx={{ mt: 1 }}
                    >
                      Add Skill
                    </Button>
                  </Box>
                )}
              </FieldArray>

              {/* SUBMIT BUTTON */}
              <Box sx={{ mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {id && id !== "new" ? "Update" : "Create"}
                </Button>
              </Box>
            </form>
          </FormikProvider>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PortfolioEditor;
