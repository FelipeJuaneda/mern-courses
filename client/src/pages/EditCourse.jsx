import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function EditCourse() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/courses/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setPrice(response.data.price);
        setImg(response.data.img);
        setLoading(false);
      })
      .catch((error) => {
        alert("Ocurrio un error, revice la consola");
        console.log(error);
      });
  }, [id]);

  const handleEditCourse = () => {
    const data = {
      title,
      price,
      img,
    };
    setLoading(true);
    axios
      .put(`http://localhost:4000/courses/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Editar Curso
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                placeholder="ingresa el titulo del curso"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="precio"
                variant="outlined"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="ingresa el precio del curso"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Imagen URL"
                variant="outlined"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="ingresa la url de la imagen "
              />
            </Grid>
            <Grid item xs={12}>
              {loading ? (
                <Button variant="contained" fullWidth color="primary">
                  Editando...
                </Button>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={handleEditCourse}
                >
                  Editar Curso
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
