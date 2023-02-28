import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetUsersQuery } from "state/api";

const User = ({
  uid,
  first_name,
  last_name,
  email,
  birthday,
  last_access
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

    return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
      >
        <CardContent>
         <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary.main}
          gutterBottom
        >
          member: {uid}
          </Typography>
          <Typography variant="h4" component="div">
            {first_name}
          </Typography>
          <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
            birthday {birthday}
          </Typography>
          <Typography sx={{ mb: "0.1rem" }} color={theme.palette.secondary[400]}>
            last access:
          </Typography>
          <Typography sx={{ mb: "0.5rem" }} color={theme.palette.secondary[200]}>
            {last_access}
          </Typography>
        </CardContent>
      </Card>
  )
}

const Users = () => {
  const { data, isLoading } = useGetUsersQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  let key = 0;

  console.log("data: " + JSON.stringify(data));

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="USERS" subtitle="See your list of users." />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              uid,
              first_name,
              last_name,
              birthday,
              email,
              last_access,
            }) => (
              <User
                key={uid}
                first_name={first_name}
                last_name={last_name}
                birthday={birthday}
                email={email}
                last_access={last_access}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Users;