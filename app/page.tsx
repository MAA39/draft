import { signInWithGithub, signOut } from "@/actions/auth";
import { redirect } from "next/navigation";
import { currentUser } from "./data/auth";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <p className="p-6">Hello, World!</p>
      <div className="p-6">
        <div>
          {user ? (
            <form action={signOut}>
              <button>ログアウト</button>
            </form>
          ) : (
            <form action={signInWithGithub}>
              <button>GitHubでログイン</button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
