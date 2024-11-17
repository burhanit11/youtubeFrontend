import HomeIcon from "@mui/icons-material/Home";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export const routes = [
  {
    name: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    name: "Liked vide",
    icon: <ThumbUpIcon />,
    path: "/likedVideo",
  },
  {
    name: "History",
    icon: <HistoryIcon />,
    path: "/history",
  },
  {
    name: "Collections",
    icon: <VideoLibraryIcon />,
    path: "/collections",
  },
  {
    name: "Subcribers",
    icon: <SubscriptionsIcon />,
    path: "/subscribers",
  },
];
