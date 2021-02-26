import React from "react";
import { useQuery } from "react-query";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { getExercises } from "../apicalls";
import PageShell from "./PageShell";

const ExercisesList = () => {
  // Queries
  const query = useQuery("exercises", getExercises);
  console.log(query.data);

  return (
    <PageShell>
      <Table variant="striped" colorScheme="cyan" size="lg">
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Description</Th>
            <Th isNumeric>Duration</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>

        <Tbody>
          {query.isSuccess &&
            query.data.map((ex) => {
              return (
                <Tr>
                  <Td>{ex.username}</Td>
                  <Td>{ex.description}</Td>
                  <Td isNumeric>{ex.duration}</Td>
                  <Td>{ex.date}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </PageShell>
  );
};

export default ExercisesList;
