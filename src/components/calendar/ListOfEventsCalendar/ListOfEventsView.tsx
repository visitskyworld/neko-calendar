import React from 'react';
import { Collapse, Badge } from 'antd';
import { useSelector } from 'react-redux';

import { setListOfEventsInStorage } from '../../../redux/selectors';
import { CalendarEventData } from '../../../ts-generalTypes/InitialStateInterfaces';

const { Panel } = Collapse;

interface AccProps {
  [key: string]: CalendarEventData[];
}

export const ListOfEventsView = () => {
  const listOfEvents = useSelector(setListOfEventsInStorage).reduce(
    (acc: AccProps, curVal: CalendarEventData) => {
      let val: string = curVal.date!.slice(2);
      if (acc.hasOwnProperty(val)) {
        acc[val].push(curVal);
      } else acc[val] = [curVal];

      return acc;
    },
    {}
  );
  const keys = Object.keys(listOfEvents);

  return (
    <Collapse className="w-full bg-inherit" defaultActiveKey={['1']}>
      {keys.map((item, index) => (
        <Panel header={item} key={index}>
          <div className="wrapper flex flex-col text-inherit bg-inherit">
            {listOfEvents[item].map((val) => (
              <Badge
                key={val.uniqueEventId}
                status="success"
                style={{ color: 'inherit', backgroundColor: 'transparent' }}
                text={val.description}
              />
            ))}
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};
