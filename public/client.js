async function rpcClient(data){
  //  const url = "http://localhost:3000";
    const url = "https://1muhiredavid.github.io/rpc_program";
    const response = await fetch(`${url}/RPC`, {
        method: "POST",
        headers: {
            "content-type":"application/json"
        }, 
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result;
}
