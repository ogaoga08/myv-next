import { SessionProvider } from "next-auth/react";
import ClientExample from "../components/client-example";

const ClientPage = async () => {
  return (
    <SessionProvider>
      <ClientExample />;
    </SessionProvider>
  );
};

export default ClientPage;
