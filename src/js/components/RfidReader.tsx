import { CreditCardIcon, PlayIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import React, { SyntheticEvent } from 'react';
import AuthPage from './layout/AuthPage';
import reader from '../../assets/rfid-reader.png';
import { Button, FormControl, FormLabel, Icon, Input, useMessage } from '@vechaiui/react';
import clsx from 'clsx';
import axios from '../utils/axios';
import { Disclosure } from '@headlessui/react';
import RfidCard from './RfidCard';

function RfidReader() {
  const [simulate, setSimulate] = React.useState(false);
  const [number, setNumber] = React.useState("051656541645");
  const [departedFrom, setDepartedFrom] = React.useState("Constantine")
  const [headedTo, setHeadedTo] = React.useState("Alger")
  const [fee, setFee] = React.useState(1350)
  const [busNumber, setBusNumber] = React.useState(23648)
  const [routeNumber, setRouteNumber] = React.useState(59)
  const message = useMessage();

  const submit = () => {
    setTimeout(() => {
      axios.post('/passengers-service/validate', {
        rfid: number,
        departedFrom,
        headedTo,
        fee,
        busNumber,
        routeNumber
      }).then(response => {
        message({
          message: "RFID Card valid, transaction saved.",
          status: "success",
          position: "bottom-right",
        });
      }).catch(() => {
        message({
          message: "RFID Card invalid.",
          status: "error",
          position: "bottom-right",
        });
      })
    }, 1500)
  }

  return (
    <AuthPage title="RFID Reader" icon={<CreditCardIcon />}>

      <div className="RfidSimulation">

        <RfidCard
          number={number}
          simulate={simulate}
          onInput={(e: any) => setNumber(e.target.textContent)}/>

        <div className="RfidReader">
          <img src={reader} />
        </div>

        <Button
          leftIcon={<PlayIcon width={20} />}
          variant="light"
          color="primary"
          onClick={() => {
            setSimulate(true)
            submit()
            setTimeout(() => setSimulate(false), 3000)
          }}>
          Simulate
        </Button>

        <Disclosure as="div">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">
                <span>Entry Details</span>
                <span>
                  {open ? <ChevronUpIcon width="20" /> : <ChevronDownIcon width="20" />}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel>

                <form className="Form">
                  <FormControl>
                    <FormLabel>From</FormLabel>
                    <Input value={departedFrom} onChange={(e) => setDepartedFrom(e.target.value)} />
                  </FormControl>

                  <FormControl>
                    <FormLabel>To</FormLabel>
                    <Input value={headedTo} onChange={(e) => setHeadedTo(e.target.value)} />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Fee</FormLabel>
                    <Input value={fee} onChange={(e) => setFee(parseInt(e.target.value))} />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Bus Number</FormLabel>
                    <Input value={busNumber} onChange={(e) => setBusNumber(parseInt(e.target.value))} />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Route Number</FormLabel>
                    <Input value={routeNumber} onChange={(e) => setRouteNumber(parseInt(e.target.value))} />
                  </FormControl>

                </form>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>

    </AuthPage>
  );
}

export default RfidReader;

