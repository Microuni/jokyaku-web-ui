import { ExclamationIcon, RefreshIcon } from '@heroicons/react/outline';
import { CreditCardIcon, CheckIcon, XIcon } from '@heroicons/react/solid';
import { IconButton, Tag, useMessage } from '@vechaiui/react';
import Avatar from 'boring-avatars';
import React from 'react';
import CardRequest from '../models/CardRequest';
import axios from '../utils/axios';
import datetime from '../utils/datetime';
import LoadingScreen from './layout/LoadingScreen';
import Page from './layout/Page';
import PlaceholderScreen from './layout/PlaceholderScreen';
import UserLink from './UserLink';
import CardVector from './vectors/CardVector';

function CardRequests() {
  const message = useMessage()
  const [entries, setEntries] = React.useState<CardRequest[]|null>(null)
  const [loading, setLoading] = React.useState<string|null>(null)

  React.useEffect(() => {
    if (!entries) {
      axios
        .get('/passengers-service/card-requests')
        .then(response => {
          setEntries(response.data)
        })
    }
  }, [entries]);

  const cardAction = (e: CardRequest, action: string) => {
    setLoading(e.id+action)

    axios
      .withToast({
        call: message,
        success: action === 'decline' ? 'Card Request Declined!' : 'Card Request Accepted!',
        error: 'Something went wrong.. Try again later.'
      })
      .post(`/passengers-service/card-requests/${e.id}/${action}`)
      .finally(() => {
        setEntries(null)
        setLoading(null)
      })
  }

  return (
    <Page
      icon={<CreditCardIcon />}
      title="Card Requests"
      sidebar="true">

      {!entries ? (
        <LoadingScreen />
      ) : (!entries.length ? (
        <PlaceholderScreen
          icon={<CardVector />}
          title="Nothing yet.. Let people know about the app!" />
      ) : (
        <>
          <div className="Table-precontrols">
            <IconButton
              icon={<RefreshIcon width={12} />}
              variant='light'
              onClick={() => setEntries(null)} />
          </div>
          <table className="Table">
            <thead>
              <tr>
                <th>id</th>
                <th>User</th>
                <th>Requested At</th>
                <th>Status</th>
                <th>Reason</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.id}</td>
                    <td>
                      <UserLink user={e.user!} />
                    </td>
                    <td>
                      <Tag variant="light">
                        <Tag.Label>{datetime(e.requestedAt)}</Tag.Label>
                      </Tag>
                    </td>
                    <td>
                      {e.acceptedAt ? (
                        <Tag variant="light" className="Tag--success">
                          <Tag.Label>
                            <CheckIcon width="12" />
                            {datetime(e.acceptedAt)}
                          </Tag.Label>
                        </Tag>
                      ) : (e.refusedAt ? (
                        <Tag variant="light" className="Tag--error">
                          <Tag.Label>
                            <XIcon width="12" />
                            {datetime(e.refusedAt)}
                          </Tag.Label>
                        </Tag>
                      ) : (
                        <Tag variant="light" className="Tag--warning">
                          <Tag.Label>
                            <ExclamationIcon width="12" />
                            Pending
                          </Tag.Label>
                        </Tag>
                      ))}
                    </td>
                    <td>{e.reason}</td>
                    <td>
                      {!e.refusedAt && !e.acceptedAt ? (
                        <div className='Table-controls'>
                          <IconButton
                            variant='light'
                            icon={<CheckIcon width="12" />}
                            color='positive'
                            onClick={() => cardAction(e, 'confirm')}
                            loading={loading === e.id+'confirm'}/>
                          <IconButton
                            variant='light'
                            icon={<XIcon width="12" />}
                            color='danger'
                            onClick={() => cardAction(e, 'decline')}
                            loading={loading === e.id+'decline'}/>
                        </div>
                      ) : ""}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
      ))}

    </Page>
  );
}

export default CardRequests;
