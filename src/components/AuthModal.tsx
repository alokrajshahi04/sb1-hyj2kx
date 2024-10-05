import React, { useState } from 'react';
import { signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSignUp: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, isSignUp }) => {
  const [error, setError] = useState<string | null>(null); // Error state for showing messages

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider(); // Declare provider outside try-catch

    try {
      // Try signing in with a popup first
      await signInWithPopup(auth, provider);
      onClose(); // Close the modal after successful sign-in
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      // Handle popup blocked error specifically
      if (error.code === 'auth/popup-blocked') {
        setError('Popup was blocked. Trying redirect method...');
        try {
          // Fallback to sign in with redirect if popup is blocked
          await signInWithRedirect(auth, provider);
          // No need for onClose() since page reloads after redirect
        } catch (redirectError: any) {
          console.error('Google redirect sign-in error:', redirectError);
          setError('Google sign-in failed. Please try again or use email/password.');
        }
      } else {
        // Handle other Firebase errors
        setError('Google sign-in failed. Please try again or use email/password.');
      }
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
      >
        Sign in with Google
      </button>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>} {/* Show error if present */}
      <p className="text-xs text-gray-500 mt-2">
        Note: You may need to allow popups for this site to use Google Sign-In.
      </p>
    </div>
  );
};

export default AuthModal;
