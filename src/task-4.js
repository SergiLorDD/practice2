export default function runRover(commandsList) {
    if (!commandsList || commandsList.length === 0)
        return {
            x: 0,
            y: 0,
        };
    const sortedCommandsList = commandsList.sort(
        (obj1, obj2) => obj1.order - obj2.order
    );
    let movedTo = { to: "y", on: 1 };
    return sortedCommandsList.reduce(
        (position, { command }) => {
            const splitStr = command.split(" ");
            if (splitStr[0] === "go") {
                let newPosition = position;
                newPosition[movedTo.to] =
                    newPosition[movedTo.to] + Number(splitStr[1]) * movedTo.on;
                return newPosition;
            }
            if (command === "turn left") {
                movedTo = movedToCreator(movedTo, "y");
            }
            if (command === "turn right") {
                movedTo = movedToCreator(movedTo, "x");
            }
            return position;
        },
        {
            x: 0,
            y: 0,
        }
    );
}

function movedToCreator(movedTo, prop) {
    return {
        to: movedTo.to === "x" ? "y" : "x",
        on: movedTo.to === prop ? movedTo.on * -1 : movedTo.on,
    };
}
