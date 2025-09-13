import axios from "axios";

interface CreateUserServiceProps {
  email: string;
  password: string;
}

const url = import.meta.env.VITE_API_URL;

export async function createUserService({
  email,
  password,
}: CreateUserServiceProps) {
  const response = await axios.post(`${url}/auth/signup`, { email, password });
  console.log("Response: ", response.data);
}
