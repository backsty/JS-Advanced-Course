export function orderByProps(obj, order) {
    const result = [];

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result.push({ key: key, value: obj[key] });
        }
    }

    result.sort((a ,b) => {
        let indexA = order.indexOf(a.key);
        let indexB = order.indexOf(b.key);
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        } else if (indexA !== -1) {
            return -1;
        } else if (indexB !== -1) {
            return 1;
        } else {
            return a.key.localeCompare(b.key);
        }
    });

    return result;
}

export function getSpecials({ special }) {
    return special.map((
        { id, name, description = "Описание недоступно", icon }
    ) => (
        { id, name, description, icon }
    ));
}