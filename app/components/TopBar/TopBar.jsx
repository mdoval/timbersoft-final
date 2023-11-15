import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { AccountMenu } from '@/app/components/MainBar/AccountMenu'
import { TopBarAccount } from "./TopBarAccount";

export default async function TopBar() {
  const { user } = await getServerSession(authOptions);

  return (
      <TopBarAccount user={user} />
  );
}
