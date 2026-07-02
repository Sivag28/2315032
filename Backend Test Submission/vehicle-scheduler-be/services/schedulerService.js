const findBestTasks = (
    vehicles,
    availableHours
) => {
    const size = vehicles.length;
    const dp = Array(size + 1)
        .fill()
        .map(() =>
            Array(
                availableHours + 1
            ).fill(0)
        );
    for (let i = 1; i <= size; i++) {
        for (
            let hours = 0;
            hours <= availableHours;
            hours++
        ) {
            const vehicle =
                vehicles[i - 1];
            if (
                vehicle.duration <= hours
            ) {
                dp[i][hours] = Math.max(
                    vehicle.impact +
                    dp[
                        i - 1
                    ][
                        hours -
                        vehicle.duration
                    ],
                    dp[
                        i - 1
                    ][hours]
                );
            }
            else {
                dp[i][hours] =
                    dp[
                        i - 1
                    ][hours];
            }
        }
    }
    const chosenTasks = [];
    let remaining =
        availableHours;
    for (
        let i = size;
        i > 0;
        i--
    ) {
        if (
            dp[i][remaining] !==
            dp[
                i - 1
            ][remaining]
        ) {
            chosenTasks.push(
                vehicles[i - 1]
            );
            remaining -=
                vehicles[
                    i - 1
                ].duration;
        }
    }
    return {
        totalImpact:
            dp[size][availableHours],
        tasks:
            chosenTasks.reverse()
    };
};
module.exports = {
    findBestTasks
};