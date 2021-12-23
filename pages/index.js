import Head from 'next/head';
import Header from "../components/Header";
import Messages from "../components/Messages";
import Login from "../components/Login";
import {useMoralis} from "react-moralis";

export default function Home() {

  const {isAuthenticated, logout} = useMoralis();

    if(!isAuthenticated) return <Login/>
  return (
    <div className="h-screen
      overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900
      overflow-hidden">
      <Head>
        <title>Meta chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='max-w-screen-2xl 
        mx-auto'>
          <Header/>
          
          <Messages/>
        
    </div>
      
    <button onClick={logout}>Logout</button>
      
    </div>
  )
}
