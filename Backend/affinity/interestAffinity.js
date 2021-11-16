function interestAffinity(previousAmount, currentAmount, originalAffinity) {
    if (!originalAffinity) originalAffinity = 0

    const newAffinity = originalAffinity + 10 * (currentAmount - previousAmount)
    return newAffinity
}

export default interestAffinity