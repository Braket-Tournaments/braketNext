import { useSession, signIn, signOut } from "next-auth/react"
export default function UserAuth({className} : {className: string}) {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex flex-row">
        <p>Signed in as {session.user?.email}</p>
        <button className={className} onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="flex flex-row">
      <p>Not signed in</p>
      <button className={className} onClick={() => signIn()}>Sign in</button>
    </div>
  )
}