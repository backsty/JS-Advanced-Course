export default function canIterate(obj) {
    if (obj == null) {
        return false;
    }

    return typeof obj[Symbol.iterator] === 'function';
}