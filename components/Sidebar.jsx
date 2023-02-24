import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const listStyles = {
    ":hover": {
      color: "purple.400",
      bg: "white",
    },
    ":active": {
      color: "purple.400",
      bg: "white",
    },
  };
  return (
    <List color="white" fontSize="1.2em" spacing="10">
      <ListItem
        _hover={{ color: "purple.400", bg: "white" }}
        _active={{ color: "purple.400", bg: "white" }}
      >
        <NavLink to="/">
          <ListIcon as={CalendarIcon} />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem
        _hover={{ color: "purple.400", bg: "white" }}
        _active={{ color: "purple.400", bg: "white" }}
      >
        <NavLink to="/create">
          <ListIcon as={EditIcon} />
          New task
        </NavLink>
      </ListItem>
      <ListItem
        _hover={{ color: "purple.400", bg: "white" }}
        _active={{ color: "purple.400", bg: "white" }}
      >
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
}
