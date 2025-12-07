'use client';

import * as FormPrimitive from '@coraline-ui/form';
import { useState } from 'react';

export const ContactForm = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <FormPrimitive.Root>
        <FormPrimitive.Form>
          <FormPrimitive.Content>
            <FormPrimitive.Input
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </FormPrimitive.Content>
          <FormPrimitive.SubmitButton ariaLabel="Ask ChatGPT" disabled={!value.trim()} />
        </FormPrimitive.Form>
      </FormPrimitive.Root>
    </div>
  );
};
