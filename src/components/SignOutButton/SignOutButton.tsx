interface SignOutButtonProps {
  signOutUser: () => Promise<void>;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ signOutUser }) => {
  return (
    <button onClick={signOutUser} className="signOutButton">
      Sign Out
    </button>
  );
};

export default SignOutButton;
