import Link from "next/link";
export default function NavLink({ path, label }) {
  return (
    <div className="text-3xl md:text-3xl font-semibold tracking-tighter leading-tight md:pr-4 hover:underline">
      <Link href={path}>{label}</Link>
    </div>
  );
}
