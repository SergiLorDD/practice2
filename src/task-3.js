export default function boundingRect(coordsList) {
    if (coordsList.length === 0)
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
    const newCoordsList = coordsList.reduce(
        (arr, obj) => [
            [...arr[0], obj.x],
            [...arr[1], obj.y],
        ],
        [[], []]
    );
    return {
        top: Math.max(...newCoordsList[1]),
        right: Math.max(...newCoordsList[0]),
        bottom: Math.min(...newCoordsList[1]),
        left: Math.min(...newCoordsList[0]),
    };
}
