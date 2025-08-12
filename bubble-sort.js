function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.

    // Make another loop (inside the first one) to go through one 
    // round of swapping from the start of the list to the end

    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array
    let swapped = false;
    do {
        // let mid;
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (i < array.length - 1) {

                let first = array[i];
                let second = array[i + 1];
                if (first > second) {
                    array[i + 1] = first;
                    array[i] = second;
                    // second = mid;
                    swapped=true
                }
            }
        }
    } while (swapped);
    return array;
}

module.exports = bubbleSort;