export default function elementsReducer(list: any, action: any) {


    switch (action.type) {
        case 'added': {
            return [
                ...list,
                action.element
            ];
        }
        case 'changed': {
            return list.map((element: any) => {
                if (element.id === action.element.id) {
                    return action.element;
                } else {
                    return element;
                }
            });
        }
        case 'deleted': {
            return list.filter((element: any) => element.id !== action.element.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}