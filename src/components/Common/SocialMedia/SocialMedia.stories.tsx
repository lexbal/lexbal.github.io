/* eslint-disable */
import SocialMedia from './SocialMedia';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: "SocialMedia",
};

export const Default = () => <SocialMedia href="http://www.test.com" icon={faCoffee} />;

Default.story = {
  name: 'default',
};
