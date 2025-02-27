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
    <p>Redirecting you in {countdown} second{countdown !== 1 ? 's' : ''}...</p>
  );
}
