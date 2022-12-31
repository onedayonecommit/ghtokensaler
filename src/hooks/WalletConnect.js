export const useMemaLogin = async () => {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    console.log(accounts)
}
