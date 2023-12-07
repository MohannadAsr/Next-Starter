import { useRouter } from 'next/router';
import React from 'react';

function HomeDetails() {
  const router = useRouter();

  return (
    <div>
      HomeDetails{router.query.id}
      {router.query.hello}
    </div>
  );
}

export default HomeDetails;
