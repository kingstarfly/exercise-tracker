import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import PageShell from "./PageShell";
import { useHistory } from "react-router-dom";
import { postExercise } from "../apicalls";
import { useMutation, useQueryClient } from "react-query";

export default function CreateExercise() {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const queryClient = useQueryClient();
  const mutation = useMutation(postExercise, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("exercises");
    },
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData);
    history.push("/");
  };

  return (
    <PageShell>
      <Heading>Create Exercise Log</Heading>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        direction="column"
        alignContent="center"
        mt={4}
        bg="whiteAlpha.800"
        p={8}
        borderRadius="3xl"
      >
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Select name="username" ref={register}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>

          <Input
            type="text"
            placeholder="Description"
            name="description"
            ref={register({ required: true, min: 5 })}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Duration</FormLabel>

          <Input
            type="number"
            placeholder="Duration"
            name="duration"
            ref={register({ required: true, min: 1 })}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Date</FormLabel>

          <Input
            type="datetime-local"
            placeholder="Date"
            name="date"
            ref={register({ required: true })}
          />
        </FormControl>
        <Button type="submit" colorScheme="green" mt={8}>
          Create
        </Button>
      </Flex>
    </PageShell>
  );
}
