import Login from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Vigneshwaran" />;
  }
  return <Login />;
}
