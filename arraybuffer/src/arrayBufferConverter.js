export default class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    };

    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        const bufferView =  new Uint16Array(this.buffer);
        let outputString = '';
        for (let i = 0; i < bufferView.length; i++) {
            outputString += String.fromCharCode(bufferView[i]);
        }
        return outputString;
    }
}

export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const newArrayBufferSize = 2 * data.length;
    return (input => {
        const buffer = new ArrayBuffer(newArrayBufferSize);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
    })(data);
}