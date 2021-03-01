import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import PageShell from "./PageShell";
import { useHistory } from "react-router-dom";
import { createUser } from "../apicalls";
import { useMutation, useQueryClient } from "react-query";

export default function CreateUser() {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const queryClient = useQueryClient();
  const mutation = useMutation(createUser, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("users");
    },
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData);
    history.push("/");
  };

  return (
    <PageShell>
      <Heading>Create User</Heading>
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
          <Input
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true, min: 5 })}
          />
        </FormControl>

        <Button type="submit" colorScheme="green" mt={8}>
          Create User!
        </Button>
      </Flex>
    </PageShell>
  );
}
