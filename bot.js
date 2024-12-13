const fetch = require("node-fetch");

async function uptime() {
  
  const link = "";
      try {

        fetch(link);
      } catch (e) {
        console.error("Hata: ", e);
      }
    
    console.log("Uptime başarılı");
  

  return setTimeout(uptime, 120 * 1000);
}