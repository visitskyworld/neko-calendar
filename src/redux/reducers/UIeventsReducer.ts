import { ActionType } from '../ActionTypesConstants';
import { UIinitialState } from '../../ts-generalTypes/InitialStateInterfaces';
import { UIAction } from '../../ts-generalTypes/UIactionsInterfaces';
import { days } from '../../helpers/fixtures';

const initialState: UIinitialState = {
  isEventCreatorWindowVisible: false,
  isEventModalVisible: false,
  isEventModalEditable: false,
  isLoginWindowVisible: false,
  mouseCoordinates: { x: 0, y: 0 },
  downloadWeekDaysName: days,
  currentCalendarView: 'month',
  modalDate: '',
};

const UIComponentsreducer = (
  state: UIinitialState = initialState,
  action: UIAction
) => {
  switch (action.type) {
    case ActionType.OPEN_EVENT_CREATOR_WINDOW:
      return {
        ...state,
        isEventCreatorWindowVisible: true,
      };
    case ActionType.CLOSE_EVENT_CREATOR_WINDOW:
      return {
        ...state,
        isEventCreatorWindowVisible: false,
      };
    case ActionType.OPEN_EVENT_MODAL_POPUP:
      return {
        ...state,
        isEventModalVisible: true,
        modalDate: action.payload,
      };
    case ActionType.CLOSE_EVENT_MODAL_POPUP:
      return {
        ...state,
        isEventModalVisible: false,
        isEventModalEditable: false,
      };

    case ActionType.SET_MOUSE_COORDINATES:
      return {
        ...state,
        mouseCoordinates: action.payload,
      };
    case ActionType.EDIT_CALENDAR_EVENT:
      return {
        ...state,
        isEventModalEditable: !state.isEventModalEditable,
      };
    case ActionType.CHANGE_CALENDAR_VIEW:
      return {
        ...state,
        currentCalendarView: action.payload,
      };
    default:
      return state;
  }
};

export default UIComponentsreducer;
