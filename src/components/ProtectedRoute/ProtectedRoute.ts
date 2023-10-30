import { FC, ReactNode } from "react";
// import { useLocation } from "react-router-dom";
// import { useAppSelector } from "src/hooks/useAppSelector";

type ProtectedRouteProps = {
    component: ReactNode,
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component }) => {
    // const user = useAppSelector((store) => store.API.mutations);
    // const location = useLocation();

    //Проверить есть ли данные аутентификации в сторе, если есть, то выполняем запрос пользователя
    //Запросы выполняются с проверкой токенов 

    // !onlyUnAuth && user
    return component;
}

export default ProtectedRoute
