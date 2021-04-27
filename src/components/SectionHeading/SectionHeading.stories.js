import React from 'react';
import {storiesOf} from '@storybook/react-native';
import SectionHeading from './SectionHeading';

// Some changes
storiesOf('Section Heading', module).add('Heading', () => (
  <SectionHeading title={'Select a category:'} />
));
