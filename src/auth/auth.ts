export function authTest() {
    try {
        console.log(`authTest has run`)
        return;
    } catch (er: any) {
        console.error(er);
        return;
    }
}
