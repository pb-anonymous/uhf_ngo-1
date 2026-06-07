export function generatePassword(
    fullName: string
) {
    const prefix = fullName
        .replace(/[^A-Za-z]/g, "")
        .substring(0, 3);

    return `${prefix}@uhf2026`;
}