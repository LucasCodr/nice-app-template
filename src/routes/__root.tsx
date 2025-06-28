import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import {
  createRootRoute,
  Outlet,
  Link as RouterLink,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function Layout() {
  const { location } = useRouterState();

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Nice Logo</p>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem isActive={location.pathname === "/"}>
            <Link
              as={RouterLink}
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </NavbarItem>

          <NavbarItem isActive={location.pathname === "/about"}>
            <Link
              as={RouterLink}
              to="/about"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: Layout,
});
