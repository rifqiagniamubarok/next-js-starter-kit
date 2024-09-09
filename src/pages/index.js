import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import ProtectedRoute from '@/middleware/ProtectedRoute';
import Avvvatars from 'avvvatars-react';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const data = useSession();
  console.log({ data });
  return (
    <div className={`h-screen w-screen bg-white flex justify-center items-center`}>
      <div className="text-primary space-y-4 text-center">
        <div className="w-full flex justify-center">
          <Avvvatars value={data.data.user.name} style="shape" size={100} border={true} borderSize={4} borderColor="#3C3C3C" />
        </div>
        <p className="text-3xl">Hello {data.data.user.name}!</p>
        <Button className="" size="sm" color="primary" onClick={() => signOut()}>
          Signout
        </Button>
      </div>
    </div>
  );
};

export default ProtectedRoute(Home);
