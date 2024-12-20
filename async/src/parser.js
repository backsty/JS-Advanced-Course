export default function json(data) {
    if (!(data instanceof Uint16Array)) {
        throw new Error('Некорректные данные');
    }
    
    return String.fromCharCode.apply(null, new Uint16Array(data));
}



// export default function json(data) {
//     return new Promise((resolve, reject) => {
//         try {
//             if (!data instanceof Uint16Array) {
//                 throw new Error('Некорректные данные');
//             }
//             const result = String.fromCharCode.apply(null, new Uint16Array(data));
//             resolve(result)
//         } catch (error) {
//             reject(error);
//         }
//     });
// }