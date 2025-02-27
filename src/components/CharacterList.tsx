import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { Subject } from "../models/Subject";

interface CharacterListProps {
  Subjects: Subject[];
}

const CharacterList: React.FC<CharacterListProps> = ({ Subjects }) => {
  return (
    <List>
      {Subjects.map((sbj) => (
        <ListItem key={sbj.englishName} divider>
          <ListItemAvatar>
            <Avatar src={`/icons/${sbj.icon}`} alt={sbj.name} />
          </ListItemAvatar>
          <ListItemText primary={sbj.name} secondary={sbj.alias} />
        </ListItem>
      ))}
    </List>
  );
};

export default CharacterList;
