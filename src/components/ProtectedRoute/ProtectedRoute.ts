import { FC, ReactNode } from "react";
// import { useGetUserQuery } from "../../redux/slices/API";

type ProtectedRouteProps = {
    component: ReactNode,
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component }) => {

    // useGetUserQuery()
    return component;
}

export default ProtectedRoute
