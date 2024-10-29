export default function json(data) {
    if (!(data instanceof Uint16Array)) {
        throw new Error('Некорректные данные');
    }
    
    return String.fromCharCode.apply(null, new Uint16Array(data));
}