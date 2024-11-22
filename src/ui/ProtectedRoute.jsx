import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //load the authenticated user
  const { isAuthenticated, isPending } = useUser();

  //if there is no authenticated user, redirect to the login'
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate]
  );

  //while loading show a spinner
  if (isPending) return;
  <FullPage>
    <Spinner />;
  </FullPage>;

  //if ther is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
