import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TimePicker } from 'antd';
import moment from 'moment';
import { toast } from 'react-toastify';

import { BsBell, BsFileEarmarkText } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { EventDetailsModalLayout } from '../EventDetailsModalLayout';
import {
  selectCurrentSelectedEventId,
  setIsEventModalEditable,
  selectModalDate,
} from '../../../../redux/selectors';
import {
  closeEventModalPopup,
  makeEventDetailsModalEditable,
} from '../../../../redux/actions/actionsUI';
import { updateEventData } from '../../../../redux/actions/actionsCalendar';
import { CalendarEventData } from '../../../../ts-generalTypes/InitialStateInterfaces';
import { useInput } from '../../../../hooks/useInput';
import { useTextArea } from '../../../../hooks/useTextArea';
import { useTimePicker } from '../../../../hooks/useTimePicker';
import {
  getLocalStorageData,
  setLocalStorageData,
} from '../../../../helpers/local-storage-utils';
import { makeColoredIcon } from '../../../utils/Icon';

export const EventDetailsPopup = () => {
  const dispatch = useDispatch();

  const id = useSelector(selectCurrentSelectedEventId);
  const isEventModalEditable = useSelector(setIsEventModalEditable);
  const modalDate = useSelector(selectModalDate);
  const scheduledDate = moment(modalDate).format('dddd, MMM D');
  const events = getLocalStorageData('events');
  const filteredEventData = events?.filter(
    (item: CalendarEventData) => item.uniqueEventId === id
  );
  const eventTitleValue = useInput(filteredEventData[0].title, false);
  const eventDescriptionValue = useTextArea(
    filteredEventData[0].description,
    false
  );
  const time = useTimePicker(filteredEventData[0].time, false);

  const updateEventHandler = () => {
    const updatedEventObject = {
      ...filteredEventData[0],
      title: eventTitleValue.value,
      description: eventDescriptionValue.value,
      time: time.timeOption,
    };
    dispatch(updateEventData(updatedEventObject));
    dispatch(makeEventDetailsModalEditable());
    dispatch(closeEventModalPopup());

    const updateIndex = events
      .map((item: CalendarEventData) => item.uniqueEventId)
      .indexOf(id);

    setLocalStorageData(
      'events',
      JSON.stringify([
        ...events.slice(0, updateIndex),
        updatedEventObject,
        ...events.slice(updateIndex + 1),
      ])
    );

    toast.success('Event succefully updated!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  };

  return (
    <EventDetailsModalLayout>
      <div className="flex flex-col">
        <input
          className="w-4/5 outline-none border-none mr-2.5 mb-2.5 text-[18px] font-semibold leading-[27px]"
          disabled={!isEventModalEditable}
          {...eventTitleValue}
        />
        <div className="flex items-center gap-2.5 mb-[15px]">
          <span className="text-[13px] font-normal leading-[19.5px]">
            {scheduledDate} ▪
          </span>
          <TimePicker
            defaultValue={moment(time.timeOption, 'h:mm a')}
            disabled={!isEventModalEditable}
            use12Hours
            format="h:mm a"
            minuteStep={30}
            {...time}
          />
        </div>
        <div className="flex items-center mb-[15px]">
          <BsBell className="mr-2" />
          <span className="">30 mins ago</span>
        </div>
        <div className="flex items-center mb-[15px]">
          <AiOutlineFire className="mr-2" />
          <span className="">Free Mint</span>
        </div>
      </div>
      <div className="flex items-baseline">
        <BsFileEarmarkText className="mr-2" />
        <textarea
          {...eventDescriptionValue}
          className="w-4/5 h-20 outline-none border-none m-2.5 ml-0"
          disabled={!isEventModalEditable}
        ></textarea>
      </div>
      <div className="w-full flex justify-between mb-[15px]">
        <div className="flex">
          {/* {makeColoredIcon('Share')}
          {makeColoredIcon('Twitter')}
          {makeColoredIcon('Dribbble')} */}
        </div>
        <div className="flex gap-5 cursor-move control-buttons">
          <Button
            type="primary"
            onClick={updateEventHandler}
            disabled={!isEventModalEditable}
          >
            Update event
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => dispatch(makeEventDetailsModalEditable())}
            disabled={!isEventModalEditable}
          >
            Cancel
          </Button>
        </div>
      </div>
    </EventDetailsModalLayout>
  );
};
