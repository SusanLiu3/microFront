export default async function getModuleList() {
    const twoLargeNumberAdd = import("main/twoLargeNumberAdd");
    let res
    await twoLargeNumberAdd.then((m) => {
        res = m.default;
    });
    return res
}