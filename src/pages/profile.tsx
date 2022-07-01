import { router } from '@trpc/server';
import { trpc } from '../utils/trpc';
import { useSession } from 'next-auth/react';

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
// }

export default function ProfilePage() {
  const {data, error, isLoading} = trpc.useQuery(['healthz'])
  const session = useSession()
  
  
  
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

      {/* <AddPostForm /> */}
    </>
  );
};