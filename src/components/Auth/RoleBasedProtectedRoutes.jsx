import UnauthorizedPage from "components/NotFoundPage/UnauthorizedPage";
import { Outlet } from "react-router-dom";

const RoleBasedProtectedRoutes = ({ permissions }) => {
  return (
    <>
      {permissions.show || permissions.update ? (
        <Outlet />
      ) : (
        <UnauthorizedPage />
      )}
    </>
  );
};

export default RoleBasedProtectedRoutes;
