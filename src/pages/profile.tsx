import { router } from '@trpc/server';
import { trpc } from '../utils/trpc';
import { getSession, GetSessionParams, useSession } from 'next-auth/react';
import { prisma } from 'server/prisma';
import { BraketUserProfile } from '@prisma/client';

// export const getServerSideProps = async (context: GetSessionParams | undefined) => {
//   const session = await getSession(context);
//   let profile: BraketUserProfile;

//   if (null === session) return {props: {session}}
//   const found = trpc.useQuery(["braket-user.find-one", {email: session.user.email}])
//   if (null === found) {
//     const mutation = trpc.useMutation(["braket-user.create-profile"])
//     mutation.mutate({profileImage: "profileImage",
//       biography: "biography",
//       username: "username",
//       timezone: "timezone",
//       email: session.user.email,})
//   }

//   return {
//     props: {
//       session,
//       profile,
//     }
//   };
// }

// const AddPostForm = () => {
//   const utils = trpc.useContext();
//   const addPost = trpc.useMutation('post.add-post', {
//     async onSuccess() {
//       // refetches posts after a post is added
//       await utils.invalidateQueries(['post.all']);
//     },
//   });

//   return <form action="">

//   </form>
// }s

export default function ProfilePage() {
  const utils = trpc.useContext();
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    return <>You are not logged in</>
  }
  let found = trpc.useQuery(["braket-user.find-one", {email: session?.user.email}]);

  if (null !== found.data) {
    
  }

  
  const mutation = trpc.useMutation(["braket-user.create-profile"], {
    async onSuccess() {
      await utils.invalidateQueries(['braket-user.find-one']);
    }
  })
  //   found = trpc.useMutation(["braket-user.create-profile"])
  //   .mutate({profileImage: "None",
  //     biography: "None",
  //     username: session?.user.email,
  //     timezone: "None",
  //     email: session?.user.email,})
  // }
  // const newUser = trpc.useMutation(["braket-user.create-profile"]);
  const {data, error, isLoading} = trpc.useQuery(['healthz'])
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
      <button className="w-32 h-32 bg-cyan-600" onClick={() => {console.log(session)}}>
          Something
      </button>

      <> 
        
      </>

      {/* <AddPostForm /> */}
    </>
  );
};