export function generatePhoneNumber(): string {
    const min = 100000000;
    const max = 999999999;
    const phoneNumber = (
                Math.floor(Math.random() * (max - min + 1)) + min
    ).toString();
    return phoneNumber;
}