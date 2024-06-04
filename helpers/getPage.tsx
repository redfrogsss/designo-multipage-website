
async function getPage(path: string = "") {
    try {
        const filterRes = await fetch(`${process.env.cms_path}pages?filters[path]=/${path}`);
        const res = await fetch(`${process.env.cms_path}pages/${(await filterRes.json()).data[0].id}?populate=deep`);
        return res.json()
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export { getPage }