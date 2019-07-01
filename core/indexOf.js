import createIndexOfFinder from './createIndexOfFinder';
import findIndex from './findIndex';
import sortedIndex from './sortedIndex';
const indexOf = createIndexOfFinder(1, findIndex, sortedIndex);
export default indexOf;