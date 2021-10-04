import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

// type UpdateAction = {
//   type: 'increment' | 'decrement';
//   payload: number;
// };

// type ResetAction = {
//   type: 'reset';
// };

/**
 * this type will accept above two types values
 */
// type CounterAction = UpdateAction | ResetAction;

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [newUser, setNewUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'vigneshwaran',
      email: 'hello@gmail.com',
    });
    setNewUser({
      name: 'vigneshwaran Chandrasekaran',
      email: 'Chandrasekaran@gmail.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Set user</button>
      <button onClick={handleLogout}>Remove user</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
      <div>New User name is {newUser.name}</div>
      <div>New User email is {newUser.email}</div>
    </div>
  );
}
