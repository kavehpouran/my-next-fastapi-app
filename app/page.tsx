export default async function MyNextFastAPIApp() {
  const role = await fetchEngineerRole();

  if (!role) {
    return (
      <>
        <div>Hello</div>
        <div>Error fetching engineer role data.</div>
      </>
    );
  }

  return (
    <>
      <div>Hello</div>
      <div>{`The main skill of a ${role.title} is ${role.mainskill}.`}</div>
    </>
  );
}

async function fetchEngineerRole() {
  const title = "Frontend Developer";
  let baseUrl = "https://my-next-fastapi-app.vercel.app";
  if (process.env.NODE_ENV === "development") {
    baseUrl = "http://localhost:3000";
  }

  try {
    const response = await fetch(
      `${baseUrl}/api/py/engineer-roles?title=${title}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const role = await response.json();
    return role;
  } catch (error) {
    console.error("Error fetching engineer role:", error);
    return null;
  }
}
