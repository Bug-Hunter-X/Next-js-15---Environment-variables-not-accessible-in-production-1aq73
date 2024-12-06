```javascript
// pages/about.js
import {unstable_getServerSession} from "next-auth/next";
import {useSession} from "next-auth/react";

export default function About() {
  // Solution: Use process.env.MY_CUSTOM_VARIABLE
  // console.log(process.env.MY_CUSTOM_VARIABLE);
  const {data:session, status} = useSession();
  return (
    <div>
      <h1>About Page</h1>
      <h2>{status}</h2>
      {session && <p>Email: {session.user.email}</p>}

    </div>
  );
}

export async function getServerSideProps(context){

  const session = await unstable_getServerSession(context.req, context.res)
  return{
    props:{
      session
    }
  }
}
```