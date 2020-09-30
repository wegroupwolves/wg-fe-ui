import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import IconFamilyFilled from '../src/components/Icons/IconFamilyFilled';
// import {
// withKnobs,
// select,
// text,
// boolean,
// } from '@storybook/addon-knobs';

import { ActionButton, ToastContainer, toast } from '../src/';

storiesOf('Low level blocks/Toasters', module)
  // .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      inline: true,
      text: `
        To use the toaster, place the ToastContainer in the root of the project.
        When you want to show the toaster you can simply call: 

        ~~~js
        const options = { 
          onClick: () => console.log('clicked'),
        };

        toast(
        {
          title: 'Wow so easy !',
          subtitle:
            'This is a crazy long subtitle to check if it will break the toaster component, this needs to be a lot longer so it can break',
          icon: <IconFamilyFilled color="white" />,
          showIconCircle: true,
        },
          options
        )
        ~~~
        toast options are available at: https://fkhadra.github.io/react-toastify/api/toast
  `,
    }),
  )
  .add('Toaster', () => {
    function handleToaster() {
      toast.error(
        {
          title: 'Wow so easy !',
          subtitle:
            'This is a crazy long subtitle to check if it will break the toaster component, this needs to be a lot longer so it can break',
          icon: <IconFamilyFilled color="white" />,
          showIconCircle: true,
        },
        {
          onClick: () => console.log('clicked'),
        },
      );

      // toast.error('test');
    }

    return (
      <>
        <ActionButton onClick={handleToaster}>Click me!</ActionButton>
        <ToastContainer />
      </>
    );
  });
