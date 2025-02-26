import { useState } from 'react';
import * as Sentry from '@sentry/browser';

const useDonation = (onSuccess?: () => void) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [donationSuccess, setDonationSuccess] = useState<boolean>(false);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    console.log(`Initiating donation of ${quantity} food items`);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(`Successfully donated ${quantity} food items`);
      setDonationSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
      setTimeout(() => setDonationSuccess(false), 3000);
    } catch (error) {
      console.error('Error processing donation:', error);
      Sentry.captureException(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { quantity, setQuantity, isSubmitting, donationSuccess, handleDonation };
};

export default useDonation;