import { CreditCardIcon, PlayIcon } from '@heroicons/react/solid';
import React from 'react';
import AuthPage from './layout/AuthPage';
import reader from '../../assets/rfid-reader.png';
import { Button } from '@vechaiui/react';
import clsx from 'clsx';

function RfidReader() {
  const [simulate, setSimulate] = React.useState(false);
  const [number, setNumber] = React.useState("09 65 41 23 45");

  return (
    <AuthPage title="RFID Reader" icon={<CreditCardIcon />}>

      <div className="RfidSimulation">

        <div className={clsx("RfidCard", simulate && "RfidCard--play")}>
          <span
            className="RfidCard-number"
            contentEditable="true"
            suppressContentEditableWarning={true}
            onChange={(e: any) => setNumber(e.target.value)}>{number}</span>
        </div>

        <div className="RfidReader">
          <img src={reader} />
        </div>

        <Button
          leftIcon={<PlayIcon width={20} />}
          variant="light"
          color="primary"
          onClick={() => {
            setSimulate(true)
            setTimeout(() => setSimulate(false), 3000)
          }}>
          Simulate
          </Button>

      </div>

    </AuthPage>
  );
}

export default RfidReader;

