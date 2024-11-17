import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";

const drawerWidth = 240;

const layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        {/* header */}
        <Header />
        {/* sidebar */}
        <Sidebar />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* children */}
        <div className="mt-10">{children}</div>
      </Box>
    </Box>
  );
};

export default layout;
