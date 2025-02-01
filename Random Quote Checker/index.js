const quotes=[
"I think, therefore I am. (Rene Descartes)",
"I may disagree with what you say, but I will defend to death your right to say it. (Evelyn Beatrice Hall)",
"If men were perfectly virtuous, they wouldn’t have friends. (Montesquieu)",
"Ignorance is bliss.",
"People do what they hate for money and use the money to do what they love. (Jimmy O. Yang’s dad?)",
"Small things make perfection, but perfection is no small thing. (Sir Henry Royce)",
"A masterpiece is born a masterpiece. (Hyouka)",
"Who will guard the guardians?",
"History will be kind to me, for I intend to write it. (Winston Churchill)",
"No problem can be solved from the same level of consciousness that created it. We must see the world anew. (Albert Einstein)"
]
const usedIndexes=new Set()
const quoteElement=document.getElementById("quote")

function generateQuote(){
    while(true){
    const randomIdx = Math.floor(Math.random() *quotes.length)
    if(usedIndexes.has(randomIdx)) continue
    const quote=quotes[randomIdx]
    quoteElement.innerHTML=quote;
    usedIndexes.add(randomIdx)
    break;
}
}