import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

const styles = {
  card: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
};

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => setPosts(response.data.posts))

      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={styles.card}>
      {posts.map((post) => (
        <Card
          key={post.id}
          className="card"
          style={{ backgroundColor: "darkgray" }}
          sx={{
            margin: "20px 0 20px 0",
            maxWidth: "700px",
            height: "205px",
            padding: "15px",
          }}
        >
          <CardContent>
            <Typography
              align="center"
              color="text.primary"
              sx={{ mb: 1.5, color: "white" }}
              variant="h5"
              component="h2"
            >
              {post.title}
            </Typography>

            <Typography
              sx={{ mb: 1, fontSize: "14px", fontWeight: "bold" }}
              variant="body2"
            >
              {post.body}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", fontWeight: "bold", color: "green" }}
            >
              Rating : {post.reactions}/10
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PostsList;
