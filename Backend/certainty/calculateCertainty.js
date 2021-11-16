import defaultCertainties from "./defaultCertainties.js"

function interestCertainty(previousAmount, currentAmount, originalCertainty) {
    if (!originalCertainty) originalCertainty = defaultCertainties.interest

    const newUncertainty = (originalCertainty * (1 + (currentAmount / previousAmount))) / 2
    return newUncertainty
}

export default interestCertainty