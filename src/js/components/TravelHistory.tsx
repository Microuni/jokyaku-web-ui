import { ArrowDownIcon, TicketIcon } from '@heroicons/react/outline';
import { Tag } from '@vechaiui/react';
import React from 'react'
import TravelEntry from '../models/TravelEntry'
import TravelVector from './vectors/TravelVector'
import axios from '../utils/axios';
import LoadingScreen from './layout/LoadingScreen';
import Page from './layout/Page'
import PlaceholderScreen from './layout/PlaceholderScreen';

function TravelHistory() {
  const [entries, setEntries] = React.useState<TravelEntry[]|null>(null)

  React.useEffect(() => {
    if (!entries) {
      axios
      .get('/passengers-service/travel-entries')
      .then(response => {
        setEntries(response.data)
      })
    }
  });

  return (
    <Page title={entries && entries.length ? "Travel History" : null} icon={<TicketIcon />} sidebar="true">
      {!entries ? (
        <LoadingScreen />
      ) : (!entries.length ? (
        <PlaceholderScreen
          icon={<TravelVector />}
          title="Nothing yet.. Use your card and travel around!" />
      ) : (
        <table className="Table">
          <thead>
            <tr>
              <th>Bus</th>
              <th>Route</th>
              <th>Departed At</th>
              <th>From</th>
              <th>To</th>
              <th>Fee</th>
              <th>Reduction</th>
              <th>Final Fee</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e, index) => {
              const datetime = new Date(e.departedAt);

              return (
                <tr key={index}>
                  <td>{e.busNumber}</td>
                  <td>{e.routeNumber}</td>
                  <td>{datetime.toLocaleDateString()} {datetime.toLocaleTimeString()}</td>
                  <td>{e.departedFrom}</td>
                  <td>{e.headedTo}</td>
                  <td>
                    <Tag variant="light">
                      <Tag.Label>{e.fee}</Tag.Label>
                    </Tag>
                  </td>
                  <td>
                    {e.reduction && (
                      <Tag variant="light" className="Tag--success">
                        <Tag.Label>
                          <ArrowDownIcon width="12" />
                          {e.reduction}%
                        </Tag.Label>
                      </Tag>
                    )}
                  </td>
                  <td>
                    <Tag variant="outline">
                      <Tag.Label>{e.finalFee}</Tag.Label>
                    </Tag>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ))}
    </Page>
  )
}

export default TravelHistory
