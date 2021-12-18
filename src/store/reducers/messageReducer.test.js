import messageSlice, {add} from "./messageReducer";
import moment from "moment";

it('new message should be added', () => {
    // data
    let state = {
        list: {
            0: [],
            1: [],
            2: [],
        }
    }

    let message = {
        author: 'TestAuthor',
        text: 'TestMessage',
        date:  moment().format('LTS L'),
        chatId: '0',
        isBot: false
    }

    let action = add(message);

    // action
    let newState = messageSlice(state, action);

    // expectation
    expect(Object.keys(newState.list["0"]).length).toBe(1);
});