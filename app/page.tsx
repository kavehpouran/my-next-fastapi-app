export default function MyNextFastAPIApp() {
  return <GetEngineerRoles title="Fullstack Developer" />;
}

async function GetEngineerRoles({ title }: { title: string }) {
  // let baseUrl = "https://interviewtutor.vercel.app";
  // if (process.env.NODE_ENV === "development") {
  //   baseUrl = "http://localhost:3000/";
  // }
  const baseUrl = "http://localhost:3000/";

  try {
    const data = await fetch(`${baseUrl}/api/py/engineer-roles?title=${title}`);
    const role = await data.json();
    return (
      <div>{`The main skill of a ${role.title} is ${role.mainskill}.`}</div>
    );
  } catch (error) {
    console.log(error);
  }
}
