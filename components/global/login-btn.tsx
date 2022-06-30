import { useSession, signIn, signOut } from "next-auth/react"
export default function UserAuth({className} : {className: string}) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button className={className} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className={className} onClick={() => signIn()}>Sign in</button>
    </>
  )
}