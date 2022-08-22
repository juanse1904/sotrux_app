import { CALL_PUBLIC_COPIES } from "../actions/actionTypes";
const initialStore = {
  idCounter: 0,
  dynamoTables: [],
  public_windows: {},
};

export const reducers = (state = initialStore, action) => {
  switch (action.type) {
    case CALL_PUBLIC_COPIES: {
      const copies = {};
      action.payload.data.body.languages.forEach((language) => {
        const langCopie = {};
        language.tabs[0].fields.forEach((field) => {
          langCopie[field.code] = field.name;
        });
        copies.language.iscode = langCopie;
      });
      return {
        ...state,
        public_windows: {
          ...state.public_windows,
          [action.payload.windowId]: copies,
        },
      };
    }
    default:
      return state;
  }
};
