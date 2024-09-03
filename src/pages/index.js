import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import ProtectedRoute from '@/middleware/ProtectedRoute';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const data = useSession();
  console.log({ data });
  return (
    <div className={`h-screen w-screen bg-white flex justify-center items-center`}>
      <div className="text-primary space-y-4 text-center">
        <p className="text-3xl">Hello {data.data.user.name}!</p>
        <Button className="" size="sm" color="primary" onClick={() => signOut()}>
          Signout
        </Button>
      </div>
    </div>
  );
};

export default ProtectedRoute(Home);
