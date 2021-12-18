import chatsSlice, {add} from "./chatsReducer";

it('new chat should be added', () => {
    // data
    let state = {
        list: {
            0: 'Беседка',
            1: 'Спорт',
            2: 'Игры'
        }
    }

    let action = add('testChat');

    // action
    let newState = chatsSlice(state, action);

    // expectation
    expect(Object.keys(newState.list).length).toBe(4);
});