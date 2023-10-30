import { FC, ReactNode } from "react";
import { useGetUserQuery } from "../../redux/slices/API";
// import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    component: ReactNode,
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component }) => {
    const getUserQuery = useGetUserQuery();

    if (getUserQuery.isSuccess) {
        return component;
    }
}

export default ProtectedRoute
