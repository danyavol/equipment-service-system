
export function getDifference<T>(oldArray: T[], newArray: T[], compareFn: (item1: T, item2: T) => boolean) {
    const removedItems: T[] = [];
    const addedItems: T[] = [];

    oldArray.forEach(item1 => {
        const item = newArray.find(item2 => compareFn(item1, item2));
        if (!item) {
            removedItems.push(item1);
        }
    });

    newArray.forEach(item1 => {
        const item = oldArray.find(item2 => compareFn(item1, item2));
        if (!item) {
            addedItems.push(item1);
        }
    });

    return { removedItems, addedItems };
}