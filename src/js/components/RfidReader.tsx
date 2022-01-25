import { CreditCardIcon } from '@heroicons/react/solid';
import React from 'react';
import AuthPage from './layout/AuthPage';

function RfidReader() {
  return (
    <AuthPage title="RFID Reader" icon={<CreditCardIcon />}>

      <div className="RfidCard">
        <h3 className="RfidCard-number" contentEditable="true">09 65 41 23 45</h3>
      </div>

    </AuthPage>
  );
}

export default RfidReader;

