import boundingRect from './task-3.js'
import roverMoves from './task-4.js'

function getExpeditionsTargets(commandSeries) {
   return commandSeries.reduce((series, commands) => [...series, roverMoves(commands)], []);
}

export default function boundingRover(commandSeries) {
    return boundingRect(getExpeditionsTargets(commandSeries))
}