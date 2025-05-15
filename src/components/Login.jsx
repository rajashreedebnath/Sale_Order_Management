import React from "react";
import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toaster } from "./ui/toaster";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const success = await login(data.username, data.password);

    if (success) {
      toaster.create({
        title: "Login successful",
        description: "You have successfully logged in.",
        type: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toaster.create({
        title: "Invalid credentials",
        description: "Please check your username and password.",
        type: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box p={8} maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading mb={6} textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            {/* Username Field */}
            <Field.Root orientation="vertical" isInvalid={!!errors.username}>
              <Field.Label>Username</Field.Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                {...register("username", { required: "Username is required" })}
              />
              <Field.ErrorText>
                {errors.password && errors.username.message}
              </Field.ErrorText>
            </Field.Root>

            {/* Password Field */}
            <Field.Root orientation="vertical">
              <Field.Label>Password</Field.Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                {...register("password", { required: "Password is required" })}
              />
              <Field.ErrorText>
                {errors.password && errors.password.message}
              </Field.ErrorText>
            </Field.Root>

            <Button type="submit">Login</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
