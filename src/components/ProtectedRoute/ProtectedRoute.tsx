import { FC, ReactNode } from "react";
import { useGetUserQuery } from "../../redux/slices/API";

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
