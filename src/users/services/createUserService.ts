import axios from "axios";

interface CreateUserServiceProps {
  email: string;
  password: string;
}

const url = "http://localhost:3000/auth/signup";

export async function createUserService({
  email,
  password,
}: CreateUserServiceProps) {
  const response = await axios.post(url, { email, password });
  console.log("Response: ", response.data);
}
