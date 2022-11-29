let word = 'Antonio';

let reverso = "";

for (let index =0; index < word.length; index +=1) {
    reverso += word[word.length -1 - index];
}
console.log(reverso);