const abc = Buffer.alloc(26);

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());