import { signInWithGithub, signOut } from "@/actions/auth";
import { currentUser } from "../data/auth";

export default async function Page() {
  const user = await currentUser();

  return (
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
  );
}
