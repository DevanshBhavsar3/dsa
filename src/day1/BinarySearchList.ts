export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middle = Math.floor(low + (high - low) / 2);

        if (needle === haystack[middle]) {
            return true;
        } else if (haystack[middle] < needle) {
            low = middle + 1;
        } else if (haystack[middle] > needle) {
            high = middle;
        }
    } while (low < high);

    return false;
}
