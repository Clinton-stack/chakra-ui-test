import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan={{base: 6, m: 2, lg: 1}} bg="purple.400" minH="100vh" p="30px">
        <Sidebar/>
      </GridItem>
      <GridItem as="main" colSpan={5} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
