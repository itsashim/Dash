import Dashboard from "./dashboard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/dashboard">
        <a className="text-blue">DashBoard</a>
      </Link>
    </>
  );
}
