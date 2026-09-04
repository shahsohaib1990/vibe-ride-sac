import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/locations")({
  component: () => <Outlet />,
});

export { Link };
