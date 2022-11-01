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
import DeleteIcon from '../../../assets/delete.svg';

export const EventDetailsModalLayout = (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();
  const id = useSelector(selectCurrentSelectedEventId) || '';
  const events = getLocalStorageData('events');
  const filteredEventData = events.filter(
    (item: CalendarEventData) => item.uniqueEventId !== id
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
        <div className="w-full flex justify-end items-center mb-[15px] gap-4 cursor-move control-buttons">
          <EditOutlined
            onClick={() => dispatch(makeEventDetailsModalEditable())}
            className="hover:text-[black]/[0.5]"
          />
          <img
            src={DeleteIcon}
            onClick={deleteEventHandler}
            className="cursor-pointer hover:text-[#ff4d4f]"
          />
          <CloseOutlined
            onClick={() => dispatch(closeEventModalPopup())}
            className="!text-[#f64e4e] hover:!text-[#ff4d4f]"
          />
        </div>
        {children}
      </div>
    </Draggable>
  );
};
