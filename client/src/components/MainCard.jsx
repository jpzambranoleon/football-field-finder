import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Grid,
  Skeleton,
  Typography,
  Box,
} from "@mui/material";
import SoccerPlayer from "../assets/soccer-player.png";
import { blue, green, pink } from "@mui/material/colors";
import { Groups, Person, Sports } from "@mui/icons-material";
import convertTime from "../utils/convertTime";

const MainCard = ({ post }) => {
  function fetchTypes(post) {
    if (post.types.team === true) {
      return "Team";
    } else if (post.types.player === true) {
      return "Player";
    } else if (post.types.trainer === true) {
      return "Trainer";
    }
  }

  const postType = fetchTypes(post);

  const PostIcon = () => {
    if (postType === "Team") {
      return (
        <Avatar sx={{ bgcolor: green[400] }}>
          <Groups fontSize="large" />
        </Avatar>
      );
    } else if (postType === "Player") {
      return (
        <Avatar sx={{ bgcolor: blue[400] }}>
          <Person fontSize="large" />
        </Avatar>
      );
    } else if (postType === "Trainer") {
      return (
        <Avatar sx={{ bgcolor: pink[400] }}>
          <Sports fontSize="large" />
        </Avatar>
      );
    }
  };

  return (
    <Card className="card">
      <CardHeader
        avatar={<PostIcon />}
        title="username"
        subheader={convertTime(post.createdAt)}
      />
      <CardContent>
        <Typography variant="h7" fontSize={18} paragraph aria-label="type">
          {`Type: ${postType}`}
        </Typography>
        <Typography variant="h7" fontSize={13} aria-label="city" paragraph>
          Location: {post.city}, {post.state}
        </Typography>
        <Typography
          variant="body2"
          aria-label="description"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "5",
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MainCard;
