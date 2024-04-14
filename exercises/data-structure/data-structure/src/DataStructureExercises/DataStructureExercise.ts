
type SymbolsCouplesType = { [key: string]: string }
export const verificationSymbols = (symbols: string) => {
    const stack: string[] = [];
    const symbolsCouples: SymbolsCouplesType = { '(': ')', '{': '}', '[': ']' };

    for (const symbol of symbols) {
        if (symbolsCouples[symbol]) {
            stack.push(symbol);
            continue;
        }

        const lastOpened = stack.pop();
        const isValidClosing = lastOpened && symbolsCouples[lastOpened] === symbol;

        if (!isValidClosing) {
            return false;
        }
    }
    return stack.length === 0;
}

/*
Como estructura de datos, usaremos un stack (estructura de datos LIFO, Last In First Out) para almacenar los símbolos abiertos. Comprobando si los simbolos cerrados corresponden a los abiertos, se van eliminando los simbolos abiertos de la pila.

En JavaScript, los Arrays son una estructura de datos dinámica que puede contener una colección ordenada de elementos, y pueden crecer o reducir su tamaño dinámicamente. Se implementan internamente utilizando una estructura similar a una lista vinculada, lo que les permite tener un acceso rápido a sus elementos mediante índices numéricos. Esto los hace adecuados para una amplia gama de aplicaciones, desde la implementación de pilas y colas hasta la gestión de datos estructurados y la realización de operaciones de búsqueda y filtrado.
*/

