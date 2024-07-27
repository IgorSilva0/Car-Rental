import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";

const AuthButton = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        Menu
      </button>
      <form action={signOut}>
        <button className="flex text-base py-1.5 px-4 rounded-md gap-3 no-underline bg-btn-background hover:bg-btn-background-hover">
          <FaRegCircleUser size={20}/>
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="flex items-center text-base py-1.5 px-3 rounded-md gap-3 no-underline text-white hover:bg-gray-700"
    >
      <FaRegCircleUser size={20}/>
      My Account
    </Link>
  );
}

export default AuthButton