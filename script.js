console.log("Let's write JavaScript")

async function main() {
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let respose = await a.text()
    console.log(respose) 
}