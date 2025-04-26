"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MEMBERS = [
  { relationship: "Sister", name: "Ayesha", age: 40, gender: "Male" },
  { relationship: "Brother", name: "Ahmed", age: 16, gender: "Female" },
  { relationship: "Father", name: "Rizwan", age: 15, gender: "Female" },
  { relationship: "Wife", name: "Fatima", age: 15, gender: "Female" },
  { relationship: "Mother", name: "Zainab", age: 25, gender: "Male" },
  { relationship: "Self", name: "Ali", age: 26, gender: "Male" },
];

const ReportsPage = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* TOP APP BAR */}
      <AppBar position="static" sx={{ bgcolor: "#006241", marginBottom: "32px" }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Reports
          </Typography>
        </Toolbar>
      </AppBar>

      {/* CONTENT AREA */}
      <Box sx={{ flex: 1, overflow: "auto", padding: "8px" }}>
        <List sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
          {MEMBERS.map((member, index) => (
            <ListItemButton
              key={index}
              sx={{
                borderLeft: "4px solid #006241",
                mb: 1,
                bgcolor: "#fff",
                color: "#006241",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
              onClick={() => console.log(`Clicked on ${member.relationship} ${member.name}`)}
            >
              <ListItemText
                primary={`${member.relationship} - ${member.name}`}
                secondary={`${member.age} ${member.gender}`}
              />
              <ChevronRightIcon />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ReportsPage;
