import { Container } from "@mui/material";
import PostsList from "./components/PostsList";

function App() {
  return (
    <Container style={{ backgroundColor: "lightBlue" }} maxWidth="xl">
      <PostsList />
    </Container>
  );
}

export default App;
