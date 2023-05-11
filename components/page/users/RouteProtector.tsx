import { UserContext } from "@/components/layout/LoginContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Head from "next/head";
import { UserAuthContext } from "@/components/layout/UserAuthContext";

export default function RouteProtector({
  pageName,
  isInverse,
  children,
}: {
  pageName: string;
  isInverse?: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { userAuth } = useContext(UserAuthContext);

  // Disallow logged in user from registering
  useEffect(() => {
    if (isInverse ? !userAuth : userAuth) {
      router.push("/");
    }
  }, [userAuth, router]);

  if (isInverse ? !userAuth : userAuth) {
    return (
      <Head>
        <title>{pageName}</title>
      </Head>
    );
  } else {
    return (
      <>
        <Head>
          <title>{pageName}</title>
        </Head>
        {children}
      </>
    );
  }
}
