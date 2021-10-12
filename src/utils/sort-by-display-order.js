/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
module.exports = (collection) => {
  return collection.sort((a, b) => {
    return Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1;
  });
};
