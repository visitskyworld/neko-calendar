import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import { toast } from 'react-toastify';

import {
  closeEventModalPopup,
  makeEventDetailsModalEditable,
} from '../../../redux/actions/actionsUI';
import { deleteEvent } from '../../../redux/actions/actionsCalendar';
import { selectCurrentSelectedEventId } from '../../../redux/selectors';
import { CalendarEventData } from '../../../ts-generalTypes/InitialStateInterfaces';
import {
  getLocalStorageData,
  setLocalStorageData,
} from '../../../helpers/local-storage-utils';

export const EventDetailsModalLayout = (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();
  const id = useSelector(selectCurrentSelectedEventId) || '';
  const events = getLocalStorageData('events');
  const filteredEventData = events.filter(
    (item: CalendarEventData) => item.uniqueEventId === id
  );

  const deleteEventHandler = () => {
    dispatch(deleteEvent(id));
    setLocalStorageData('events', JSON.stringify([...filteredEventData]));
    setTimeout(() => dispatch(closeEventModalPopup()), 10);
    toast.success('Event succefully deleted!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  };

  return (
    <Draggable>
      <div className="w-[500px] absolute bottom-[40vh] left-[35vw] z-[999] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[10px] bg-white p-5">
        <div className="w-full flex justify-end mb-[15px] gap-5 cursor-move control-buttons">
          <Button
            shape="circle"
            icon={<EditOutlined />}
            size="middle"
            onClick={() => dispatch(makeEventDetailsModalEditable())}
          />
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            danger
            size="middle"
            onClick={deleteEventHandler}
          />
          <Button
            shape="circle"
            icon={<CloseOutlined />}
            size="middle"
            onClick={() => dispatch(closeEventModalPopup())}
          />
        </div>
        {children}
      </div>
    </Draggable>
  );
};
