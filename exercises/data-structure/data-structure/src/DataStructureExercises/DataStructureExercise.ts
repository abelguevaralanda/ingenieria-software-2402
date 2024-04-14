
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

