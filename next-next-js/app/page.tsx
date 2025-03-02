import Image from "next/image";
import axios from "axios";

async function getUserDetails(){
  await new Promise((r)=> setTimeout(r, 5000))
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserDetails();

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
}