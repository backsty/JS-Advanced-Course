export default function canIterate(obj) {
    return typeof obj[Symbol.iterator] === 'function';
}