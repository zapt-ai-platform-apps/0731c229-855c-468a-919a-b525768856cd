import React from 'react';
import useDonation from './useDonation';

interface DonationFormProps {
  onSuccess?: () => void;
}

function DonationForm({ onSuccess }: DonationFormProps) {
  const { quantity, setQuantity, isSubmitting, donationSuccess, handleDonation } = useDonation(onSuccess);

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-700">Donate Food Today</h2>
        <p className="mb-6 text-gray-600 text-center">
          Your donation helps provide meals to those in need. Each unit represents approximately one meal.
        </p>
        {donationSuccess && (
          <div className="mb-6 p-3 bg-emerald-100 text-emerald-700 rounded-md text-center">
            Thank you for your generous donation!
          </div>
        )}
        <form onSubmit={handleDonation} className="space-y-6">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity to Donate
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="box-border w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200 cursor-pointer ${isSubmitting ? 'opacity-75' : ''}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Donate Now'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;