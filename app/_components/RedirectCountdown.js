'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectCountdown({ redirectPath, seconds = 5 }) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push(redirectPath);
    }, seconds * 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [redirectPath, router, seconds]);

  return (
    <p className="text-sm text-gray-600 mt-2 font-medium">
      Redirecting you in <span className="text-blue-600">{countdown}</span> second{countdown !== 1 ? 's' : ''}...
    </p>
  );
}
