import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { Experiment } from "../models/Experiment";

interface CharacterListProps {
  experiments: Experiment[];
}

const CharacterList: React.FC<CharacterListProps> = ({ experiments }) => {
  return (
    <List>
      {experiments.map((exp) => (
        <ListItem key={exp.englishName} divider>
          <ListItemAvatar>
            <Avatar src={`/icons/${exp.icon}`} alt={exp.name} />
          </ListItemAvatar>
          <ListItemText primary={exp.name} secondary={exp.alias} />
        </ListItem>
      ))}
    </List>
  );
};

export default CharacterList;
